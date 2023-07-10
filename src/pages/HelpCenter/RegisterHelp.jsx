
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Logo from "../../assets/nova.svg";

import { CardContent, Card } from '@mui/material';
import registeraccount from "../../assets/registeraccount.png";
import loginaccount from "../../assets/loginaccount.png"
import dashboarddietexerc from "../../assets/dashboarddietexerc.png";
import overalltoday from "../../assets/overalltoday.png";
import detaileddiet from "../../assets/detaileddiet.png";
import dietitem from "../../assets/dietitem.png";
import incrementservings from "../../assets/incrementservings.png"
import detailedexercise from "../../assets/detailedexercise.png";
import exerciseitem from "../../assets/exerciseitem.png";
import MobileApp from './MobileApp';
import WebApp from './WebApp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';




function TabPanel(props) {
  const { children, value, index, ...other } = props;
 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  return (
    <Box sx={{ width: '100%' }}>
    {/* <div><img
         src={Logo}
         alt="nova logo"
         style={{ height: "auto", width: "250px", marginLeft: "10px" }}
      />
    </div> */}
    <Grid container flexDirection={"row"} marginLeft={2} >
      
      <Grid item xs={1}  direction="row"
          justifyContent="center"
          alignItems="center"
          alignSelf={"center"} >
      
        <Link to="/dashboard/HelpCenter" >
        
            
        <ArrowBackIcon style={{ color: 'black' }} />
        </Link>
            
            
  
            
    
      </Grid>
        <Grid item xs={11}
          container
          direction="row"
          // justifyContent="center"
          // alignItems="center"
          // marginTop="5px"
        >
          <img
         src={Logo}
         alt="nova logo"
         style={{ height: "auto", width: "250px", marginLeft: "10px" }}
      />
         
        </Grid>
        </Grid>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Web" {...a11yProps(0)} />
          <Tab label="Mobile" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MobileApp />
     
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WebApp />
      
      </TabPanel>
      
    </Box>
  );
}
