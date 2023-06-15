import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import {useEffect,useState} from 'react'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles'
import { red } from '@mui/material/colors';
import { Card, CardContent, Grid, Typography, Avatar, Badge, Button, Stack, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
// import fish from "../../assets/Fish.svg";
import DeleteIcon from '@mui/icons-material/Delete';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Switch from '@mui/material/Switch';
// import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from 'src/components/iconify/Iconify';
import { Link } from 'react-router-dom';
// import {React, useEffect, useState }from 'react';
import axios from 'axios';




const pageheading={
  fontFamily:"Inter-Bold",
  fontWeight: "bold",
  fontSize: "25px",
  lineHeight: "30px",
  color: "#112866"
};
 
 

export default function Userprofile({props}){
    let navigate = useNavigate();
    // const goingback= ()=>{
    //     navigate("/dashboard", { replace: true })
    // }
  const [data,setData]= useState([]);
  useEffect(() => {
    
    apiCall()
  
}, [])
  
   const apiCall = async()=>{
    let uid = localStorage.getItem('userId')
    console.log(uid,"---userid in profile page---")
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://aipse.in/api/userDetails?user_id=${uid}`,
        headers: { }
      };
      
     axios.request(config)
      .then((response) => {
        setData(response.data.data)
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
   }


 console.log(data,"-----------user details checking")
     
    return(
        <> 
       

            <Card>
                <CardContent>
   <Grid container flexDirection="row">

<Grid  item>
<Link  to="/dashboard">
      <IconButton>
        <Iconify icon="material-symbols:arrow-back-rounded" />
      </IconButton></Link>

    </Grid>
   
    <Grid item>
    <Typography style={pageheading}>Profile</Typography>
    </Grid>
 </Grid>
{data?.map(item =>{
    return(
        <Grid container spacing={3} style={{ display:'flex', justifyContent:'center' }}>
        {/* {users.map((product) => ( */}
       
          <Grid item   >
            {/* <Button> */}

            <Card >
              <CardContent>
                {/* {console.log("profilesssss--->",itm.profile_pic,itm?.first_name)} */}
                <Grid container display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                  <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }} item>
                   
                    {/* <img style={{ borderRadius: 50 ,height:50,width:50}} src={fish} /> */}
                  </Grid>
                 <Grid item>
                  <Typography sx={{ fontSize: 30, fontWeight: 'bold',  fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:"10px"  }} mt={3} textAlign={'center'} >
                  {item?.user_name}   
                 
                  </Typography>
                  </Grid>
                  <Grid style={{ textAlign: "center", fontSize: 20,color:"black", fontWeight:'normal',  fontFamily: 'Inter-Regular', lineHeight: "50px", marginLeft:"10px" }} item>
                  {item?.email_id} 
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            {/* </Button> */}
            {/* <ShopProductCard product={product} /> */}
          </Grid>
     

      </Grid>
     
    )
})}

           
     

               
               


                  

      </CardContent>
      </Card>
      {/* <AlertDialog Message="Created Sucessfully" ref={childcomrefAlert}/> */}
     
    </>
    );
}