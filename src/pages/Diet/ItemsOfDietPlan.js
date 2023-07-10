import { Grid, Typography, Select, FormControl, InputLabel,Button, TextField } from '@mui/material';
import * as React from 'react';

// import '../../fonts/Poppins-BoldItalic.ttf'

// import '../../fonts/Poppins-ExtraBold.ttf';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Card from '@mui/material/Card';
import Iconify from 'src/components/iconify/Iconify';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase'
import { useLocation  } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TitleLogo from "../../assets/TitleLogo.svg";
import Poultry from "../../assets/Poultry.svg";
import Fish from "../../assets/Fish.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditCaloriesDiet from './Components/EditCaloriesDiet';
// import EditCalories from '../Exercises/Components/EditCalories';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
// import SearchBar from "../../layouts/dashboard/header/Searchbar";
import Searchbar from 'src/layouts/dashboard/nav/Searchbar';
import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';
import NetworkStatus from '../Network/NetworkStatus';


// import  "../styles.css";

const pageheading={
    fontFamily:"Inter-Bold",
    color:"#112866",
}

const buttonStyle = {

    position: 'absolute',
    right:20,
    borderRadius: "10px",
    boxShadow: '#c4c4c4',
    

}

const cardStyle = {
    backgroundColor: "#F0E7F5",
    margin: '1rem',
    boxShadow: '#c4c4c4'

}

const textparaStyle = {
    fontFamily: 'Inter-Regular',
    padding: "30px",
    color: "#9B54BF"
}

const maintitle = {
    fontFamily: 'Inter-Bold',
  
     // fontFamily: 'poppinsItalic',
    // // src: url('./fonts/Roboto-Regular.ttf') format('truetype'),
     fontStyle: "normal",
     fontWeight: "600",
     fontSize: "18px",
     color:"#112866",
   // fontFamily: "'Poppins', sans-serif",
    // src: `url(${poppinsItalic}) format('truetype')`,
    // lineHeight: "38px", 
};

const maintext = {
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color:"#112866",

};

const calories ={
    fontFamily: 'Inter-Regular',
    color:"#112866",
};
const caloriesremained={
    fontFamily: 'Inter-Regular',
    color:"black",

}


const imageStyles = {
  borderRadius: 100,
  objectFit: 'cover',
  maxHeight: '70px',
  minWidth: '70px',
  width: '100%', // Default width for smaller screens
  height: 'auto', // Default height for smaller screens
};

// Media query for larger screens (min-width: 768px)
const largeScreenStyles = {
  '@media (min-width: 768px)': {
    width: '150px',
    height: '150px',
  },
};

// Media query for extra large screens (min-width: 1024px)
const extraLargeScreenStyles = {
  '@media (min-width: 1024px)': {
    width: '200px',
    height: '200px',
  },
};

