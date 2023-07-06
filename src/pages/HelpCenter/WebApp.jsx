import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CardContent, Card } from '@mui/material';
import registeraccount from "../../assets/registeraccount.png";
import loginaccount from "../../assets/loginaccount.png"
import mobiledash from "../../assets/mobiledash.png"
import dashboarddietexerc from "../../assets/dashboarddietexerc.png";
import mobilediet from "../../assets/mobilediet.png";
import mobileexer from "../../assets/mobileexer.png";
import mobileexeritem from "../../assets/mobileexeritem.png"

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
    
    //   {
    //     label: <Typography variant="h6" gutterBottom>
    //     How to check daily, weekly or monthly diet and exercise plans?
    //   </Typography>,
    //     description: <img src={overalltoday} width={'300px'}/>,
    //   },
      {
        label: <Typography variant="h6" gutterBottom>
        How to check detailed diet plan? Click Here!
      </Typography>,
        description: <img src={mobiledash} width={'300px'}/>,
      },
      {
        label: <Typography variant="h6" gutterBottom>
        How to check diet items? Click Here!
      </Typography> ,
        description: <img src={mobilediet} width={'200px'}/>,
      },
     
      {
        label:  <Typography variant="h6" gutterBottom>
        Want to see detailed exercise plan for today? Click Here!
      </Typography>,
        description: <img src={mobileexer} width={'300px'}/>,
      },
      {
        label:  <Typography variant="h6" gutterBottom>
        Click Here to check Recommended Exercise items!!
      </Typography>,
        description: <img src={mobileexeritem} width={'300px'}/>,
      },
];

export default function WebApp() {
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

  return (
   <div> <Card><CardContent>
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
   )}</CardContent></Card></div>
  );
}