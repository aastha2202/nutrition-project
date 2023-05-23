import { Grid, Typography, Select, FormControl, InputLabel } from '@mui/material';
import * as React from 'react';
// import '../../fonts/Poppins-BoldItalic.ttf'

// import '../../fonts/Poppins-ExtraBold.ttf';

import CreateDiet from "./component/CreateDiet";
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import ButtonBase from '@mui/material/ButtonBase'
import axios from 'axios';
// import { useState } from 'react';
import { useState, useEffect,useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Logo from "../../assets/nova.svg";
import Poultry from "../../assets/Poultry.svg";
import Fish from "../../assets/Fish.svg";

import Iconify from 'src/components/iconify/Iconify';
import { Link } from 'react-router-dom';
// import  "../styles.css";
import { useLocation } from 'react-router-dom';
import useLongPress from './components/useLongPress';

const pageheading={
    fontFamily:"Inter-Bold",
    color:"#112866",
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






export default function Protein(props) {
  const childcomref = useRef()


  const [longPressCount, setlongPressCount] = useState(0)
  const [clickCount, setClickCount] = useState(0)

  const onLongPress = () => {
    console.log('longpress is triggered');
    // functiona need
    childcomref.current.handleClickOpen()
    setlongPressCount(longPressCount + 1)
  };
  
  const onClick = () => {
    console.log('click is triggered')
    setClickCount(clickCount + 1)
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);




    




    // const [data, setData]=useState(
    //   {
    //     "name": "sure",
    //     "job": "leader"
    //   }

    // )
    useEffect(()=>{
      dataHit();
    },[])

    const[dataFromAPi,setDataFromAPi]=useState([
      

    ])

    const dataHit =async =>{
      // let data = JSON.stringify({
      //   "name": "data?.name",
      //   "job": "leader"
      // });
      
      let config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: `https://aipse.in/api/getItemsOfCategory?category_id=${category_id}&type=food`,
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


    const location = useLocation();
    const [data,setData] = useState(location.state?.data);
    const[category_id,setCategory_id]=useState(data.category_id);
    console.log(category_id,'----data-----');
//     const [name, steName]=useState(props.data)
 
// console.log(props.data,"name-----------");
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
     
      <Grid container  flexDirection="row">
                <Grid item textAlign={"center"} marginTop={0.5}  >
                <Link to="/dashboardadmin/AdminDietCategory">
                 <IconButton>
                 <Iconify icon="material-symbols:arrow-back-rounded" />
                   </IconButton></Link>

                </Grid>
               
                <Grid item>
                
            <Typography variant="h3" style={pageheading}  >
            {data.category_name}
            </Typography>
            
     
                </Grid>
                
            
                    
                        
                        
             
             </Grid>
        {/* <Typography variant="h3" style={pageheading} >Proteins </Typography> */}
        {/* <Typography style={calories} sx={{marginLeft:4}}>45 Calories / Servings </Typography>
        <Typography style={calories} sx={{marginLeft:4}}>13 Servings / Day </Typography>
       */}
    </Grid>
   
  </Grid>




  <CardContent>
    <Card>
      <Grid container spacing={2} >
      <Grid item xs={6}>
      <Typography variant="body1" style={textparaStyle}>
        Weigh AFTER cooked / 1 serving = 1 cooked oz
      </Typography>
      </Grid>
      <Grid item xs={6} container sx={{alignItems:"flex-end", alignSelf:"center",justifyContent:"end", alignContent:"end", }}>
      <CardContent>
      <Typography style={calories} sx={{marginLeft:4}}>45 Calories / Servings </Typography>
        <Typography style={calories} sx={{marginLeft:4}}>13 Servings / Day </Typography>
        </CardContent>
      </Grid>
      </Grid>
    </Card>
    
  </CardContent>
 

  
  
{dataFromAPi?.length>1?(dataFromAPi.map(item=>{
  return(
    <Card style={cardStyle}>
    <CardContent {...longPressEvent}>
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

  <CreateDiet  ref={childcomref}/>
</div>

            );
    }