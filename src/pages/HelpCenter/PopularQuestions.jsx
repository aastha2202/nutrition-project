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
import { InputAdornment ,Grid} from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import Data from "./mock_data.json";




export default function BasicAccordion() {
  const [dataFromAPiGlobal, setDataFromAPiGlobal]= useState("");
  const [items, setItems] = useState([])

  const apiCall = async () => {
    let userIdAsync = await localStorage.getItem('userId')

    setCategoryName(params.category)

    axios.get(`https://novapwc.com/api/getItemsOfCategory?category_id=${params.cat}&type=food`)
        .then(function (response) {
            console.log(response?.data?.data,"checkingggggggggggggggggggg")
            if (response?.data?.data) {
               let  items = response?.data?.data
                setItems(items)
                setDataFromAPiGlobal(items)
                axios.get(`https://novapwc.com/api/itemIntakeStatus?userid=${userIdAsync}&type=food&category=${params.category}`)
                    .then(function (response) {
                        console.log(response?.data)
                        let itemServings = response?.data?.data ? response?.data?.data :[]
                       
                        for (let i = 0; i < items.length; i++) {
                            let servings = itemServings?.filter(oneitem => oneitem?.item_id == items[i].item_id)
                            console.log(servings,"servings")
                            if (servings.length > 0) {
                                items[i] = { ...items[i], ...servings[0] }
                                setAddServings(addServings => parseInt(addServings) + parseInt(servings[0].servings_consumed))
                            }
                            else {
                                items[i] = { ...items[i], servings_consumed: 0 }
                            }

                            if (i == items.length - 1) {
                                setItems(items)
                                setLoading(false)
                            }
                        }
                        setItemIntakeStatus(response?.data?.data)

                    })
                    .catch(function (error) {
                        // Alert.alert("something went wrong");
                        // console.log(error);
                    });
            }
            else {
                setLoading(false)
            }
        })
        .catch(function (error) {
            // Alert.alert("something went wrong");
            // console.log(error);
        });
}

  

  
     
    
  return (
    <>
        {/* <div><img
         src={Logo}
         alt="nova logo"
         style={{ height: "auto", width: "250px", marginLeft: "10px", marginBottom: "20px" }}
      /></div> */}
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
      <CardContent>
      <TextField

placeholder='Search..'

onChange={(e)=>{
  
  console.log(e?.target.value,'00000')
  
  let arr=[];
  
  let arr1=dataFromAPiGlobal
  
  arr1?.map(item=>{
  
    if(item?.item_name.toLowerCase().includes(e?.target?.value.toLowerCase()))arr.push(item);
  
  })
  
  console.log(arr,'/////')
  
  setItems(arr);
  
  }}




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

  
              
                
                {/* <p>{post.title}</p> */}
                <Stack  mt={3}>
      <Accordion  sx={{ marginBottom: "20px"}}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography variant="h5" gutterBottom>{post.title}</Typography>
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
          <Typography variant="h5" gutterBottom>{post.title}</Typography>
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
            
          

      {/* <div class="col-sm-4 mb-4">
     <input type="text" id="myFilter" class="form-control" onkeyup="myFunction()" placeholder="Search for card name...">
    </div> */}
     
      {/* <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} /> */}

      </CardContent>
    </>
  );
}
