

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Logo from "../../assets/nova.svg";
// import { CardContent, Card } from '@mui/material';
// import registeraccount from "../../assets/registeraccount.png";
// import loginaccount from "../../assets/loginaccount.png"
// import dashboarddietexerc from "../../assets/dashboarddietexerc.png";
// import overalltoday from "../../assets/overalltoday.png";
// import detaileddiet from "../../assets/detaileddiet.png";
// import dietitem from "../../assets/dietitem.png";
// import incrementservings from "../../assets/incrementservings.png"
// import detailedexercise from "../../assets/detailedexercise.png";
// import exerciseitem from "../../assets/exerciseitem.png";



// const steps = [
//   {
//     label:  <Typography variant="h6" gutterBottom>
//     Do Not Have an Account?
//   </Typography>,
//     description: <img src={registeraccount} width={'400px'}></img>,
//   },
//   {
//     label: <Typography variant="h6" gutterBottom>
//     Already have an account? Login Here!
//   </Typography>,
//     description: <img src={loginaccount} width={'500px'}
//     />
//   },
//   {
//     label: <Typography variant="h6" gutterBottom>
//     Succesfully LoggedIn? Check your diet and exercise plan!
//   </Typography>,
//     description: <img src={dashboarddietexerc} width={'300px'}/>,
//   },

//   {
//     label: <Typography variant="h6" gutterBottom>
//     How to check daily, weekly or monthly diet and exercise plans?
//   </Typography>,
//     description: <img src={overalltoday} width={'300px'}/>,
//   },
//   {
//     label: <Typography variant="h6" gutterBottom>
//     How to check detailed diet plan? Click Here!
//   </Typography>,
//     description: <img src={detaileddiet} width={'500px'}/>,
//   },
//   {
//     label: <Typography variant="h6" gutterBottom>
//     How to check diet items? Click Here!
//   </Typography> ,
//     description: <img src={dietitem} width={'300px'}/>,
//   },
//   {
//     label:  <Typography variant="h6" gutterBottom>
//     Consumed a Serving? Increment Here!
//   </Typography>,
//     description: <img src={incrementservings} width={'300px'}/>,
//   },
//   {
//     label:  <Typography variant="h6" gutterBottom>
//     Want to see detailed exercise plan for today? Click Here!
//   </Typography>,
//     description: <img src={detailedexercise} width={'300px'}/>,
//   },
//   {
//     label:  <Typography variant="h6" gutterBottom>
//     Click Here to check Recommended Exercise items!!
//   </Typography>,
//     description: <img src={exerciseitem} width={'300px'}/>,
//   },
// ];

// export default function VerticalLinearStepper() {
  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

//   return (
//     <Box sx={{  marginLeft: '20px', marginRight:'20px' }}>
      //    <div><img
      //    src={Logo}
      //    alt="nova logo"
      //    style={{ height: "auto", width: "250px", marginLeft: "10px" }}
      // /></div>
      // <Card><CardContent>
      // <Stepper  activeStep={activeStep} orientation="vertical">
      //   {steps.map((step, index) => (
      //     <Step key={step.label}>
      //       <StepLabel
      //       //   optional={
      //       //     index === 8 ? (
      //       //       <Typography variant="caption">Last step</Typography>
      //       //     ) : null
      //       //   }
      //       >
      //         {step.label}
      //       </StepLabel>
      //       <StepContent>
      //         <Typography>{step.description}</Typography>
      //         <Box sx={{ mb: 2 }}>
      //           <div>
      //             <Button
      //               variant="contained"
      //               onClick={handleNext}
      //               sx={{ mt: 1, mr: 1 }}
      //             >
      //               {index === steps.length - 1 ? 'Finish' : 'Continue'}
      //             </Button>
      //             <Button
      //               disabled={index === 0}
      //               onClick={handleBack}
      //               sx={{ mt: 1, mr: 1 }}
      //             >
      //               Back
      //             </Button>
      //           </div>
      //         </Box>
      //       </StepContent>
      //     </Step>
      //   ))}
      // </Stepper>
      // {activeStep === steps.length && (
      //   <Paper square elevation={0} sx={{ p: 3, marginLeft: '15%' }}>
      //     <Typography variant="h4"  gutterBottom>All steps completed - you&apos;re finished!!</Typography>
      //     <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
      //       Start Again!
      //     </Button>
      //   </Paper>
      // )}</CardContent></Card>
//       {/* {activeStep === steps.length && (
//         <Paper square elevation={0} sx={{ p: 3 }}>
//           <Typography variant="h6" gutterBottom>All steps completed - you&apos;re finished</Typography>
//           <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
//             Start Again!
//           </Button>
//         </Paper>
//       )} */}
//     </Box>
//   );
// }

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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const steps = [
  {
    label:  <Typography variant="h6" gutterBottom>
    Do Not Have an Account?
  </Typography>,
    description: <img src={registeraccount} width={'400px'}></img>,
  },
  {
    label: <Typography variant="h6" gutterBottom>
    Already have an account? Login Here!
  </Typography>,
    description: <img src={loginaccount} width={'500px'}
    />
  },
  {
    label: <Typography variant="h6" gutterBottom>
    Succesfully LoggedIn? Check your diet and exercise plan!
  </Typography>,
    description: <img src={dashboarddietexerc} width={'300px'}/>,
  },

  {
    label: <Typography variant="h6" gutterBottom>
    How to check daily, weekly or monthly diet and exercise plans?
  </Typography>,
    description: <img src={overalltoday} width={'300px'}/>,
  },
  {
    label: <Typography variant="h6" gutterBottom>
    How to check detailed diet plan? Click Here!
  </Typography>,
    description: <img src={detaileddiet} width={'500px'}/>,
  },
  {
    label: <Typography variant="h6" gutterBottom>
    How to check diet items? Click Here!
  </Typography> ,
    description: <img src={dietitem} width={'300px'}/>,
  },
  {
    label:  <Typography variant="h6" gutterBottom>
    Consumed a Serving? Increment Here!
  </Typography>,
    description: <img src={incrementservings} width={'300px'}/>,
  },
  {
    label:  <Typography variant="h6" gutterBottom>
    Want to see detailed exercise plan for today? Click Here!
  </Typography>,
    description: <img src={detailedexercise} width={'300px'}/>,
  },
  {
    label:  <Typography variant="h6" gutterBottom>
    Click Here to check Recommended Exercise items!!
  </Typography>,
    description: <img src={exerciseitem} width={'300px'}/>,
  },
];


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
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
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
    <Grid container flexDirection={"row"} margin="20px" >
      
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
      <Card><CardContent>
      <Stepper  activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
            //   optional={
            //     index === 8 ? (
            //       <Typography variant="caption">Last step</Typography>
            //     ) : null
            //   }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, marginLeft: '15%' }}>
          <Typography variant="h4"  gutterBottom>All steps completed - you&apos;re finished!!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Start Again!
          </Button>
        </Paper>
      )}</CardContent></Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Card><CardContent>
      <Stepper  activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
            //   optional={
            //     index === 8 ? (
            //       <Typography variant="caption">Last step</Typography>
            //     ) : null
            //   }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, marginLeft: '15%' }}>
          <Typography variant="h4"  gutterBottom>All steps completed - you&apos;re finished!!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Start Again!
          </Button>
        </Paper>
      )}</CardContent></Card>
      </TabPanel>
      
    </Box>
  );
}
