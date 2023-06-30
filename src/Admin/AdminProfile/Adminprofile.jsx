import * as React from 'react';
import { useLocation } from "react-router-dom";
import {useEffect} from 'react'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles'
import { red } from '@mui/material/colors';
import { Card, CardContent, Grid, Typography, Avatar, Badge, Button, Stack, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import fish from "../../assets/Fish.svg";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from 'src/components/iconify/Iconify';
import { Link } from 'react-router-dom';
import axios from 'axios'
import  { forwardRef, useImperativeHandle, useRef } from "react";
import {  Snackbar } from '@mui/material';
import MuiAlert from '@mui/lab/Alert';
// import Page from '../../components/Page';



const pageheading={
  fontFamily:"Inter-Bold",
  fontWeight: "bold",
  fontSize: "30px",
  lineHeight: "30px",
  color: "#112866"
};
  
  

export default function Userprofile(props){
  const location = useLocation();
  const [data,setData] = useState(location.state?.data);
    const [checked, setChecked] = useState(data.status==='active'?true:false);
    
    
  console.log(props, " props");
  console.log(location, " useLocation Hook");
 
  const [usersData,setUsersData]=useState([])
  const [condition,setCondition]=useState(1);
  const [status,setStatus]=useState(data.status);
  const [email,setEmail]=useState(data.email_id);
  const [messageOfUserStatus,setMessageOfUserStatus]=useState("");

  const ref = useRef();
    useEffect(()=>{
      console.log(props.data,'backkk')
      apiHit()
    },[checked])

  const [openAlert, setOpenAlert] = useState(false);

  const handleToggleAlert = () => {
    
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
   
    console.log('setOpenAlert(false);');
    setOpenAlert(false);
  };
    //ndhoble@infobellit.com
    const apiHit = async => {
      let config = {
          method: 'GET',
          maxBodyLength: Infinity,
          url: `https://novapwc.com/api/userActivation?email=${email}&condition=${condition}`,
          headers: { 'Content-Type': 'application/json' },
      };
      axios(config)
          .then((response) => {
              setUsersData(response)
               console.log(usersData, "data from hit");
          })
          .catch((error) => {
              console.log(error);
          });
  }

    const handleChange = (event, checked) => {
      
      setChecked(event.target.checked);
      if(checked) {
        setCondition(1);
        setMessageOfUserStatus('user Activated');
      
      }
      else{
        setMessageOfUserStatus('user In Activated');
        setCondition(0);
      } 
      handleToggleAlert();

    };
   
     
    return(
        <div> 
       <Container>

            <Card>
                <CardContent>
                <Grid container flexDirection="row">

<Grid >
<Link state={{data:'all'}} to="/dashboardadmin/adminsearch">
      <IconButton>
        <Iconify icon="material-symbols:arrow-back-rounded" />
      </IconButton></Link>

    </Grid>
   
    <Grid>
    <Typography style={pageheading}>Profile</Typography>
    </Grid>
 </Grid>
            <Grid container spacing={3} style={{ display:'flex', justifyContent:'center' }}>
        {/* {users.map((product) => ( */}
        
          <Grid item xs={4} sm={4} md={4}  >
            {/* <Button> */}

            <Card >
              <CardContent>
                {/* {console.log("profilesssss--->",itm.profile_pic,itm?.first_name)} */}
                <Grid direction={'column'} spacing={8} height="200px" alignItems="center"
  justify="center">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                   
                    <img style={{ borderRadius: 50 ,height:50,width:50}} src={fish} />
                  </div>
                 
                  <Typography sx={{ fontSize: 30, fontWeight: 'bold',  fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:"10px"  }} mt={3} textAlign={'center'} >
                  {data.user_name}
                  </Typography>
                  <div style={{ textAlign: "center", fontSize: 20,color:"black", fontWeight:'normal',  fontFamily: 'Inter-Regular', lineHeight: "50px", marginLeft:"10px" }}>
                   {data.email_id}
                  </div>
                </Grid>
              </CardContent>
            </Card>
            {/* </Button> */}
            {/* <ShopProductCard product={product} /> */}
          </Grid>
      

      </Grid>
      <Stack mt={4}>
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
        <MuiAlert onClose={handleCloseAlert} severity="success" variant="filled">
          {messageOfUserStatus}
        </MuiAlert>
      </Snackbar>
    
      <Typography sx={{ fontSize: 20, fontWeight: 'bold',  fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"10px"  }} mt={3}  > 
                   Enter Member ID   <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
                  </Typography></Stack>

                <Stack mt={2}>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" /> </Stack>

                {/*  <Card style={{backgroundColor: "#F0E7F5"}}><CardContent><Stack><Typography sx={{ fontSize: 20, fontWeight: 'bold' }} mt={3}  >
                   Dashboard Stats
                  </Typography> <IconButton  aria-label="delete">
        <ArrowForwardIcon />
      </IconButton><Grid item>
                    <Typography variant="h5" component="span">
                    <IconButton  aria-label="delete">
        <ArrowForwardIcon />
      </IconButton>
                    </Typography>
                </Grid></Stack></CardContent> */}
                
                <Stack mt={4}> 
      <Card to="/dashboardadmin/dashboardadminapp"  state={{data:data}} component={RouterLink} sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center"  style={{backgroundColor:"#F0E7F5", margin:"10px"}}>
           
           {checked===true &&( <Grid container  sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center" >
                <Grid item >
                    
                <Typography sx={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"10px" }} mt={2} mb={2} >
                   Dashboard Stats
                  </Typography>
                </Grid>
                <Grid item>
                    <Typography mt={2} mb={2}>
                    <IconButton  aria-label="delete">
        <ArrowForwardIcon />
      </IconButton>
                    </Typography>
                </Grid>
            </Grid>)}
            
        </Card>
        </Stack>

        <Stack mt={10}><Card style={{backgroundColor:"purple", margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'center', color:'white',  fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:"10px" }} mt={3}  >
                   Delete Account
                  </Typography></Stack></Card></Stack>
        

      </CardContent>
      </Card>
      </Container>
    </div>
    );
}