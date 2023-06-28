import React from 'react';
import { Link as RouterLink } from 'react-router-dom';




import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';

import CreateCategoryExercise from "./components/CreateCategoryExercise";
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';


// import { makeStyles } from '@material-ui/core/styles';

// import CardMedia from '@material-ui/core/CardMedia';

// import companyimage from '../images/CompanyName.png';

// import chicken from '../images/chicken.png';

// import peas from '../images/peas.png'

// import ExerciseLogo from '../images/ExerciseLogo.png';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';


import Poultry from "../../assets/Poultry.svg";
import Exerciselogo from "../../assets/Exerciselogo.svg";
import Logo from "../../assets/nova.svg";
import Arrowforward from "../../assets/Arrowforward.svg";
import axios from 'axios';
import { useState,useEffect,useRef } from 'react';


const pageheading={
    fontFamily:"Inter-Bold",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "38px",
    color: "#112866"
};
const plusStyle = {
    width: "34px",
    height: "26px",
    backGround: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px"
   
  };
  const textparaStyle = {
    fontFamily: 'Inter-Regular',
    // padding: "30px",
    
    fontSize:"20px" ,
    color:"#E1B725"
   
  };

  const day={
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize:"30px",
    lineHeight: "15px",
    color:"white",
    
    marginLeft:"3px"
    

  };

const month={
    fontFamily: 'Inter-Regular',
    fontSize:"15px" ,
    color:"black",
    marginTop:"10px",
    alignSelf:"center",
    // color: "#112866"
}

const year={
    fontFamily: 'Inter-Regular',
    fontSize:"15px" ,
    // color:"#112866",
    color:"black",
    marginBottom:"10px",
    
}




  const maintitle={
    fontFamily: 'Inter-SemiBold',
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
    lineHeight: "38px",

    color: "#112866"
  };

  const todaysgoal={
    fontFamily:'Inter-Regular',
    fontSize:"13px" ,
    color:"black",
    marginLeft:"10px",
    // color:"#112866"
  };
  const exercise={
    fontFamily:"Inter-Regular",
    fontSize:"12px" ,
    color:"white",
    fontWeight:"20px",
    
 };
  const excerciseNo={
    fontFamily:"Inter-Regular",
    fontSize:"30px" ,
    color:"white",
    fontWeight:"40px",
    
  };

  const today={
    fontFamily:"Inter-Regular",
    color:"#112866",
  }


  const totalservingsStyle={
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    
    color: "#000000"
  };
  const dayservingsStyle={
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    
    color: "#000000"
  };
  
export default function Exercise(){
    const [dataFromApi,setDataFromApi]=useState([])
    const childComponentRef = useRef(null);


      useEffect(()=>{
        apiHit();
      },[]);

      const apiHit=aync=>{
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: 'http://44.212.136.151:8081/api/getAllCategories?type=exercise',
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            setDataFromApi(response?.data?.data);
            console.log(response?.data?.data,'----response?.data')
          })
          .catch((error) => {
            console.log(error);
          });
      }
     
    return (

        <div>
        <Card className='dietplan-container'>
            <CardContent className='dietplan-companyname'>
                <img src={Logo} alt="loading" className='dietplan-companyname-image'/>
                
            </CardContent>
            <CardContent>
                <Grid container justifyContent="space-between">
                        <Grid item className="my-grid-item" style={{marginleft:"30px"}}>
                            <span style={pageheading}>Exercise</span>
                        </Grid>
                       
                </Grid>
            </CardContent>
            
         {
            dataFromApi?.map(item=>{
                return (


                    <Card key={item.category_id} style={{backgroundColor:"#F0E7F5", margin:"10px"}}>
            
                    <Grid container  sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center" style={{padding:"30px"}}>
                        <Grid item style={{padding:"5px"}}>
                            
                            <Typography variant="body1" component="span" style={maintitle}>
                            {item.category_name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid display='flex' flex-direction='row'>
                            <Grid item> <Button onClick={() => childComponentRef.current.handleClickOpenEdit(item.category_name,item.category_id)}>Edit</Button></Grid>
                            <Grid state={{data:item}} to="/dashboardadmin/adminaerobic" component={RouterLink} item>
                            <Typography variant="h5" component="span" style={plusStyle}>
                            <img  src={Arrowforward} alt="Arrowforward logo" />
                            </Typography>
                            </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                  
                </Card>

                )
            })
         }

           

           
            

            
            
           
           
         </Card>


         <CreateCategoryExercise  ref={childComponentRef}/>
  
         </div>
    );
}