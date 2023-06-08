import * as React from 'react';
import axios from 'axios';
// import Button from '@mui/material/Button';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Dialog from '@mui/material/Dialog';
import {Button, ButtonBase, CardContent, Card , DialogContent, DialogContentText,Typography, Grid, TextField ,MenuItem,InputLabel,NativeSelect,FormControl} from '@mui/material';
// import  ButtonBase  from '@mui/material';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Iconify from 'src/components/iconify/Iconify';









// import {   DialogContent, DialogContentText,  } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Plusimage from "../../../assets/Plusimage.svg";   
import { Form } from 'react-router-dom';



const currencies = [
  {
    value: 'USD',
    label: 'Ten',
  },
  {
    value: 'EUR',
    label: 'Twenty',
  },
  {
    value: 'BTC',
    label:'Thirty',
  },
  {
    value: 'JPY',
    label: 'Fats',
  },
];


const Transition = React.forwardRef( (props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = forwardRef((props, ref) => {
 
  const [open, setOpen] = React.useState(false);
  const [name,setName]=useState('');
  const[exercise,setExercise]=useState({});
  const [viewImage, setViewImage] = React.useState(false);
  const [action,setAction]=useState("crea");
  const [reload,setReload]=React.useState(false);
  const [dataOfItem,setData]=useState("");
  const handleClickOpen = () => {
    if(action==='Edit'){
      console.log('inside edit action',exercise);
     
    }
    else if(action==='create'){
      console.log(action,'inside123');
      
        setExercise({
          "calories":"",
          "category_id":"",
          "counts":"",
          "description":"",
          "item_image":"",
          "item_name":"",
          "type":"",
        })

        
    }
    
    setOpen(true);
  };

  const handleClose = () => {
    setExercise({})
    setOpen(false);
  };
  const handleCloseSave=()=>{

    if(action==='Edit'){
      console.log('data to post ',exercise);
      apiHitEdit();
    }
    else{
      apiHit();
    }
   
    //console.log('data to post ',exercise);
    setExercise({})
    setOpen(false);
  }

useEffect(()=>{
  //console.log((exercise),'exxercise inside effect');
  setExercise(exercise);
},[exercise])

  const [sets, setsets] = React.useState('');

  const handleChanges = (event) => {
    setsets(event.target.value);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(()=>{
    setAction(action);
  },[action])
  
  useImperativeHandle(ref, () => ({
   async handleClickEdit(data,action){
      setAction("Edit");
     //console.log(action,'setAction')
      const dt=data;
      setData(data);
      await setExercise(dt)

      console.log(exercise,'--data from edit 1',dt);

      //console.log(dt,'111',exercise)
      //convertImageEdit(data.category_id,'check');
      
      //console.log('inside edit action',exercise,action);
      handleClickOpen();
    }
    
}))

function getBase64(file, callback) {

  const reader = new FileReader();

  reader.addEventListener('load', () => callback(reader.result));

  reader.readAsDataURL(file);
}
  

const [images,setImages]=useState([])

useEffect(()=>{
    setImages(images);
},[images])

const convertImage = async(e) => {
  console.log("this is calleddddfdsfs",e.target.files[0])
  // data.append('emp_id', userid);
  // data.append('file', e.target.files[0]);
  // setImagePath([...imagePath, e.target.files[0]])
  const imageData = URL.createObjectURL(e.target.files[0]);
  //console.log(imageData, "files")
  await getBase64(e.target.files[0], function (base64Data) {
    console.log('getBase64')
    setImages( [base64Data])
    setViewImage(true);
    console.log(images,'----images----');
    console.log(base64Data,'base64Data')
  //   setViewImage(true)
  
});
  console.log("upload method is calling ",images[0]?.toString().slice(22,))
  //console.log(images[0],'slicing-----',images[0].toString().slice(22,),'----image to upload----');
  exercise.item_image=images[0]?.toString().slice(22,);
  
  // setFormData(formData=>({
  //   ...formData,
  //   [item_image]:images[0]?.toString().slice(22,)
  // }))
   setImages([])
  setReload(!reload);
  
  //alert("Photo Uploaded Successfully..")
  
}

const convertImageEdit = (img) => {
  console.log("this is calleddddfdsfs edit",img)
  // data.append('emp_id', userid);
  // data.append('file', e.target.files[0]);
  // setImagePath([...imagePath, e.target.files[0]])
  const imageData = URL.createObjectURL(img);
  //console.log(imageData, "files")
  getBase64(img, function (base64Data) {
    console.log('getBase64')
    setImages([ base64Data])
    setViewImage(true);
    console.log(images,'----images----');
    console.log(base64Data,'base64Data')
  //   setViewImage(true)
  
});
  console.log("upload method is calling ")
  //console.log(images[0],'slicing-----',images[0].toString().slice(22,),'----image to upload----');
  exercise.item_image=images[0]?.toString().slice(22,);
  
  // setFormData(formData=>({
  //   ...formData,
  //   [item_image]:images[0]?.toString().slice(22,)
  // }))
   setImages([])
  setReload(!reload);

  console.log(exercise,'after image is upload');
  
  //alert("Photo Uploaded Successfully..")
  
}
const deleteImage = (index) => {
  images.splice(index, 1);
  setImages([...images]);
};


const apiHit=async=>{
  let data = JSON.stringify({
    "item_name": exercise?.item_name,
    "time_or_weight": 500,
    "units": "grams",
    "calories": 100,
    "category_id": 32380,
    "description":exercise?.description,
    "item_image": exercise?.item_image,
    "sets": 0,
    "counts": 0,
    "type": "exercise",
   
  });
  
  let config = {
    method: 'POST',
    maxBodyLength: Infinity,
    url: 'https://aipse.in/api/postOverAllDietPlan',
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}

const apiHitEdit=async()=>{

  let data = JSON.stringify({
    "item_name": exercise?.item_name,
    "time_or_weight": 500,
    "units": "grams",
    "calories": 100,
    "category_id": dataOfItem.category_id,
    "description":exercise?.description,
    "item_image": exercise?.item_image,
    "sets": 0,
    "counts": 0,
    "type": "exercise",
    "item_id":dataOfItem.item_id
   
  });
  
  let config = {
    method: 'PUT',
    maxBodyLength: Infinity,
    url: 'https://aipse.in/api/EditItemExerciseHandler',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
 await axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data),'------edit response');
  })
  .catch((error) => {
    console.log(error);
  });



}

  


  return (
    <div>
      <Button
          id="create-poa-button"
          variant="contained"
          onClick={handleClickOpen}
          style={{
            float: 'right',
            marginLeft: '1rem',
            borderRadius: '50%',
            padding: '0.2rem',
            marginTop: '-0.5rem',
            position: 'fixed',
            zIndex: '1',
            bottom: 40,
            right: 40,
          }}
          sx={{
            ':hover': {
              bgcolor: "#F0E7F5", // theme.palette.primary.main
              color: '#9B59B6',
              border: '#ffd796'
            },
            ':active': {
              bgcolor: "#F0E7F5",
              color: "#9B59B6"
            },
            bgcolor: '#F0E7F5',
            color: "#9B59B6",
            border: 'none'
          }} 
          title="Create POA"
        >
          {/* style={{ float: "right", marginLeft:100, borderRadius: "50%", padding: "0.2rem", position:'relative', zIndex: '-1',marginRight:10,marginTop:15}} */}
          <span style={{ fontSize: '2rem' }}>+</span>
        </Button>
     
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        
        <ButtonBase sx={{ width: "auto", height: "auto" }}>
                <img src={Plusimage} alt="nova logo" style={{ height: "70", width: "70px" ,  alignContent:"flex-end"}} />
          </ButtonBase>
        
      </Button> */}
      <Dialog
        fullScreen
        open={open}

        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' ,backgroundColor:"purple" ,color:"white"}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Create Exercise Items
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        
           
        <DialogContent sx={{ background: "#f9fafb" }}>
         {/* <DialogContentText>
           
  </DialogContentText> */}

          <Card style={{padding:"20px 5px", margin:"0px auto"}}>
         {/* < ArrowBackIosIcon/>  */}
            
            
                <CardContent>
                    <Grid container flexDirection="column" spacing={1}>
                        <Grid xs={12}   mb={2}  sx={{borderColor:"purple"}} Item>
                            <TextField onChange={(e)=>setExercise({...exercise,item_name:e?.target?.value})} value={exercise.item_name} label="Name" sx={{borderColor:"purple"}} variant='outlined' fullWidth/>
                        </Grid>

                    
                    
                        {/* <Grid xs={12}  mb={2}   variant='outlined' 
                         Item>
                            <TextField label="Choose Exercise Image"  fullWidth/>
                        </Grid>
                       
                            <Grid mb={2}   Item>
                               <Grid container flexDirection="row" justifyContent="space-between">
                                    <Grid  md={6} lg={6}    item>
                                        <TextField  label="count"  variant='outlined'  fullWidth/></Grid>
                                    <Grid md={5.5} lg={5.5} xs={5.5}  item > 
                                    
                                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sets</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sets}
          label="Set"
          onChange={handleChanges}
        >
          <MenuItem value={10}>Teniu</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                                    
                                    
                                    </Grid>
                              
                                 </Grid>  
                                        
                            </Grid> */}

                                

<div id="project-input-tag-div" style={{ display: 'flex' ,marginTop:"10px" , marginBottom:"10px"}}>
                  <label id="input-tag-project-multi-drawer" for="inputTag" style={{ cursor: 'pointer', display: 'flex' }}>
                    <Iconify id="camera-icon" icon={'mdi:camera'} sx={{ width: 25, height: 25, ml: 2, color: '#ff7424' }} />
                    &nbsp;
                    <input
                      style={{ display: 'none' }}
                      accept="image/png, image/gif, image/jpeg"
                      id="inputTag"
                      type="file"
                      onChange={(e) => {
                        convertImage(e);
                      }}
                    />
                  </label>
                
                  <br />
         {/* <div>
           <Button
           id="upload-btn"
           onClick={()=>UploadImages(1)}
           
           sx={{
             '&:hover': {
               backgroundColor: '#ffd796',
             },
             color: '#ff7424',
             backgroundColor: '#ffd796',
             marginLeft: '10px',
           }}
         >
           Upload   
         </Button></div> */}

         {images?.map((itm,index) => {
                   
                   return <div style={{ display: 'flex', margin: '1rem' }}>
                     <img src={itm} style={{ height: '50px', width: '70px',marginTop:20 }} />
                     <Iconify
                             onClick={() => {
                               deleteImage(index);
                             }}
                             icon={'typcn:delete'}
                             sx={{ width: 16, height: 16, ml: 1, color: 'red' }}
                           />
                     </div>
                   
         })}
                        </div>
                                

                        
                        <Grid xs={12}   mb={2}  
                         Item>
                            <TextField value={exercise.calories} onChange={(e)=>setExercise({...exercise,calories:e?.target?.value})} label="Calories" variant='outlined' fullWidth/>
                        </Grid>
                        <Grid mb={2} xs={12}     Item>
                                      
                        
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Type Of Exercise</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Type Of Exercise"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten123</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
           
                        

                                            
                                   
                        </Grid> 


                        <Grid xs={12}   mb={2}    Item>
                            <TextField label="Description"   value={exercise.description} onChange={(e)=>setExercise({...exercise,description:e?.target?.value})} variant='outlined' multiline rows={5} fullWidth/>
                        </Grid>

                    </Grid>
                   
                   
                </CardContent>
               
                    
               
            </Card>
          </DialogContent>
            
           
        
       
      </Dialog>
    </div>
  );
})

export default  FullScreenDialog;
