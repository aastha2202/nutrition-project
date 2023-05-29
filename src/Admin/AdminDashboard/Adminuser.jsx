import {
  Grid,
  Typography,
  Icon,
  Box,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import { Link as RouterLink } from 'react-router-dom';

import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from 'react';
import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import axios from 'axios';

export default function Adminuser() {
const [disData, getData]=useState([]);

useEffect(()=>{
  dataHit();
},[])
const dataHit =async => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://aipse.in/api/searchUser?name=&page=1&count=10',
    headers: { },
    // data : data
  };
  
  axios.request(config)
  .then((response) => {
    getData(response?.data?.data);
    console.log((response?.data,"------active and inactive--"));
  })
  .catch((error) => {
    console.log(error);
  });


}

{console.log(disData),'----api hit------'}

  return (
    <div>
     
      {
        <img
          src={Logo}
          alt="nova logo"
          style={{ height: "auto", width: "250px", marginLeft: "30px" }}
        />
      }

      {/* {disData?.map(item =>{
        return(
          <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#2c2b2b", margin: "10px" }}
      >
        <CardContent>
          <Grid
            container to="/dashboardadmin/adminsearch" component={RouterLink} sx={{textDecoration:'none'}} 
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span style={{ fontSize: "25px", color: "#E1B725", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}> {disData.count} </span>
            </Grid>
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span
                style={{ fontSize: "25px", color: "white", fontWeight: "20px", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}
              >
                
                {disData.name}
              </span>
            </Grid>
            <Grid
              item
              xs={4} container
              // alignItems="center"
              // justifyContent="center"
              sx={{ justifyContent: "flex-end" }}
            >
              <img src={Diet} className="dinning-img" alt="dinning" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

        )

      })} */}
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#2c2b2b", margin: "10px" }}
      >
        <CardContent>
          <Grid
            container to="/dashboardadmin/adminsearch" component={RouterLink} sx={{textDecoration:'none'}} 
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span style={{ fontSize: "25px", color: "#E1B725", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}> 100 </span>
            </Grid>{" "}
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span
                style={{ fontSize: "25px", color: "white", fontWeight: "20px", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}
              >
                
                {disData.user_name}
              </span>
            </Grid>
            <Grid
              item
              xs={4} container
              // alignItems="center"
              // justifyContent="center"
              sx={{ justifyContent: "flex-end" }}
            >
              <img src={Diet} className="dinning-img" alt="dinning" />
            </Grid>
          </Grid>{" "}
        </CardContent>{" "}
      </Card>
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#2c2b2b", margin: "10px" }}
      >
        <CardContent>
          <Grid to="/dashboardadmin/adminsearch" component={RouterLink} sx={{textDecoration:'none'}} 
            container
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span style={{ fontSize: "25px", color: "#E1B725", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}> 100 </span>{" "}
            </Grid>{" "}
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span
                style={{ fontSize: "25px", color: "white", fontWeight: "20px", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}
              >
                
                {disData.name}
              </span>
            </Grid>
            <Grid
              item
              xs={4} container
              // alignItems="center"
              // justifyContent="center"
              sx={{ justifyContent: "flex-end" }}
            >
              <img src={Diet} className="dinning-img" alt="dinning" />
            </Grid>
          </Grid>{" "}
        </CardContent>{" "}
      </Card>
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#2c2b2b", margin: "10px" }}
      >
        <CardContent>
          <Grid to="/dashboardadmin/adminsearch" component={RouterLink} sx={{textDecoration:'none'}} 
            container
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span style={{ fontSize: "25px", color: "#E1B725", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}> 160 </span>{" "}
            </Grid>{" "}
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span
                style={{ fontSize: "25px", color: "white", fontWeight: "20px", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}
              >
                
                {disData.name}
              </span>
            </Grid>
            <Grid
              item
              xs={4} container
              // alignItems="center"
              // justifyContent="center"
              sx={{ justifyContent: "flex-end"}}
            >
              <img src={Diet} className="dinning-img" alt="dinning" />
            </Grid>
          </Grid>{" "}
        </CardContent>{" "}
      </Card>
      
    </div>
  );
}