export default function Protein({ route, navigation,props }) {
  const servlingsLeft= useRef();
  const imageurl= "https://novapwc.com/";
  const [dataFromAPiGlobal, setDataFromAPiGlobal]= useState("");

      const location = useLocation();
    //  console.log(location?.state?.data)
    // const [data,setData] = useState(location.state?.data);
    // const[category_id,setCategory_id]=useState(location.state?.data);
    // console.log(category_id,'----data-----');

    // const [value,setValue]=useState(location.state?.data)
    //  console.log(value,"---------import api data ");
    const [count1, setCount1] = useState(0);

    const handleIncrement1 = () => {
        setCount1(count1 + 1);
    };

    const handleDecrement1 = () => {
        if (count1 > 0) {

            setCount1(count1 - 1);
        }

    };


    const [count2, setCount2] = useState(0);

    const handleIncrement2 = () => {

        setCount2(count2 + 1);
    };

    const handleDecrement2 = () => {
        if (count2 > 0) {
            setCount2(count2 - 1);
        }

    };

    const [count3, setCount3] = useState(0);
    const handleIncrement3 = () => {
        setCount3(count3 + 1);
    };

    const handleDecrement3 = () => {
        if (count3 > 0) {
            setCount3(count3 - 1);
        }

    };
    

    const [extraData, setExtraData] = useState(new Date())
    const [date, setDate] = useState(null)

    const getCurrentDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      if (date < 10) date = '0' + date;
      if (month < 10) month = '0' + month;
      setDate(date + '-' + month + '-' + year);//format: d-m-y;
  }

    const increaseCount = (item, index) => {
      console.log('increasingg',item)
      setAddServings(addServings => parseInt(addServings) + 1)
      item.servings_consumed = parseInt(item.servings_consumed) + 1 
      items[index] = item
      setItems(items)
      setExtraData(new Date())
      saveDailyIntake(item)
  }

  const decreaseCount = (item, index) => {

      setAddServings(addServings => parseInt(addServings) - 1)
      item.servings_consumed = parseInt(item.servings_consumed) - 1 
      items[index] =item
      setItems(items)
      setExtraData(new Date())
      saveDailyIntake(item)
  }

    const [items, setItems] = useState([])
    const [itemIntakeStatus, setItemIntakeStatus] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [page, setPage] = useState(1)
    var [selectedData, setSelectedData] = useState(null)
    var [intakes,setIntakes]=useState(null)

    const  [categoryName, setCategoryName] = useState(null)
    const snapPoints = ['39%'];
    var [params,setParams]=useState(null)
    const [viewModal,setViewModal]=useState(false)
    const bottomSheetModalRef = useRef(null);
    // const windowHeight = Dimensions.get('window').height;
    const [loading, setLoading] = useState(true)
    const [addServings, setAddServings] = useState(0)

    const childComp=useRef();
    // const isFocused = useIsFocused();

    // console.log(params, "royre paramsss")

    useEffect(() => {
      let s= localStorage.getItem('params')
    
      params=JSON.parse(s)
      setParams(params)
            apiCall()
            getCurrentDate()
        
    }, [])


    const saveDailyIntake = async (item) => {
      let userIdAsync = await localStorage.getItem('userId')


      let data = {
          "user_id": parseInt(userIdAsync),
          "date": date,
          "diet_id": params.diet_id,
          "item_id": item.item_id,
          "type": item.type,
          "category": params?.category,
          "servings_consumed": item?.servings_consumed
      }

      console.log(data, "posr requestrrrrtt")
      axios.post(`https://novapwc.com/api/updateDailyIntake`, data)
          .then(function (response) {

              console.log(response?.data, "response from apiii")
              // closeBackdrop(servings, item)
          })
          .catch(function (error) {
              // Alert.alert("something went wrong");
              // console.log(error);
          });



  }

    
    const apiCall = async () => {
      let userIdAsync = await localStorage.getItem('userId')

      setCategoryName(params.category)

      axios.get(`https://novapwc.com/api/getItemsOfCategory?category_id=${params.cat}&type=food`)
          .then(function (response) {
              console.log(response?.data?.data,"checkingggggggggggggggggggg")
              if (response?.data?.data) {
                 let  items = response?.data?.data
                  setItems(items)
                  setDataFromAPiGlobal(items)
                  axios.get(`https://novapwc.com/api/itemIntakeStatus?userid=${userIdAsync}&type=food&category=${params.category}`)
                      .then(function (response) {
                          console.log(response?.data)
                          let itemServings = response?.data?.data ? response?.data?.data :[]
                         
                          for (let i = 0; i < items.length; i++) {
                              let servings = itemServings?.filter(oneitem => oneitem?.item_id == items[i].item_id)
                              console.log(servings,"servings")
                              if (servings.length > 0) {
                                  items[i] = { ...items[i], ...servings[0] }
                                  setAddServings(addServings => parseInt(addServings) + parseInt(servings[0].servings_consumed))
                              }
                              else {
                                  items[i] = { ...items[i], servings_consumed: 0 }
                              }

                              if (i == items.length - 1) {
                                  setItems(items)
                                  setLoading(false)
                              }
                          }
                          setItemIntakeStatus(response?.data?.data)

                      })
                      .catch(function (error) {
                          // Alert.alert("something went wrong");
                          // console.log(error);
                      });
              }
              else {
                  setLoading(false)
              }
          })
          .catch(function (error) {
              // Alert.alert("something went wrong");
              // console.log(error);
          });
  }

   



    const getStatus = (id) => {
        // console.log(itemIntakeStatus, id)
        let servings = itemIntakeStatus?.filter(i => i?.item_id == id)
        return servings?.length > 0 ? servings[0].servings_consumed : 0
    }
    

    const handleCard=(e)=>{
      let servings=getStatus(e.item_id)
      selectedData={...e,servings_consumed:servings,diet_id:params.diet_id,category:params.category}
      setSelectedData(selectedData)
     
      setViewModal(true)
      childComp.current.handleClickOpen()
      
    }

