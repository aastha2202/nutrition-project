import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// import CardMedia from '@material-ui/core/CardMedia';

// import companyimage from '../images/CompanyName.png';

// import chicken from '../images/chicken.png';

// import peas from '../images/peas.png'

// import ExerciseLogo from '../images/ExerciseLogo.png';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Poultry from "../../assets/Poultry.svg";
import Exerciselogo from "../../assets/Exerciselogo.svg";
import Logo from "../../assets/nova.svg";
import Arrowforward from "../../assets/Arrowforward.svg";


const pageheading={
    fontFamily:"Inter-Bold",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "38px",
    color: "#112866"
};
const plusStyle = {
    width: "34px",
    height: "26px",
    backGround: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px"
   
  };
  const textparaStyle = {
    fontFamily: 'Inter-Regular',
    // padding: "30px",
    
    fontSize:"20px" ,
    color:"#E1B725"
   
  };

  const day={
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize:"30px",
    lineHeight: "15px",
    color:"white",
    
    marginLeft:"3px"
    

  };

const month={
    fontFamily: 'Inter-Regular',
    fontSize:"15px" ,
    color:"black",
    marginTop:"10px",
    alignSelf:"center",
    // color: "#112866"
}

const year={
    fontFamily: 'Inter-Regular',
    fontSize:"15px" ,
    // color:"#112866",
    color:"black",
    marginBottom:"10px",
    
}




  const maintitle={
    fontFamily: 'Inter-SemiBold',
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
    lineHeight: "38px",

    color: "#112866"
  };

  const todaysgoal={
    fontFamily:'Inter-Regular',
    fontSize:"13px" ,
    color:"black",
    marginLeft:"10px",
    // color:"#112866"
  };
  const exercise={
    fontFamily:"Inter-Regular",
    fontSize:"12px" ,
    color:"white",
    fontWeight:"20px",
    
 };
  const excerciseNo={
    fontFamily:"Inter-Regular",
    fontSize:"30px" ,
    color:"white",
    fontWeight:"40px",
    
  };

  const today={
    fontFamily:"Inter-Regular",
    color:"#112866",
  }


  const totalservingsStyle={
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    
    color: "#000000"
  };
  const dayservingsStyle={
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    
    color: "#000000"
  };
  
