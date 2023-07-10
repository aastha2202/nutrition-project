import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from "../../assets/nova.svg";
import { CardContent, Card, Stack } from '@mui/material';
import registeraccount from "../../assets/registeraccount.png";
import loginaccount from "../../assets/loginaccount.png"
import mobiledash from "../../assets/mobiledash.png"
import dashboarddietexerc from "../../assets/dashboarddietexerc.png";
import mobilediet from "../../assets/mobilediet.png";
import mobileexer from "../../assets/mobileexer.png";
import mobileexeritem from "../../assets/mobileexeritem.png"
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";

export default function BasicAccordion() {
  
     
    
  return (
    <div>
        <div><img
         src={Logo}
         alt="nova logo"
         style={{ height: "auto", width: "250px", marginLeft: "10px", marginBottom: "20px" }}
      /></div>
      <TextField

placeholder='Search..'

onChange={(e)=>{





// let arr=[];




// let arr1=dataFromAPiGlobal




// arr1?.map(item=>{




// if(item?.item_name.toLowerCase().includes(e?.target?.value.toLowerCase()))arr.push(item);




// })




// console.log(arr,'/////')




// setItems(arr);




}}fullWidth




InputProps={{

startAdornment: (

  <InputAdornment position='start'>

     <SearchIcon />

  </InputAdornment>

),

}}




// InputProps={{

//     startAdornment: (

//         <InputAdornment position="start">

//            <SearchIcon />

//         </InputAdornment>

//          ),

//     endAdornment:(<IconButton sx={{visibility: dataFromAPiGlobal? "visible": "hidden"}} onClick={handleClearClick}><ClearIcon/></IconButton>)

//       }}





> </TextField>
      {/* <div class="col-sm-4 mb-4">
     <input type="text" id="myFilter" class="form-control" onkeyup="myFunction()" placeholder="Search for card name...">
    </div> */}
     
      {/* <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} /> */}
<Stack  mt={3}>
      <Accordion  sx={{ marginBottom: "20px"}}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography variant="h5" gutterBottom>How to register?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  >
           Click on Get Started and fill your details in the registraion form, as shown.
          </Typography>
          <img src={registeraccount} width={'400px'}></img>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ marginBottom: "20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          
        >
          <Typography variant="h5" gutterBottom>How to login if already a member?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            After registering, you can login after filling your login credentials, as shown below
          </Typography>
          <img src={loginaccount} width={'500px'}></img>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ marginBottom: "20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" gutterBottom>How to check your dashboard?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           For checking your dashboard, refer to this.
          </Typography>
          <img src={dashboarddietexerc} width={'300px'}></img>
         
         
        </AccordionDetails>
      </Accordion>
     
    
      <Accordion  sx={{ marginBottom: "20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" gutterBottom>How to check detailed diet plan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
           For checking detailed diet plan for today, refer to this.
          </Typography>
          <img src={mobiledash} width={'400px'}></img>
          <Typography  >
           You can increment the number of servings consumed. Check This!
          </Typography>
          <img src={mobilediet} width={'300px'}></img>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: "20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" gutterBottom>How to check the detailed exercise plan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           For checking exercise plan for today, refer to this.
          </Typography>
          <img src={mobileexer} width={'400px'}></img>
          <Typography>
           For incrementing the sets, refer to this.
          </Typography>
          <img src={mobileexeritem} width={'400px'}></img>
         
        </AccordionDetails>
      </Accordion>
    
      </Stack>
    
    </div>
  );
}
