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
import {useState,useEffect} from 'react';
import CardContent from "@mui/material/CardContent";
import axios from 'axios';
import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import CreateDietPlan from '../AdminDiet/components/CreateDietPlanNut'
import BarGraph from "./BarGraph";
export default function Adminuser() {
  const [totalCountOfUser,setTotalCountOfUser]=useState('');
  const[totalCountOfInactiveUser,setTotalCountOfInactiveUser]=useState('')
  const[totalCountOfActiveUser,setTotalCountOfActiveUser]=useState('')
  useEffect(()=>{
    apiHit()
    count ();
},[]);
const [countData,setCountData] = useState("")


const count = async => {
    var config = {
        method: 'Get',
      maxBodyLength: Infinity,
        url: 'https://aipse.in/api/count',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        setCountData(response.data)
        //setTotalCountOfUser(response.data.totalCountOfUser)
        setTotalCountOfActiveUser(response.data.totalCountOfActiveUser)
        setTotalCountOfInactiveUser(response.data.totalCountOfInactiveUser)
        console.log(response.data.totalCountOfActiveUser,"<--------------setCountDatasetCountData-");
      })
      .catch(function (error) {
        console.log(error);
      });
}
  const apiHit=async()=>{
        
    
    let config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url:'https://aipse.in/api/searchUser?name=&page=1&count=100',
        headers: {'Content-Type': 'application/json' }
      };
      
      axios(config)
      .then((response) => {
       setTotalCountOfUser(response.data.totalCountOfUser)
        // setUsersData([...usersData,response.data.data]);
        //setTotalCountOfInactiveUser(response.data.totalCountOfInactiveUser)
        //setTotalCountOfActiveUser(response.data.totalCountOfActiveUser)
       
        
        console.log( response.data,'--------Admin Search direct respone from adminuser------');
      })
      .catch((error) => {
        console.log(error);
      });
}

// console.log(data,"--------sm checking for props----")
  return (
    <div>
    
      {
        <img
          src={Logo}
          alt="nova logo"
          style={{ height: "auto", width: "250px", marginLeft: "30px" }}
        />
      }
      <CreateDietPlan/>
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#212121", margin: "10px" }}
      >
        <CardContent>
          <Grid
            container to="/dashboardadmin/adminsearch" component={RouterLink} state={{data:'all'}} sx={{textDecoration:'none'}} 
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span style={{ fontSize: "25px", color: "#E1B725", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}> {totalCountOfUser} </span>
            </Grid>
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span
                style={{ fontSize: "25px", color: "white", fontWeight: "20px", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}
              >
                
                Total Users
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
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#212121", margin: "10px" }}
      >
        <CardContent>
          <Grid to="/dashboardadmin/adminsearch" component={RouterLink} state={{data:'inactive'}} sx={{textDecoration:'none'}} 
            container
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span style={{ fontSize: "25px", color: "#E1B725", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}> {totalCountOfInactiveUser} </span>
            </Grid>
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span
                style={{ fontSize: "25px", color: "white", fontWeight: "20px", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}
              >
                
                InActive Users
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
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#212121", margin: "10px" }}
      >
        <CardContent>
          <Grid to="/dashboardadmin/adminsearch" component={RouterLink} state={{data:'active'}} sx={{textDecoration:'none'}} 
            container
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span style={{ fontSize: "25px", color: "#E1B725", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}> {totalCountOfActiveUser} </span>
            </Grid>
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span
                style={{ fontSize: "25px", color: "white", fontWeight: "20px", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }}
              >
                
                Active Users
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
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }} style={{ margin: "20px" }} >
        <CardContent>
          <Grid container flexDirection="row" spacing="1">
            <BarGraph/>
          </Grid>
          <Grid>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 2,
                },
              }}
            >
              <Icon color="primary"> + </Icon>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}