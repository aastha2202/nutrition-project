import { Grid, Typography, Box, Select, FormControl, InputLabel, Stack, IconButton, Container } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import CardContent from '@mui/material/CardContent';
import Backbutton from "../../assets/Backbutton.svg";
import Page from 'src/components/Page';
import Userfiggirl from "../../assets/Userfiggirl.svg";
import Userfig from "../../assets/Userfig.svg";
import Iconify from 'src/components/iconify/Iconify';
import { Link } from 'react-router-dom';
//  import Searchbar from 'src/layouts/dashboard/Searchbar';
 import Searchbar from 'src/layouts/dashboard/header/Searchbar';


const pageheading={
    fontFamily:"Inter-Bold",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "30px",
    color: "#112866"
  };
export default function Adminuserlist() {
    return (
        
            <Page  title="Dashboard: Admin">
            
            {/* <Searchbar getSearch={(e) => searchFunction(e)} id="search-bar" sx={{height:"100px"}}/> */}
            {/* <Searchbar />
             <Box sx={{ flexGrow: 1, }} /> */}
            {/* <CardContent>
            <Searchbar />
             <Box sx={{ flexGrow: 1, }} />
            
            </CardContent> */}
            
            <Container>
             
             <Grid container flexDirection="row">
                <Grid   >
                <Link to="/dashboardadmin/adminuser">
                 <IconButton>
                 <Iconify icon="material-symbols:arrow-back-rounded" />
                   </IconButton></Link>

                </Grid>
               
                <Grid>
                <Typography style={pageheading}>Users uuhuhhuh</Typography>
                </Grid>
                
            
                    
                        
                        
             
             </Grid>
            
             
             
              

             <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
              

             <Box sx={{ width: '100%' }}>  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
         
       
<Card sx={{ minWidth: 275 }} style={{margin:"20px"}}>
                    <CardContent>
                    <Grid container flexDirection="row" to="/dashboardadmin/adminprofile" component={RouterLink} sx={{textDecoration:'none'}} >
                        
                        <div>
                        <img src={Userfig} alt="diet logo" style={{height: "auto",borderRadius:"40px", width: "auto"}}/>
                        </div>
                        <div>
                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>Sahib</span>
                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} >
                            @username
                        </Typography>
                        </div>
                       
                        
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card> 


          

            <Card sx={{ minWidth: 275 }} style={{margin:"20px"}}>
                    <CardContent>
                    <Grid container flexDirection="row" >
                        
                        <div>
                        <img src={Userfiggirl} className='dinning-img' alt="dinning" />
                        </div>
                        <div>
                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>Amreen</span>
                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} justifyContent="flex-center" >
                            @username
                        </Typography>
                        </div>
                       
                        
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>

            







            <Card sx={{ minWidth: 275 }} style={{margin:"20px"}}>
                    <CardContent>
                    <Grid container flexDirection="row" >
                        
                        <div>
                        <img src={Userfig} className='dinning-img' alt="dinning" />
                        </div>
                        <div>
                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>sahib</span>
                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} justifyContent="flex-center" >
                            @username
                        </Typography>
                        </div>
                       
                        
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>




            <Card sx={{ minWidth: 275 }} style={{margin:"20px"}}>
                    <CardContent>
                    <Grid container flexDirection="row" >
                        
                        <div>
                        <img src={Userfiggirl} className='dinning-img' alt="dinning" />
                        </div>
                        <div>
                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>Amreen</span>
                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} justifyContent="flex-center" >
                            @username
                        </Typography>
                        </div>
                       
                        
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>



            <Card sx={{ minWidth: 275 }} style={{margin:"20px"}}>
                    <CardContent>
                    <Grid container flexDirection="row" >
                        
                        <div>
                        <img src={Userfig} className='dinning-img' alt="dinning" />
                        </div>
                        <div>
                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>Asim</span>
                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} justifyContent="flex-center" >
                            @username
                        </Typography>
                        </div>
                       
                        
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>
          



    

           






    


        


    



            </Box>

    </Box> </Stack>


            </Container>
            
            </Page>

    


    );
}