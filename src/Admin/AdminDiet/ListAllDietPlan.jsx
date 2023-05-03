import * as React from 'react';
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
import CreateDietPlan from './components/CreateDietPlan'
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
export default function ListAllDietPlan(){
  
    
    return(
        <div> 
          <Page>
          <Card><CardContent>
           <CreateDietPlan />
            <Grid container flexDirection="row">

        <Grid   >
            {/* <img src={Backbutton} className='dinning-img' alt="dinning" /> */}
            <Link to="/dashboardadmin/userstats">
                  <IconButton>
                    <Iconify icon="material-symbols:arrow-back-rounded" />
                  </IconButton></Link>
            </Grid>
           
            <Grid>
            <Typography style={pageheading}>List All Diet Plan</Typography>
            </Grid>
         </Grid>
         
         <Stack mt={20}><Card style={{backgroundColor:"purple", fontFamily:'Inter-Regular', margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'center', color:'white', fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} mt={3}  >
                   Save Confirm !!
                  </Typography></Stack></Card></Stack></CardContent></Card></Page>
                  </div>
    );
}