// console.log(servings);
    const close = (servings, item) => {
      // Alert.alert(`You have consumed ${servings} servings of ${item.item_name
      setAddServings(servings)
      apiCall()
      // bottomSheetModalRef.current?.close();
  }


    // console.log(servings, "///////royre paramsss") 
 console.log(itemIntakeStatus,"....//-------categoryName-----checkinh")
    // const state = useLocation();
    // const { cat, diet_id, category, type, servingsConsumed,  } = state;
    console.log(params,"-------params ------")
  console.log(items,"......---items--data...................")
  // console.log(itemIntakeStatus?.servings_consumed,"--itemIntakeStatus.servings_consumed---")
  // alert usage here
  const [showAlert, setShowAlert] = useState(false);

  const handleSuccess = (servings) => {
    setShowAlert(true);
    close(servings)
  };


  const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    console.log("loader is onnnnnnn");


    setTimeout(() =>{ 
      // <img src={Logo} alt="loader image" width="100" height="100"/>
     
      
      // <HashLoader color="#36d7b7" />
      setSpinner(false)
    }, 1000)
  }, []);



  const handleClearClick = () => {
    setDataFromAPiGlobal("")
    // setSearchQuery("");
    // setItems(items);
  };
    return (  
   <>
   <NetworkStatus/>
   {loading?( <div style={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems: "center" , height:"50vh" }}  >
           
           {/* <img  src={TitleLogo} alt="loading" style={{height:"100px",width:"100px"}} /> */}
          < CircularProgress/>

       </div>):(  <>


<Snackbar
  open={showAlert}
  onClose={() =>  setShowAlert(false)}
  autoHideDuration={1000}

  >
   <Alert severity="success"> servings created Successful!</Alert>
  </Snackbar>

{/* {
<img
src={Logo}
alt="nova logo"
style={{ height: "auto", width: "250px", marginLeft: "30px" }}
/>
} */}
{
viewModal &&  < EditCaloriesDiet handleSuccess={handleSuccess} state={selectedData} apiCall={apiCall}  ref={childComp}/>
}



<Grid container spacing={2}>
<Grid  item xs={7}>
<CardContent >
 
<Grid  container flexDirection={"row"} >
    {/* <img src={Backbutton} className='dinning-img' alt="dinning" /> */}
    <Grid item alignSelf={"center"}>
      <Link to="/dashboard/dietplan" >
        
            {/* <IconButton>
              <Iconify icon="material-symbols:arrow-back-rounded" />
            </IconButton> */}
            <ArrowBackIcon style={{ color: 'black' }} />
            </Link>
            </Grid>
            <Grid item>
            <Typography variant="h3" style={pageheading} >{params?.category}  </Typography>
            {/* {value.category} */}
            </Grid>
      </Grid>
  {/* <Typography variant="h3" style={pageheading}> {value.category_name} </Typography> */}
  <Typography style={calories}>{params?.recommended_servings} recommended / Servings </Typography>
  {/* <Typography style={calories}>13 Sets / Day </Typography> */}
</CardContent>
</Grid>
<Grid item xs={5}>
<CardContent>
  <Card
    sx={{ Width: 200, height: 110 }}
    style={{ backgroundColor: "#E1B725", textAlign:"center" }}
  >
    <Typography variant="h3"  style={caloriesremained}> { addServings}  
     
    </Typography>
    <Typography variant="h5" style={caloriesremained} >
      Servings
    </Typography>
    <Typography variant="h5" style={caloriesremained} >
      Consumed
    </Typography>
  </Card>
</CardContent>
</Grid>
</Grid>
<CardContent>
<Card>
<Typography variant="body1" style={textparaStyle}>
  Weigh AFTER cooked / 1 serving = 1 cooked oz 
</Typography>
</Card>
</CardContent>

{/* <Card sx={{margin:"20px"}}>
<SearchBar/>
</Card> */}
<CardContent >
{/* <Searchbar data={items}/> */}

<TextField
  placeholder='Search..'
 sx={{variant:"none"}}
 onChange={(e)=>{
  
console.log(e?.target.value,'00000')

let arr=[];

let arr1=dataFromAPiGlobal

arr1?.map(item=>{

  if(item?.item_name.toLowerCase().includes(e?.target?.value.toLowerCase()))arr.push(item);

})

console.log(arr,'/////')

setItems(arr);

}}fullWidth

InputProps={{
  startAdornment: (
    <InputAdornment position='start'>
       <SearchIcon />
    </InputAdornment>
  ),
}}

// InputProps={{
//     startAdornment: (
//         <InputAdornment position="start">
//            <SearchIcon />
//         </InputAdornment>
//          ),
//     endAdornment:(<IconButton sx={{visibility: dataFromAPiGlobal? "visible": "hidden"}} onClick={handleClearClick}><ClearIcon/></IconButton>)
//       }}


> </TextField>
</CardContent>

{items?.length>0?(items.map((item,index)=>{
return(
<Card style={cardStyle}>
<CardContent >
<Grid container spacing={2} justifyContent="center" alignItems="center">
  <Grid item xs={3}  sx={{textAlign:"center"}} >
    <ButtonBase >
    {/* style={{borderRadius:100,maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} */}
      <img  style={{borderRadius:100,maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={imageurl+item.item_image}  alt="image" />
    </ButtonBase>
  </Grid>
  <Grid container item xs={9} spacing={1} >
    {/* <Grid item xs> */}
      {/* <div style={{ display: "flex" }}> */}
      <Grid item xs={8} marginTop="9px">
        <Typography
          // gutterBottom
          // variant="h5"
          // component="div"
           style = {maintitle }
           sx={{alignSelf:"center",   display:"flex", flexDirection:"column" ,justifyContent: "center",}}
        >
           {item.item_name}
          
        </Typography>
        </Grid>
        <Grid item xs={4} >

        <Card sx={{position:'absolute', minWidth:"30px"  , right:5,borderRadius:1,boxShadow: '#c4c4c4'}}  >
        {/* <EditCalories state={{data:itemIntakeStatus}} /> */}

        <IconButton onClick={() => { item.servings_consumed >= 1 && decreaseCount(item, index) }} >
                          <RemoveIcon  />
                           </IconButton>
                        
                         
                           {item.servings_consumed}
                          { console.log(item?.servings_consumed,"in code --")}
                           <IconButton  onClick={() => { increaseCount(item, index) }}>
                           <AddIcon />
                           </IconButton>

          {/* <Typography sx={{textAlign:"center",alignContent:"center"}}>{getStatus(item.item_id)}</Typography> */}
        </Card>
        </Grid>
      {/* </div> */}

     <Grid item xs={12}>
      <Typography variant="body2" gutterBottom mt={0.6} style={maintext}>
        {item.description}
      </Typography>
      </Grid>


    </Grid>
  </Grid>
{/* </Grid> */}
</CardContent>
</Card>

)

})):(<Typography   align="center"  style={calories}>No Items Found</Typography> )}

</>
)}
   </>


        
            );
    }