import * as React from "react";
import { Card, CardContent, Grid, Typography, Avatar, Badge, Button, Stack, Container, IconButton } from '@mui/material';
import Backbutton from "../../assets/Backbutton.svg";
import { Link as RouterLink } from 'react-router-dom';
import Iconify from 'src/components/iconify/Iconify';
import { Link } from 'react-router-dom';

const pageheading={
  fontFamily:"Inter-Bold",
  fontWeight: "bold",
  fontSize: "30px",
  lineHeight: "30px",
  color: "#112866"
};

export default function Userstats(){
    return(
        <div>
          <Card><CardContent>
            <Grid container flexDirection="row">

            <Grid  >
            <Link to="/dashboardadmin/adminprofile">
                  <IconButton>
                    <Iconify icon="material-symbols:arrow-back-rounded" />
                  </IconButton></Link>

                </Grid>
               
                <Grid>
                <Typography style={pageheading}>User Stats</Typography>
                </Grid>
             </Grid>
             <Stack mt={20}><Card to="/dashboardadmin/alldietplan" component={RouterLink} sx={{textDecoration:'none'}} style={{backgroundColor:"purple", margin:"10px", alignItems:"center"}}><Stack mb={2}> 
             <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'left', color:'white', fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} gutterBottom variant="h5" component="div" mt={3}  >
                   Create Diet Plan
                  </Typography></Stack></Card></Stack>

                  <Stack mt={4}><Card style={{backgroundColor:"purple", margin:"10px", alignItems:"center"}}>
                    <Stack mb={2}>
                       <Typography sx={{ fontSize: 20, fontWeight: 'bold', color:'white', fontFamily:'Inter-semiBold', lineHeight:'38px', marginLeft:'10px'}} mt={3}  >
                   Create Exercise Plan
                  </Typography></Stack></Card></Stack>
            
                  </CardContent></Card>  

        </div>
    )
}