import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import registeraccount from "../../assets/registeraccount.png";
import Logo from "../../assets/nova.svg";
import { CardContent, Card, Stack, Grid } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import exerciseitem from "../../assets/exerciseitem.png";
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user';
import { useState ,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Iconify from 'src/components/iconify/Iconify';

const calories ={
  fontFamily: 'Inter-Regular',
  color:"#112866",
};
const title={
  fontFamily:"Inter-Bold",
  fontSize:"30px",
  color:"#112886" 
};

export default function BasicAccordion() {
  const [dataFromAPiGlobal, setDataFromAPiGlobal]= useState("");
  const [items, setItems] = useState([])

  // var [params,setParams]=useState(null)
  useEffect(()=>{
   
    apiCall();
  },[])
  const apiCall = async () => {
   

    axios.get(`http://localhost:3004/emp`)
        .then(function (response) {
            console.log(response,"checkingggggggggggggggggggg")
            if (response) {
               let  items = response?.data;
               console.log(items,'oooooooooo')
                setItems(items)
                setDataFromAPiGlobal(items)
               
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
    <div>
    
    <Grid>
    <img src={Logo} alt="nova logo" style={{height: "auto", width: "250px", marginLeft: "30px"}}/>
    </Grid>  
       
    <CardContent>
       <Grid container flexDirection="row">
     <Grid item textAlign={"center"} marginTop={0.5}>
    <Link to="/dashboard/HelpCenter" >
      <IconButton>
        <Iconify icon="material-symbols:arrow-back-rounded" />
      </IconButton></Link></Grid><Grid>
            <Typography x variant="h3" style={title} >
             Popular Questions
            </Typography></Grid>
            </Grid>
           
     </CardContent>
  
<TextField
  placeholder='Search..'
 sx={{variant:"none"}}
 onChange={(e)=>{
  
console.log(e?.target.value,'00000')

let arr=[];

let arr1=dataFromAPiGlobal

arr1?.map(item=>{

  if(item?.title.toLowerCase().includes(e?.target?.value.toLowerCase()))arr.push(item);

})

console.log(arr,'/////')

setItems(arr);

}}fullWidth

InputProps={{
  startAdornment: (
    <InputAdornment position='start'>
       <SearchIcon />
    </InputAdornment>
  ),
}}




> </TextField>
     

<Stack  mt={3}>
{
       ( items?.length>0? 
        (items?.map(item=>{
          
        return (
          
          <>
          
        <Card sx={{marginBottom:"20px"}} >
      <Accordion  sx={{ margin: "20px"}}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography variant="h5" gutterBottom>{item?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  >
           {item?.answer}
          </Typography>
         
          <img src={item.image} alt="fff" key={item.id} width={'500px'} />
        </AccordionDetails>
      </Accordion>
      </Card>
    
    
      </>
        )
        }
      )): (

     
           
      <Typography  align="center" variant='h4' style={calories}>No Questions Found</Typography>

     )


       )

}
    
     
      </Stack>
    
    </div>
  );
}
