import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {Button, ButtonBase, CardContent, Card , DialogContent, DialogContentText,Typography, Grid, TextField ,MenuItem,InputLabel,NativeSelect,FormControl} from '@mui/material';
// import  ButtonBase  from '@mui/material';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState, useEffect,useRef,forwardRef,useImperativeHandle} from 'react';
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


const FullScreenDialog=forwardRef((props,ref)=>{
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };



  const [grams, setgrams] = React.useState('');

  const handleChanges = (event) => {
    setgrams(event.target.value);
  };

  useImperativeHandle(ref,()=>({
    handleClickOpen () {
     console.log("handle click");
     setOpen(true);
   }
 }))


 const [createDiet,setCreateDiet]=useState(
  {
    "item_name": "",
    "time_or_weight": "",
    "units": "",
    "calories":"",
    "category_id": "",
    "description": "",
    "item_image": "",
    "sets": "",
    "counts": "",
    "type": ""


  }

 )
 const handleChange=(event=>{
  console.log(event.target.name);
  console.log(event.target.value);
 })


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
              Create Diet Items
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
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
                        <Grid xs={12}   mb={2}  style={{ borderRadius:"10px"}}
                        Item>
                            <TextField onChange={handleChange} label=" Item Name"  name="item_name" variant='outlined' fullWidth/>
                        </Grid>

                    
                    
                        <Grid xs={12}  mb={2}  
                         Item>
                            <TextField onChange={handleChange} name="item_image" label="Choose Diet Image" variant='outlined' fullWidth/>
                        </Grid>
                       
                            <Grid mb={2}    Item>
                               <Grid container flexDirection="row"  justifyContent="space-between">
                                    <Grid  md={6} lg={6} xs={6}    item>
                                        <TextField   label="Weight" variant='outlined'  fullWidth/></Grid>
                                    <Grid md={5.5} lg={5.5} xs={5.5}   item > 
                                    
                                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Grams</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={grams}
          label="Grams"
          onChange={handleChanges}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                                    
                                    
                                    </Grid>
                              
                                 </Grid>  
                                        
                            </Grid>

                                
                                

                        
                        <Grid xs={12}   mb={2}  
                         Item>
                            <TextField label="Calories" variant='outlined' fullWidth/>
                        </Grid>
                        <Grid mb={2} xs={12}    style={{ borderRadius:"10px"}} Item>
                                      
                        
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
           
                        

                                            
                                   
                        </Grid> 


                        <Grid xs={12}   mb={2}  
                         Item>
                            <TextField label="Description" variant='outlined' multiline rows={5} fullWidth/>
                        </Grid>

                    </Grid>
                   
                   
                </CardContent>
               
                    
               
            </Card>
          </DialogContent>
            
           
        
       
      </Dialog>
    </div>
  );
})

export default   FullScreenDialog
