import { Grid, Typography, Select, FormControl, InputLabel } from '@mui/material';
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







export default function Protein(props) {
  const servlingsLeft= useRef();
  const location=useLocation(); 
  // const[category_id,setCategory_id]=useState(data.category_id);
 const [value,setValue]=useState(location.state?.data)
 console.log(value,"---------import api data ");

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

// Start form here api integration

useEffect(()=>{
  dataHit();
},[])

const[dataFromAPi,setDataFromAPi]=useState([
  

])

const dataHit =async =>{
  
  
  let config = {
    method: 'GET',
    maxBodyLength: Infinity,
    url: `https://aipse.in/api/getItemsOfCategory?category_id=${value.category_id}&type=food`,
    headers: { 
      'Content-Type': 'application/json'
    },
    // data : data
  };
  
  axios(config)
  .then((response) => {
    setDataFromAPi(response?.data?.data)
    console.log(dataFromAPi,"------------- proteins get data");
  })
  .catch((error) => {
    console.log(error);
  });
}


//amreen api integration method

// const [items, setItems] = useState([])
//     const [itemIntakeStatus, setItemIntakeStatus] = useState([])
//     // { item_name: "Fish", item_id: 1, description: "Its the description of Fish" },
//     // { item_name: "Chicken", item_id: 2, description: "Its the lunch" }
//     const [refreshing, setRefreshing] = useState(false)
//     const [page, setPage] = useState(1)
//     const [selectedData, setSelectedData] = useState(null)
//     const [categoryName, setCategoryName] = useState(null)
//     const snapPoints = ['39%'];
//     const bottomSheetModalRef = useRef(null);
//     // const windowHeight = Dimensions.get('window').height;

//     // console.log(route?.params, "royre paramsss")

//     useEffect(() => {
//         setCategoryName(route?.params.category)
//         axios.get(`https://aipse.in/api/getItemsOfCategory?category_id=${location?.state?.data?.category_id}&type=food`)
//             .then(function (response) {
//                 console.log(response?.data, "itemaassssssssssss", `https://aipse.in/api/getItemsOfCategory?category_id=${route?.params.cat}&type=food`)
//                 setItems(response?.data?.data)
//                 axios.get(`https://aipse.in/api/itemIntakeStatus?userid=1&type=food&category=proteins`)
//                     .then(function (response) {
//                         console.log(`https://aipse.in/api/itemIntakeStatus?userid=1&type=food&category=${route?.params.category}`, response?.data, "..............")
//                        setItemIntakeStatus(response?.data?.data)
//                     })
//                     .catch(function (error) {
//                         console.log(error);
//                     });
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }, [])


    // const getStatus = (id) => {
    //     // console.log(itemIntakeStatus)
    //     let servings = itemIntakeStatus.filter(i => i?.item_id == id)
    //     // console.log(id,servings)
    //     return servings[0]? servings[0] : 0
    //     // console.log(itemIntakeStatus, "......")
    // }


    // const [data, setData] = useState({ date: "31  March \n 2023", servingsRecommended: 120, servingsLeft: 60, exercisesRecommended: 20, exercisesLeft: 10 })

    // const handleSnapPress = useCallback((item) => {
    //     setSelectedData({ ...item, ...route.params });
    //     bottomSheetModalRef.current?.present();
    // }, []);

    // const closeBackdrop = () => {
    //     bottomSheetModalRef.current?.close();
    // }

    // const renderBackdrop = useCallback(
    //     props => (
    //         <BottomSheetBackdrop
    //             {...props}
    //             opacity={2.5}
    //             disappearsOnIndex={-1}
    //             pressBehavior={() => {
    //                 Alert.alert("qwewqe")
    //             }}
    //             appearsOnIndex={2}
    //         />
    //     ),
    //     []
    // );



    return ( 
        <div>
  
  {
    <img
      src={Logo}
      alt="nova logo"
      style={{ height: "auto", width: "250px", marginLeft: "30px" }}
    />
  }
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <CardContent>
      <Grid   >
          {/* <img src={Backbutton} className='dinning-img' alt="dinning" /> */}
            <Link to="/dashboard/dietplan">
                  <IconButton>
                    <Iconify icon="material-symbols:arrow-back-rounded" />
                  </IconButton></Link>
                  
            </Grid>
        <Typography variant="h3" style={pageheading} >{value.category_name} </Typography>
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
          <Typography variant="h3"  style={caloriesremained}>
            7
          </Typography>
          <Typography variant="h5" style={caloriesremained} >
            serving
          </Typography>
          <Typography variant="h5" style={caloriesremained} >
            remained
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
  
  {dataFromAPi?.length>1?(dataFromAPi.map(item=>{
  return(
    <Card style={cardStyle}>
    <CardContent>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={2} md={2}>
          <ButtonBase>
            <img src={Fish} alt="nova logo" />
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
              <Card style={buttonStyle} >
                <IconButton onClick={handleDecrement3}>
                  <RemoveIcon />
                </IconButton>
                {count3}
                <IconButton onClick={handleIncrement3}>
                  <AddIcon />
                </IconButton>
              </Card>
            </div>
            <Typography variant="body2" gutterBottom mt={1} style={maintext}>
              fresh, canned or frozen, Cod, Flounder, Haddock, Halibut.
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