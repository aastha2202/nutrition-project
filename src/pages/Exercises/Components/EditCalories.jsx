import React ,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// import {AppBar,ToolBar} from "@mui/material";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { CardContent, Grid, Stack, TextField, Typography, AppBar,Toolbar, Card,} from '@mui/material';
import {useImperativeHandle,forwardRef} from 'react';
// import { IconButton, RemoveIcon,AddIcon} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from "axios"
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const EditCalories = forwardRef((props, ref) => {
  const [servings,setServings]=useState(1)
  const [open, setOpen] = React.useState(false);
  const [postServings,setPostServings]=useState({
    "user_id": "" ,
    "date": "",
    "diet_id":"",
    "item_id": "",
    "type": "food",
    "category": "",
    "servings_consumed": ""
  })
  console.log(props,"proppsssss")
  useImperativeHandle(ref, () => ({
     handleClickOpen () {
      setOpen(true);
    }
  }))

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    hitpostServings()
    handleAlert1Click()
  
  };


  const [date, setDate] = useState(null)
  // console.log(item)

  useEffect(() => {
  
    setPostServings(props?.state)
      getCurrentDate()
  }, [])


  const getCurrentDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      if (date < 10) date = '0' + date;
      if (month < 10) month = '0' + month;
      setDate(date + '-' + month + '-' + year);//format: d-m-y;
  }

  const hitpostServings = async =>{
    let userid=localStorage?.getItem('userId')
    let data = JSON.stringify({
      "user_id":parseInt(userid)  ,
      "date": date,
      "diet_id":  postServings?.diet_id,
      "item_id":  postServings?.item_id,
      "type": "food",
      "category": postServings?.category,
      "servings_consumed": servings
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://aipse.in/api/updateDailyIntake',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      props.apiCall()
      setOpen(false);
      // setPostServings(reponse?.data?.data)
      console.log(response?.data?.data,"------post servings checking--");
    })
    .catch((error) => {
      console.log(error);
    });
    
    
  }
  // {calories,category_id,counts,description,item_id,item_image,item_name,sets,time_or_weight,type,units    }
// const servings = props.state2;
const categoryName =props.state;

  console.log(postServings,"-------setPostServings-------")
  console.log(categoryName,"-------editCalories------")
  //  console.log(servings,"-------state2222...------")

  //alert checking
  // const [showAlert, setShowAlert] = useState(false);

  // const handleSuccess = () => {
  //   setShowAlert(true);
  // };
  const [alert1Open, setAlert1Open] = useState(false);
  const handleAlert1Click = () => {
    setAlert1Open(true);
  };



  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        alert dialog
      </Button> */}
       <Snackbar
        open={alert1Open}
        onClose={() => handleAlertClose(1)}
        // message="Over all plan is open"
        autoHideDuration={1000}
        // severity="success"
        // sx={{background:"green"}}
        >
         <Alert severity="success">Servings Created successfully</Alert>
        </Snackbar>



       <Dialog 
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <CardContent sx={{minWidth:"250px"}}>
        <DialogTitle>{categoryName.item_name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           {categoryName.description}
          </DialogContentText>
        </DialogContent>
        </CardContent>
        <DialogContent>
          
           select servings
         
          {/* <Grid container item flexDirection={"row"}>
            <span >-</span>
            <Typography>0</Typography>
            <span>+</span>
          </Grid> */}
          <Grid>
          <IconButton >
                      <span onClick={()=>{servings>1 && setServings(prev=>prev-1)}}> <RemoveIcon /></span>
                                 </IconButton>
                                 {servings}
                                 <IconButton >
                               <span onClick={()=>{setServings
                              (prev=>prev+1)}}>  <AddIcon /></span>
                                 </IconButton> 
          </Grid>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          {/* {showAlert && (
        <Alert severity="success" onClose={() => setShowAlert(false)}>
          Created Servings Successful!
        </Alert>
      )} */}
        
        </DialogActions>
      </Dialog>
    
     

    </div>
  );
});

export default EditCalories;