export default function Exercise(){

    // const [data, setData] = useState({ date: "31  March \n 2023", servingsRecommended: 120, servingsLeft: 60, exercisesRecommended: 20, exercisesLeft: 10 })
     
    return (
        <Card className='dietplan-container'>
            <CardContent className='dietplan-companyname'>
                <img src={Logo} alt="loading" className='dietplan-companyname-image'/>
                
            </CardContent>
            <CardContent>
                <Grid container justifyContent="space-between">
                        <Grid item className="my-grid-item" style={{marginleft:"30px"}}>
                            <span style={pageheading}>Exercise</span>
                        </Grid>
                        <Grid item className="my-grid-item" mt={1} style={{marginRight:"30px"}}>
                            <span style={today}>Today</span>
                        </Grid>
                </Grid>
            </CardContent>
            
           {/* <Grid>
                <Card style={{backgroundColor:"#D1A6E7",margin:"10px"}}>
                    <Grid container  item flexDirection={'row'} alignItems="center"  >
                      <Grid item xs={6}> 
                    <Card  style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                        <Grid container mt={1} justifyContent="center" spacing={1} alignItems="center" item flexDirection="row" >
                        
                           <Grid item alignSelf="center" >
                            
                           <Typography  variant="body1" mt="1" component="span" style={day} >
                                            15
                                    </Typography>
                            </Grid> 
                            <Grid item >
                                <Grid  container flexDirection="column" mb="2" >
                                    <Grid item>
                                        <Typography variant="h5" component="span"  style={month}>
                                                March
                                        </Typography>
                                    </Grid>
                                
                                    <Grid item mr="3">
                                        <Typography  variant="h5" component="span" style={year}>
                                                2023
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                           
                            
                        </Grid>
                    </Card>
                    </Grid> 

                    <Grid item xs={6}>
                    <Card  sx={{minHeight:65}} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                    <Grid container  justifyContent="center" alignItems="center" flexDirection="column" j>
                        
                        <Grid item mt={1}>
                        <Typography  style={todaysgoal}>Today's Goal</Typography>
                        </Grid>
                        <Grid item>

                       
                        <Grid ml={2} container flexDirection="row">
                           <Grid item ><Typography style={excerciseNo}>20</Typography></Grid>
                           <Grid item mt={2.5}><Typography ml={1}   style={exercise}>Exercise</Typography></Grid>
                            </Grid>
                        </Grid>
                        
                        
                        
                    </Grid>

                    </Card>
                    </Grid>


                    </Grid>
                    
                    
                </Card>
    </Grid> */}

            <Grid>
                <Card style={{backgroundColor:"#D1A6E7",margin:"10px"}}>
                    <Grid container  item flexDirection={'row'} alignItems="center"  >
                      <Grid item xs={6}> 
                    <Card  style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                        <Grid container mt={1} justifyContent="center" alignItems="center" item flexDirection="row" >
                        
                           <Grid item alignSelf={"center"} >
                            
                           <Typography variant="body1" component="span" style={day} >
                                            15
                                    </Typography>
                            </Grid> 
                            <Grid item>
                                <Grid  container flexDirection="column"  style={{backgroundColor:"#8D25C1",margin:"10px"}} >
                                    <Grid item>
                                        <Typography variant="h5" component="span" style={month}>
                                                March
                                        </Typography>
                                    </Grid>
                                
                                    <Grid item>
                                        <Typography  variant="h5" component="span" style={year}>
                                                2023
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                           
                            
                        </Grid>
                    </Card>
                    </Grid> 

                    <Grid item xs={6}>
                    <Card  sx={{minHeight:65}} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                    <Grid container  justifyContent="center" alignItems="center" flexDirection="column" j>
                        
                        <Grid item mt={1}>
                        <Typography  style={todaysgoal}>Today's Goal</Typography>
                        </Grid>
                        <Grid item>

                       
                        <Grid ml={2} container flexDirection="row">
                           <Grid item ><Typography style={{ fontSize:"35px" ,color:"white",fontWeight:"40px"}}>20</Typography></Grid>
                           <Grid item><Typography mt={3}  ml={0.5} style={exercise}>Exercise</Typography></Grid>
                            </Grid>
                        </Grid>
                        
                        
                        
                    </Grid>

                    </Card>
                    </Grid>


                    </Grid>
                    
                    
                </Card>
            </Grid>
        <Grid Item>
             <Card  style={{backgroundColor:"#212121",margin:"10px"}}>
                    <CardContent>
                        <Grid container flexDirection="row" justifyContent="space-between">
                            
                            <Grid mt={2} xs={6} Item>
                                <CardContent alignSelf={"center"} alignItems={"center"}  alignContent={"center"}>
                                <Typography style={textparaStyle}>10 Exercise Left</Typography>
                                </CardContent>
                            </Grid>
                        
                            <Grid item xs={6} alignSelf={"center"} alignItems={"flex-end"}  alignContent={"flex-end"}> 
                            <CardContent  sx={{textAlign:'flex-end'}}  >
                                <Typography  sx={{textAlign:'flex-end'}}>
                                 <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto' ,float:"right"}}/>
                                 </Typography>
                                 </CardContent>
                            </Grid>
                            
                        </Grid>
                    </CardContent>
            </Card>
        </Grid>
           

           

            <Card  style={{backgroundColor:"#F0E7F5", margin:"10px"}}>
            
                <Grid container to="/dashboard/aerobic" component={RouterLink} sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center" style={{padding:"30px"}}>
                    <Grid item style={{padding:"5px"}}>
                        
                        <Typography variant="body1" component="span" style={maintitle}>
                        Aerobic<br/>Activity
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" component="span" style={plusStyle}>
                        <img src={Arrowforward} alt="Arrowforward logo" />
                        </Typography>
                    </Grid>
                </Grid>
              
            </Card>

            <Card  style={{backgroundColor:"#F0E7F5", margin:"10px"}}>
            
                <Grid container to="/dashboard/aerobic" component={RouterLink} sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center" style={{padding:"30px"}}>
                    <Grid item style={{padding:"5px"}}>
                        
                        <Typography variant="body1" component="span" style={maintitle}>
                        Strength<br/>Training
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" component="span" style={plusStyle}>
                        <img src={Arrowforward} alt="Arrowforward logo" />
                        </Typography>
                    </Grid>
                </Grid>
              
            </Card>  
         </Card>
    );
}