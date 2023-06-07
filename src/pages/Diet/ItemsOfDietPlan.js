import { Grid, Typography, Select, FormControl, InputLabel,Button } from '@mui/material';
import * as React from 'react';

// import '../../fonts/Poppins-BoldItalic.ttf'

// import '../../fonts/Poppins-ExtraBold.ttf';

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
import Logo from "../../assets/nova.svg";
import Poultry from "../../assets/Poultry.svg";
import Fish from "../../assets/Fish.svg";

import EditCaloriesDiet from './Components/EditCaloriesDiet';
// import EditCalories from '../Exercises/Components/EditCalories';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
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
     fontSize: "20px",
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


export default function Protein({ route, navigation,props }) {
  const servlingsLeft= useRef();

 const imageurl= "https://aipse.in";
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
        
    }, [])

    const apiCall = async () => {
      setViewModal(false)
        let userIdAsync = await localStorage.getItem('userId')

        setCategoryName(params.category)
       

        axios.get(`https://aipse.in/api/getItemsOfCategory?category_id=${params.cat}&type=food`)
            .then(function (response) {

                setItems(response?.data?.data)
                axios.get(`https://aipse.in/api/itemIntakeStatus?userid=${userIdAsync}&type=food&category=${params.category}`)
                    .then(function (response) {

                        setItemIntakeStatus(response?.data?.data)
                        // handleSuccess()
                        setLoading(false)
                    })
                    .catch(function (error) {
                        // Alert.alert("something went wrong");
                        // console.log(error);
                    });
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


    // console.log(servings, "///////royre paramsss") 
 console.log(itemIntakeStatus,"....//-------categoryName-----checkinh")
    // const state = useLocation();
    // const { cat, diet_id, category, type, servingsConsumed,  } = state;
    console.log(params,"-------params ------")
  console.log(items,"......---items--data...................")
  // console.log(itemIntakeStatus?.servings_consumed,"--itemIntakeStatus.servings_consumed---")
  // alert usage here
  const [showAlert, setShowAlert] = useState(false);

  const handleSuccess = () => {
    setShowAlert(true);
  };

    return ( 
        <div>


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
    <Grid  item xs={6}>
      <CardContent >
       
      <Grid  container flexDirection={"row"} >
          {/* <img src={Backbutton} className='dinning-img' alt="dinning" /> */}
          <Grid item>
            <Link to="/dashboard/dietplan">
              
                  <IconButton>
                    <Iconify icon="material-symbols:arrow-back-rounded" />
                  </IconButton></Link>
                  </Grid>
                  <Grid item>
                  <Typography variant="h3" style={pageheading} >{params?.category}  </Typography>
                  {/* {value.category} */}
                  </Grid>
            </Grid>
        {/* <Typography variant="h3" style={pageheading}> {value.category_name} </Typography> */}
        <Typography style={calories}>45 Calories / Servings </Typography>
        <Typography style={calories}>13 Servings / Day </Typography>
      </CardContent>
    </Grid>
    <Grid item xs={6}>
      <CardContent>
        <Card
          sx={{ Width: 200, height: 110 }}
          style={{ backgroundColor: "#E1B725", textAlign:"center" }}
        >
          <Typography variant="h3"  style={caloriesremained}> {params?.servingsConsumed}  
           
          </Typography>
          <Typography variant="h5" style={caloriesremained} >
            Serving
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
  
  {items?.length>0?(items.map(item=>{
  return(
    <Card style={cardStyle}>
    <CardContent onClick={()=>{handleCard(item)}} >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={2} md={2} >
          <ButtonBase >
            <img  style={{borderRadius:100,maxHeight:"80px"}} src={imageurl+item.item_image}  alt="nova logo" />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} spacing={2} md={10}>
          <Grid item xs>
            <div style={{ display: "flex" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                 style = {maintitle }
              >
                 {item.item_name}
                
              </Typography>
              <Card sx={{position:'absolute', minWidth:"30px" , alignContent:"center" , right:10,borderRadius:1,boxShadow: '#c4c4c4'}}  >
              {/* <EditCalories state={{data:itemIntakeStatus}} /> */}
      
                <Typography sx={{textAlign:"center",alignContent:"center"}}>{getStatus(item.item_id)}</Typography>
              </Card>
            </div>
            <Typography variant="body2" gutterBottom mt={0.6} style={maintext}>
              {item.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>

  )

})):(<Typography   align="center"  style={calories}>No Data Found</Typography> )}

</div>

            );
    }