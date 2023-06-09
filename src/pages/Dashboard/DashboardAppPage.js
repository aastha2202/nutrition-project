// @mui
import { Grid, Typography, Select, FormControl, InputLabel } from '@mui/material';

import axios from 'axios';

import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import MenuItem from '@mui/material/MenuItem';
// import DietPlan from '../Diet/DietPlan'; 
import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import Exerciselogo from "../../assets/Exerciselogo.svg";
import  "../styles.css";

// components

// sections

// ----------------------------------------------------------------------
  
const hello={
  color:"#112866",
  fontFamily:"Inter-SemiBold",

}
const subtext={
  
  fontSize:"10px" ,
  color:"white",
  fontFamily:"Inter-regular",

}


export default function DashboardAppPage() {

  return (
  <div >
    <img src={Logo} alt="nova logo" style={{height: "auto", width: "250px", marginLeft: "30px"}}/>
    
        
    <Card style={{margin:"10px"}}>
    
      <Card  style={{ backgroundColor:"#D1A6E7"}}>
        <CardContent >
          <Card style={{backgroundColor:"#D1A6E7"}}>
            <Grid container   style={{display:'flex',flexDirection:"row",position:'relative',marginBottom:'1rem'}}>
               <Grid item xs={6}>
               <CardContent >
                         <Typography  variant='h5' style={hello} >
                              Hello, Seema
                          </Typography>    

               </CardContent>
               </Grid>
               

         

            <Grid  item xs={6} >
              <CardContent >
                      <FormControl  sx={{ position:'absolute',right:0 }} size="small">
                     <Select sx={{backgroundColor:"white"}} defaultValue="Today">
                     <MenuItem value="Today" >Today</MenuItem>
                     <MenuItem value="Next Week">Next Week</MenuItem>
                     <MenuItem value="Previous Week">Previous Week</MenuItem>
                     </Select>
                     </FormControl>
                 <br/>
                
              </CardContent>
              </Grid>
                   

           
         
          
          </Grid>

          </Card>
          


          <Card  style={{backgroundColor:"#8D25C1"}}>
            <Typography color="purple" variant='h4' >
              <div style={{display:'flex',alignContent:'center',justifyContent:'center',alignItems:"center",margin: "10px"}}>
                <span style={{color:"white" ,margin: "5px" }}>
                  15
                </span>
                <span style={{color:"black" ,margin: "5px"}}>
                    March
                </span>
                <span style={{color:"black",margin: "5px"}}>
                  2023
                </span>
              </div>
            </Typography>

          </Card>
          
        </CardContent>
      </Card>
      
    </Card>

    
    
    
    
   


    <Card   style={{backgroundColor:"#212121",margin:"10px"}}>
                    <CardContent   to="/dashboard/dietplan" component={RouterLink} sx={{textDecoration:'none'}}>
                    <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                        <Grid item xs={4} alignItems="center" sx={{textAlign:'center'}} justifyContent="center">
                               
                                <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                  120
                                </Typography>
                                <Typography style={subtext}>Servings recommended</Typography>
                                
                        </Grid>
                        <Grid item xs={4}  sx={{justifyContent:'center',textAlign: 'center',alignItems:"center",alignSelf:'center',alignContent:'center',}}>
                       
                          <Typography >
                          <img src={Diet}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                          </Typography>
                       

                       
                       
                        </Grid>
                        <Grid item xs={4} sx={{textAlign:'center'}} alignItems="center" justifyContent="center">
                               
                                <Typography style={{ fontSize:"25px" ,color:"#E1B725"}}>
                                  16
                                </Typography>
                                <Typography style={subtext}>Servings left</Typography>
                              
                        </Grid>
                        
                       
                        
                       
                        
                        
    
                        
                        </Grid>
                    </CardContent>
            </Card>
    
            <Card   style={{backgroundColor:"#212121",margin:"10px"}}>
                    <CardContent   to="/dashboard/Exercise" component={RouterLink} sx={{textDecoration:'none'}}>
                    <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                        
                        <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
                              
                                
                                <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                  100
                                </Typography>
                                <Typography style={subtext}>exercise recommended</Typography>
                               

                              
                               
                        </Grid>
                        <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
                        
                        <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                        
                       
                        </Grid>
                        <Grid item xs={4} sx={{textAlign:'center'}}  >
                          
                          
                                <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                  10
                                </Typography>
                                <Typography style={subtext}>exercise left</Typography>
                                


                          
                               
                        </Grid>
                        
                       
                        
                       
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>

            
    
    
    
  </div>
  );
}
