import * as React from 'react';
import { Grid,Card, Typography,CardContent, Select, FormControl,  InputLabel,Button,IconButton,Stack, Tooltip,  } from '@mui/material';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Diet from "../../assets/Diet.svg";

import { Link as RouterLink } from 'react-router-dom';




const title={
    
  fontFamily:"Inter-Bold",
  fontSize:"20px" ,
  color:"#112866",
};
const mainTitle={
  fontFamily:"Inter-Regular",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "15px",
  // color:"#112866",
};
export default function HelpCenter() {
  
  // let navigate = useNavigate();

  

  return (
    <>
    {/* <Card > */}
      <Grid margin="10px" >
        <Typography variant='h4'>How can we help you?</Typography>
      </Grid>
      {/* <Grid> 
        <Card sx={{margin:"10px" , height:"40px"}}> serach bar</Card>
      </Grid> */}


    
      <Grid  sx={{margin:"10px", marginTop:"20px"}}>
        <Typography variant='h6' style={title}>Popular Topics</Typography>
      </Grid>


    <Grid container spacing="1"  >
    
    
   
    <Grid item container sx={{flexDirection:"column",margin:"10px"}} xs={5} sm={5.7} md={3.7} lg={3.7} xl={3.7} >
    <Card >
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{borderRadius:100,maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={Diet}  alt="image" />
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
    </Card>
    </Grid>
    <Grid item container sx={{flexDirection:"column",margin:"10px"}} xs={5} sm={5.7} md={3.7} lg={3.7} xl={3.7} >
    <Card to="/dashboard/helpcenter/aboutus" component={RouterLink} sx={{textDecoration:'none'}} >
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{borderRadius:100,maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={Diet}  alt="image" />
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
    </Card>
    </Grid>
    <Grid item container sx={{flexDirection:"column",margin:"10px"}} xs={5} sm={5.7} md={3.7} lg={3.7} xl={3.7} >
    <Card >
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{borderRadius:100,maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={Diet}  alt="image" />
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
    </Card>
    </Grid>
    <Grid item container sx={{flexDirection:"column",margin:"10px"}} xs={5} sm={5.7} md={3.7} lg={3.7} xl={3.7} >
    <Card  to="/dashboard/helpcenter/termconditions" component={RouterLink} sx={{textDecoration:'none'}}>
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{borderRadius:100,maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={Diet}  alt="image" />
   </Grid>
   <Grid item  sx={{ margin: '0px 10px 0px 10px' }}>
    <Typography variant="h5" style={title}  >
      Terms & Conditions
    </Typography>
    </Grid>
    <Grid item sx={{ margin: '0px 10px 30px 10px' }}>

    <Typography variant="text" style={mainTitle} >
      lets get starts with  terms & condtions
    </Typography>
    </Grid>
    </Card>
    </Grid>

    <Grid item container sx={{flexDirection:"column",margin:"10px"}} xs={5} sm={5.7} md={3.7} lg={3.7} xl={3.7} >
    <Card   to="/dashboard/helpcenter/privacypolicy" component={RouterLink} sx={{textDecoration:'none'}}>
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{borderRadius:100,maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={Diet}  alt="image" />
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
    </Card>
    </Grid>

    <Grid item container sx={{flexDirection:"column",margin:"10px"}} xs={5} sm={5.7} md={3.7} lg={3.7} xl={3.7} >
    <Card >
    <Grid item sx={{ display: "flex", margin:"20px", justifyContent: "center", alignItems: "center" }}>
   <img  style={{borderRadius:100,maxHeight:"70px",minWidth:"70px",objectFit: 'cover',}} src={Diet}  alt="image" />
   </Grid>
   <Grid item  sx={{ margin: '0px 10px 0px 10px' }}>
    <Typography variant="h5" style={title}  >
      Report a problem
    </Typography>
    </Grid>
    <Grid item sx={{ margin: '0px 10px 30px 10px' }}>

    <Typography variant="text" style={mainTitle} >
      raise your problem here
    </Typography>
    </Grid>
    </Card>
    </Grid>

    
   
    


    </Grid>
  {/* </Card> */}

      
     
      
    </>
  );
}