

import * as React from 'react';
import {useState,useEffect,useRef} from 'react';
import { useLocation } from "react-router-dom";
import { Card, CardContent, Grid, Typography, Avatar, Badge, Button, Stack, Container } from '@mui/material';
import Backbutton from "../../assets/Backbutton.svg";
import { Link as RouterLink } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Iconify from 'src/components/iconify/Iconify';
import Slide from '@mui/material/Slide';
import Page from 'src/components/Page';
import CreateDietPlan from './components/CreateDietPlanNut';

import axios from 'axios';
// import EditCreateDietPlan from './components/EditCreateDietPlan';

// import ScrollItems from './components/ScrollItems';
import ScrollableTabsButtonPrevent from "./components/ScrollItems";
// import BackDrop from './components/BackDrop';

const text ={
  fontFamily: 'Inter-Regular',
  color:"#112866",
  
};

const edit={
  fontFamily: 'Inter-Regular',
  color:"yellow",
  marginLeft:"50px", 
  
  right:30,
  position:'absolute',

}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const pageheading={
    fontFamily:"Inter-Bold",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "30px",
    color: "#112866"
  };
export default function ListAllDietPlan(props){

  const [open, setOpen] = React.useState(false);
  const [dataFromApi,setDataFromApi]=useState([])
  const childComponentRef = useRef(null);
  const location = useLocation();
  const[userData,setUserData]=useState(location.state?.data);
  console.log(userData,'list plan userdata')


  useEffect(()=>{
    apiHit();
  },[])

  const apiHit=async()=>{
    let data = '';

        let config = {
          method: 'POST',
          maxBodyLength: Infinity,
          url: `https://novapwc.com/api/listalldietplans?user_id=${userData.id}&type=food`,
          headers: { },
          data : data
        };

        axios.request(config)
        .then((response) => {
          //console.log(response?.data?.ListallDietPlan[0].Category,'----from APi hit list All Diet plan');
          setDataFromApi(response?.data?.ListallDietPlan);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  console.log(dataFromApi,'dataFromApi[0]?.Category')
    
    return(
        <div> 
          <Page>
          
           <CreateDietPlan userid={userData.id} apiHitParent={apiHit} ref={childComponentRef} />
            <Grid container flexDirection="row">

        <Grid   >
            {/* <img src={Backbutton} className='dinning-img' alt="dinning" /> */}
            <Link state={{data:userData}} to="/dashboardadmin/dashboardadminapp">
                  <IconButton>
                    <Iconify icon="material-symbols:arrow-back-rounded" />
                  </IconButton></Link>
            </Grid>
           
            <Grid  >
            <Typography style={pageheading}>List All Diet Plan</Typography>
            </Grid>
         </Grid>



         {
          dataFromApi?.map(item=>{
            return (
              <Card  sx={{ margin: '10px', marginTop: '40px'}} >
              <CardContent>
              <Grid container flexDirection={"column"} >
    
                 <Grid container item flexDirection={"row"} justifyContent={'space-between'}>
                  <Grid>
                  <Typography sx={text}>Start Date: {item.start_date}</Typography>
                  <Typography sx={text}>End Date: {item.end_date}</Typography>
                  </Grid>
                  
                  <Grid>
                  <Button onClick={() => childComponentRef.current.editClick(item)} >
                  <Typography  >Edit</Typography>
                  </Button>
                  </Grid>
                  
    
    
                 </Grid>
                
              </Grid>
              <ScrollableTabsButtonPrevent category={item?.Category}/>
    
              </CardContent>
             </Card>

            );
          })
         }
         {dataFromApi?.length===undefined && <h1>No Data</h1>}

        


        
        
         
         {/* <Stack mt={20}><Card style={{backgroundColor:"purple", fontFamily:'Inter-Regular', margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'center', color:'white', fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} mt={3}  >
                   Save Confirm !!
                  </Typography></Stack></Card></Stack> */}
                  
                      
              </Page>
                  </div>
    );
}