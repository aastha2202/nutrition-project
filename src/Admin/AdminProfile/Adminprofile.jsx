import * as React from 'react';

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
// import Page from '../../components/Page';



const pageheading={
  fontFamily:"Inter-Bold",
  fontWeight: "bold",
  fontSize: "30px",
  lineHeight: "30px",
  color: "#112866"
};
  
  

export default function Userprofile(){
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event, checked) => {
      setChecked(event.target.checked);
    };
   

    return(
        <div> 
       

            
   
         <CardContent>
                <Grid container flexDirection="row">

<Grid >
<Link to="/dashboardadmin/adminsearch">
      <IconButton>
        <Iconify icon="material-symbols:arrow-back-rounded" />
      </IconButton></Link>

    </Grid>
   
    <Grid>
    <Typography style={pageheading}>Profile</Typography>
    </Grid>
                </Grid>
           </CardContent>      



           

        

     
      <Grid container spacing={3} style={{ display:'flex', justifyContent:'center',  }}>
      
        
          
           

            <Card >
              <CardContent>
                
                <Grid direction={'column'}  spacing={8} height="200px" alignItems="center" justify="center">
                  
                   <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img style={{ borderRadius: 50 ,height:50,width:50}} src={fish} />
                    </Grid>
                  <Grid>
                  <Typography sx={{ fontSize: 30, fontWeight: 'bold',  fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:"10px"  }} mt={3} textAlign={'center'} >
                   Sahib
                  </Typography>
                  </Grid>


                  <Grid style={{ textAlign: "center", fontSize: 20,color:"black", fontWeight:'normal',  fontFamily: 'Inter-Regular', lineHeight: "50px", marginLeft:"10px" }}>
                   sahib@infobellit.com
                  </Grid>
                  </Grid>
               
              </CardContent>
            </Card>
           
          
      

      </Grid>
      

     


      <Stack mt={4} margin={2}>
    
      <Typography sx={{ fontSize: 20, fontWeight: 'bold',  fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"10px"  }} mt={3}  > 
                   Enter Member ID   <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
                  </Typography></Stack>

                <Stack mt={2} margin={2}>
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
      <Card to="/dashboardadmin/userstats" component={RouterLink} sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center"  style={{backgroundColor:"#F0E7F5", margin:"10px"}}>
            
            <Grid container  sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center" >
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
            </Grid>
            
        </Card>
        </Stack>

        <Stack mt={10}><Card style={{backgroundColor:"purple", margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'center', color:'white',  fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:"10px" }} mt={3}  >
                   Delete Account
                  </Typography></Stack>
                  
                  </Card>
                  </Stack>
        

     
      
      
    </div>
    );
}