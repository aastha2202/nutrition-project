import * as React from 'react';
import { Grid,Card, Typography,CardContent, Select, FormControl,  InputLabel,Button,IconButton,Stack, Tooltip,  } from '@mui/material';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Diet from "../../assets/Diet.svg";
import TermConditions from "../../assets/TermConditions.png";
import AboutUs from "../../assets/AboutUs.jpg"
import PrivacyPolicy from "../../assets/PrivacyPolicy.png"
import ReportProblem from "../../assets/ReportProblem.png"
import GetStarted from "../../assets/GetStarted.png"
import WhyLogo from "../../assets/WhyLogo.png"


import getstarted from "../../assets/getstarted.svg";
import termconditions from "../../assets/termconditions.svg";
import privacypolicy from "../../assets/privacypolicy.svg";
import whylogo1 from "../../assets/whylogo1.png";

import aboutus from "../../assets/aboutus.svg";
import reportproblem from "../../assets/reportproblem.svg";

import { Link as RouterLink } from 'react-router-dom';
// import Searchbar from 'src/layouts/dashboard/nav/Searchbar';


const help={
  fontFamily:"Inter-Bold",
  fontSize:"20px" ,
  color:"#112866",
}

const title={
    
  fontFamily:"Inter-Bold",
  fontSize:"17px" ,
  color:"#112866",
};
const mainTitle={
  fontFamily:"Inter-Regular",
  fontStyle: "normal",
  // fontWeight: "600",
  fontSize: "12px",
  // lineHeight: "5px",
  color:"#112866",
};
export default function HelpCenter() {
  
  // let navigate = useNavigate();

  

  return (
    <>
    {/* <Card > */}
      <Grid margin="20px" >
        <Typography variant='h4' style={help}>How can we help you?</Typography>
      </Grid>
      <Grid margin={"20px"}> 
     {/* <Searchbar/> */}
      </Grid>


    
      <Grid  sx={{margin:"20px", marginTop:"20px"}}>
        <Typography variant='h6' style={title}>Popular Topics</Typography>
      </Grid>
<CardContent>

    <Grid container spacing="10"  >
    
    
   
    <Grid item container sx={{flexDirection:"column",}} xs={6} sm={6} md={4} lg={4} xl={4} >
    <Card to="/dashboard/helpcenter/registerhelp" component={RouterLink} sx={{textDecoration:'none',height:"250px",}}>
   <CardContent>
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{maxHeight:"75px",minWidth:"70px",objectFit: 'cover',}} src={getstarted}  alt="image" />
   </Grid>
   <Grid item  sx={{ margin: '0px 10px 0px 10px' }}>
    <Typography variant="h5" style={title}  >
      Get started
    </Typography>
    </Grid>
    <Grid item sx={{ margin: '0px 10px 30px 10px' }}>

    <Typography variant="text" style={mainTitle} >
      lets get start  
    </Typography>
    </Grid>
    </CardContent>
    </Card>
    </Grid>
    <Grid item container sx={{flexDirection:"column",}} xs={6} sm={6} md={4} lg={4} xl={4} >
    
    <Card to="/dashboard/helpcenter/aboutus" component={RouterLink} sx={{textDecoration:'none',height:"250px",}} >
    <CardContent>
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={aboutus}  alt="image" />
   </Grid>
   <Grid item  sx={{ margin: '0px 10px 0px 10px' }}>
    <Typography variant="h5" style={title}  >
      About us
    </Typography>
    </Grid>
    <Grid item sx={{ margin: '0px 10px 30px 10px' }}>

    <Typography variant="text" style={mainTitle} >
      About us....  
    </Typography>
    </Grid>
    </CardContent>
    </Card>
    </Grid>
    <Grid item container sx={{flexDirection:"column",}} xs={6} sm={6} md={4} lg={4} xl={4} >
    <Card sx={{height:"250px",}}>
      <CardContent>
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={whylogo1}  alt="image" />
   </Grid>
   <Grid item  sx={{ margin: '0px 10px 0px 10px' }}>
    <Typography variant="h5" style={title}  >
      Why NPWC
    </Typography>
    </Grid>
    <Grid item sx={{ margin: '0px 10px 30px 10px' }}>

    <Typography variant="text" style={mainTitle} >
      lets get why npwc  
    </Typography>
    </Grid>
    </CardContent>
    </Card>
    </Grid>
    {/* <Grid item container sx={{flexDirection:"column",}} xs={6} sm={6} md={4} lg={4} xl={4} >
    <Card  to="/dashboard/helpcenter/termconditions" component={RouterLink} sx={{textDecoration:'none',height:"250px"}}>
    <CardContent>
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{borderRadius:"100px" ,maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={termconditions}  alt="image" />
   </Grid>
   <Grid item  sx={{ margin: '0px 10px 0px 10px' }}>
    <Typography variant="h5" style={title}  >
      Terms & Conditions
    </Typography>
    </Grid>
    <Grid item sx={{ margin: '0px 10px 30px 10px' }}>

    <Typography variant="text" style={mainTitle} >
      terms and conditions
    </Typography>
    </Grid>
    </CardContent>
    </Card>
    </Grid> */}
      <Grid item container sx={{flexDirection:"column",}} xs={6} sm={6} md={4} lg={4} xl={4} >
    <Card   to="/dashboard/helpcenter/termconditions" component={RouterLink} sx={{textDecoration:'none',height:"250px"}}>
    
    <CardContent>
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={termconditions}  alt="image" />
   </Grid>
   <Grid item  sx={{ margin: '0px 10px 0px 10px' }}>
    <Typography variant="h5" style={title}  >
    terms & conditions 
    </Typography>
    </Grid>
    <Grid item sx={{ margin: '0px 10px 30px 10px' }}>

    <Typography variant="text" style={mainTitle} >
      privacy policy of npwc  
    </Typography>
    </Grid>
    </CardContent>
    </Card>
    </Grid>

    <Grid item container sx={{flexDirection:"column",}} xs={6} sm={6} md={4} lg={4} xl={4} >
    <Card   to="/dashboard/helpcenter/privacypolicy" component={RouterLink} sx={{textDecoration:'none',height:"250px"}}>
    
    <CardContent>
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={privacypolicy}  alt="image" />
   </Grid>
   <Grid item  sx={{ margin: '0px 10px 0px 10px' }}>
    <Typography variant="h5" style={title}  >
      Privacy Policy
    </Typography>
    </Grid>
    <Grid item sx={{ margin: '0px 10px 30px 10px' }}>

    <Typography variant="text" style={mainTitle} >
      privacy policy of npwc  
    </Typography>
    </Grid>
    </CardContent>
    </Card>
    </Grid>

    <Grid item container sx={{flexDirection:"column",}} xs={6} sm={6} md={4} lg={4} xl={4} >
    <Card to="/dashboard/helpcenter/popularquestions" component={RouterLink} sx={{height:"250px",textDecoration:"none"}} >
    <CardContent>
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{ maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={reportproblem}  alt="image" />
   </Grid>
   <Grid item  sx={{ margin: '0px 10px 0px 10px' }}>
    <Typography variant="h5" style={title}  >
      Popular Questions
    </Typography>
    </Grid>
    <Grid item sx={{ margin: '0px 10px 30px 10px' }}>

    <Typography variant="text" style={mainTitle} >
      raise your problem here
    </Typography>
    </Grid>
    </CardContent>
    </Card>
    </Grid>

    
   
    


    </Grid>

    </CardContent>
  {/* </Card> */}

      
     
      
    </>
  );
}