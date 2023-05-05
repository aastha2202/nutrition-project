import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';


import {CardContent, Card, Stack, Grid, TextField ,MenuItem,InputLabel,NativeSelect,FormControl} from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
const currencies = [
    {
      value: 'USD',
      label: 'helllooo',
    },
    {
      value: 'EUR',
      label: 'carbohydrates',
    },
    {
      value: 'BTC',
      label: 'Protein',
    },
    {
      value: 'JPY',
      label: 'Fats',
    },
  ];

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <div>
        
    
      <Button variant="contained" style={{
        float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem",
        position: 'fixed', zIndex: '1', bottom: 40, right: 40
      }}
     onClick={handleClickOpen} 
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
      }} >


        <span style={{ fontSize: "2rem" }}>+</span>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar color="nutrition" sx={{ position: 'relative'}}>
          <Toolbar>
            <IconButton
              edge="start"
              style={{color:"white"}}
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }} variant="h6" component="div">
              Create Diet Plan
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {/* <Card style={{padding:"20px 5px", margin:"0px"}}><CardContent> */}
        <Stack mb={3} mt={3} marginLeft={3}>
          <Typography  style={{display: 'inline-block',marginRight:"10", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} variant='h5' gutterLeft >Select Interval </Typography>
          </Stack>


        <Stack marginLeft={3}> <TextField
          id="outlined-select-currency"
          select
          label="Select Your Interval"
          defaultValue="EUR"
        >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}</TextField></Stack>

          
<Stack mt={2} marginLeft={3} id="date-picker-stack">
<Grid mb={4}   Item>  
   <Grid container flexDirection="row">
      <Grid item >
       <CardContent>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} fullWidth>
        <DatePicker label="Start Date"  fullWidth/>
      </DemoContainer>
    </LocalizationProvider>
    </CardContent>
       </Grid>


      <Grid item >
         <CardContent>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="End Date"  fullWidth/>
      </DemoContainer>
    </LocalizationProvider>
    </CardContent>
     </Grid></Grid> </Grid>
     </Stack>
      {/* <Stack marginLeft={3} marginRight={3}>
      <Grid mb={2}   Item>
                               <Grid container flexDirection="row" justifyContent="space-between">
                                    
                                    <Grid md={4} lg={4} xs={4}   item > 
                                    
                                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Grams</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                                    
                                    
                                    </Grid>
                                    <Grid  md={5} lg={5} xs={5}   item>
                                        <TextField   label="Weight" variant='outlined'  fullWidth/></Grid>
                              
                                 </Grid> 
                                 <Grid md={1} lg={1} xs={1}   item > <IconButton
            //   edge="start"
            //   style={{color:"white"}}
            //   onClick={handleClose}
            //   aria-label="close"
            >
              <DeleteIcon />
            </IconButton></Grid> 
                                        
                            </Grid></Stack> */}

{/* <Stack>
<Grid mb={4}   Item><Card> <CardContent>
                               <Grid container flexDirection="row"  >
                               <Grid item> 
                                    
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl> </Grid>
      <Grid item> 
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Age</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> </Grid>
      <Grid item> 
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl> </Grid></Grid></CardContent></Card></Grid> </Stack> */}
    
      
            <Stack marginLeft={3}   marginRight={2}>
            <Grid mb={4}   Item><Card> <CardContent>
                               <Grid container flexDirection="row" justifyContent="space-between" >
                                    
                                    <Grid item xs={4}  md={5} lg={5}> 
                                   
        {/* <TextField
          id="outlined-select-currency"
          select
          label="Select Your Interval"
          defaultValue="EUR"
        >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}</TextField> */}
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Your Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Your Category"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
          </Grid>
                                          
      <Grid xs={5}  md={5} lg={5} marginRight={1} item>
                                              
                                           
                                        <TextField label="Weight" variant='outlined'  fullWidth/>
                              
                                  </Grid>

                <Grid xs={2} md={1} lg={1}  item>  <IconButton
            //   edge="start"
            //   style={{color:"white"}}
            //   onClick={handleClose}
            //   aria-label="close"
            >
              <DeleteIcon />
            </IconButton></Grid>
                              
                </Grid></CardContent> </Card>   </Grid></Stack>

      <Button variant="contained" style={{
        float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem",
        position: 'fixed', zIndex: '1', bottom: 40, right: 40
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
      }} >


        <span style={{ fontSize: "2rem" }}>+</span>
      </Button>
            {/* </ CardContent></Card> */}
      </Dialog>
    </div>
  );
}
