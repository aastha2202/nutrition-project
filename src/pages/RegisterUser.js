import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState,useEffect,useRef } from 'react';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
 import Iconify from 'src/components/iconify/Iconify';
 import {   IconButton, InputAdornment, } from '@mui/material';
 import { Icon, InlineIcon } from '@iconify/react';
// import plusIcon from '@iconify-icons/mdi/plus';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import NetworkStatus from './Network/NetworkStatus';

function Copyright(props) {
  return (
    
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const createuser={
  // color:"#112866",
  fontFamily:"Inter-SemiBold",

}
const alreadyaccount={
  // color:"#112866",
  fontFamily:"Inter-SemiBold",

}

export default function SignUp() {

  const [formValid, setFormValid] = useState(true);

  const [image, setImage] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();


   
    // console.log({
    //   email: data.get('email_id'),
    //   password: data.get('password'),
      
    //   patientid: data.get('patient-id')
      
    // });
    
  };

  // const handleChanges = (event) => {
  //   const { name, value } = event.target;
  //   setFormValue((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };

// validation 





const [error, setError] = useState(false);
const [errorPassword, setErrorPassword] = useState(false);
// To update the state of gender
  const [gender, setGender] = React.useState('');
  const [images,setImages]=useState("");
  const handleChange = (event) => {
    setGender(event.target.value);
    setFormValid(true);
  };
  // alerts
  const [showAlert, setShowAlert] = useState(false);

  const handleSuccess = () => {
    setShowAlert(true);
  };

  const [errorAlert, setErrorAlert] = useState(false);

  const handleError = () => {
    setErrorAlert(true);
  };

  const [errorMobile, setErrorMobile] = useState(false);

  const Errornumber = () => {
    setErrorMobile(true);
  };

  const [enterFields, setEnterFields] = useState(false);
  useEffect (()=>{
    if(images){
      console.log()
    setFormValue({ ...formValue,  profile_image: images?.toString().slice(images.toString()[22]===','?23:22,) }) 
    }
  },[images])
  const handleEmpty = () => {
    setEnterFields(true);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login', { replace: true });
  };

  //API integration
  const [response, setResponse] = useState()
  // const [email,setEmail]=useState({})
    const [formValue, setFormValue] = useState({
        "user_name": "",
        "password": "",
        "role": "user",
        // "gender": "",
        "mobile_number": "",
        "email_id": "",
        // "address": "",
        "fcm_token":"clxA5TEFTJy8NYn-JNJiLG:APA91bFi9xZ9WYiQ5wI4gS6rIjm0mRTaYvNuhKk2yQhz0ECeRXnYL31cwz7qxTGoPtu_rv-dhTAytiaj6bIIzDPQ1HfPS6ImErW94ptzf9Xc2q3CGV5LwrP_MfUFPpTc2pCq7kbBQzXi",
        // "profile_image": ""
    }) 


  //   const [errors, setErrors] = useState({
  //     user_name: false,
  //     password: false,
  //     email_id: false,
  //     mobile_number: false,
  //   });

    const registerUser = () => {
       console.log("register user calling---") 
      let validation = Object.values(formValue)
      console.log(typeof Object?.mobile_number,"-----" ,Object?.mobile_number,Object)
     // con
      if (Object?.mobile_number?.length < 10){
        alert("mobile number must be 10 characters ")
       }
      if(errorPassword){
        alert("error password")
     }
     if(error || Object?.email_id==="" ) {
      alert("valid mail is required")
     }

     

    if( validation.includes("")){
                  // alert("Enter valid data")
                  handleEmpty()
              }

              
      else{
                let val=formValue
                val.profile_image=images[0]?.toString().slice(images.toString()[22]===','?23:22,)
                console.log(images,"---image--testing")
                setFormValue(val)
                axios.post(`https://novapwc.com/api/registerUser`, formValue)
                .then(function (response) {
                console.log(response?.data, "responseeeeeee")
                if (response?.data?.Status) {  
                 handleSuccess()
                  console.log('Username', response?.data)
                  setTimeout(() => {
                    
                    navigate('/login', { replace: true });
                  }, 1000);
                  
                  
        
                } 
                else {
                  setResponse(response?.data?.Message)
                  handleError()
                }
              })
              .catch(function (error) {
                 handleError()
                  console.log(error);
                 
              });

              }
        

               
                
 
                
               
            
    }


    // photo inetgration
    // const [images , setImages]=useState()
    // const [base64Data, setBase64Data]=useState()
    
    const [viewImage,setViewImage]=React.useState(false);
    function getBase64(file, callback) {
    
      const reader = new FileReader();
    
      reader.addEventListener('load', () => callback(reader.result));
    
      reader.readAsDataURL(file);
    }


    const convertImage = async(e) => {
      console.log("this is calleddddfdsfs",e.target.files[0])
      // data.append('emp_id', userid);
      // data.append('file', e.target.files[0]);
      // setImagePath([...imagePath, e.target.files[0]])
      const imageData = URL.createObjectURL(e.target.files[0]);
      //console.log(imageData, "files")
       getBase64(e.target.files[0], function (base64Data) {
        console.log('getBase64')
        setImages( [base64Data])
        
        setViewImage(true);
        // console.log(images,'----images----');
        console.log(base64Data,'base64Data')
      //   setViewImage(true)
      
    });
     
    console.log("upload method is calling ",images[0]?.toString().slice(22,))
  //console.log(images[0],'slicing-----',images[0].toString().slice(22,),'----image to upload----');
  // diet.item_image=images[0]?.toString().slice(22,);
  
  // setFormData(formData=>({
  //   ...formData,
  //   [item_image]:images[0]?.toString().slice(22,)
  // }))
   setImages([])
  setReload(!reload);
  
  //alert("Photo Uploaded Successfully..") 
}
 console.log(images,'----images----');
const deleteImage = (index) => {
  images.splice(index, 1);
  setImages([...images]);
};
// photo 
const handleImageSelection = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    setImage(reader.result);
  };
  reader.readAsDataURL(file);
};


  return (
    <ThemeProvider theme={theme}>
      <NetworkStatus/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/> */}

        
          <div id="project-input-tag-div" style={{ display: 'flex' ,marginTop:"10px" , marginBottom:"10px"}}>
                  <label id="input-tag-project-multi-drawer" for="inputTag" style={{ cursor: 'pointer', display: 'flex' }}>
                  <Avatar
                       sx={{ size:"200px" ,width:"100px",height:"100px"}}
                       alt="Remy Sharp"
                       src="/broken-image.jpg">
                       <Iconify id="camera-icon" icon={'mdi:camera'} onChange={handleImageSelection} sx={{ width: 50, height: 150, ml: 1,  color: 'purple' }} />
                      
                       {images && <img src={images} alt="Uploaded Image" />}

                    {/* <Iconify id="camera-icon" icon={'mdi:camera'} sx={{ width: 25, height: 25, ml: 2,  color: '#ff7424' }} /> */}
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
                      </Avatar>
                  </label>
                
                  <br />
                
        
        </div>



          <Typography component="h1" style={createuser} variant="h5">
            Register User
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="user_name"
                  required
                  fullWidth
                  id="user_name"
                  label="User Name"
                  autoFocus
                  onChange={(e) => { setFormValue({ ...formValue,  user_name: e.target.value }); setFormValid(true); }}
                //   onChange={handleChanges}
                //   error={errors.userName}
                //   value={formValue.userName}
                //  helperText={errors.userName && 'User Name is required'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="password"
                  name="password"
                  type="password"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  autoFocus
                  value={formValue?.password}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end"> 
                          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={errorPassword}
                  helperText={
                    errorPassword &&
                    'Password should contain at least one special character, number, uppercase letter, and lowercase letter.'
                  }

                  onChange={(e) => {

                    const specialCharRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
                    const numberRegex = /[0-9]/;
                    const uppercaseRegex = /[A-Z]/;
                    const lowercaseRegex = /[a-z]/;

                   // Validate the password
                  const isPasswordValid =
                  specialCharRegex.test(formValue?.password) &&
                  numberRegex.test(formValue?.password) &&
                  uppercaseRegex.test(formValue?.password) &&
                  lowercaseRegex.test(formValue?.password);

                     // Set error state based on validation result
                     setErrorPassword(!isPasswordValid);
                     setFormValue({ ...formValue,  password: e.target.value }) }}
                  // onChange={handleChanges}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email_id"
                  label="Email"
                  name="email_id"
                  autoComplete="email_id"
                  value={formValue?.email_id}

                  
                  error={error}
                  helperText={error && 'Please enter a valid email address.'}
                  onChange={(e) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    // Validating the email
                    const isEmailValid = emailRegex.test(formValue?.email_id);
                
                    // Set error state based on validation result
                   
                    setError(!isEmailValid);
                    setFormValue({ ...formValue, email_id: e.target.value }) 
                  
                  }}
                   
                />
              </Grid>
              
             
              <Grid item xs={12} container flexDirection={"row"} spacing={"4"}>
              
                <FormControl fullWidth>
                  <InputLabel required>Gender</InputLabel>
                  <Select
                  labelId="gender"
                  id="gender"
                  label="Gender"
                  value={gender}
                  onChange={handleChange}

                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="None">None</MenuItem>
                  </Select>
                </FormControl>
              
              
              </Grid>
              
            
              <Grid item xs={12}>
                <TextField
                  // required
                  fullWidth
                  id="mobile_number"
                  required
                  label="Mobile number"
                  type="number"
                  name="mobile_number"
                  autoComplete="mobile_number"
                  value={formValue?.mobile_number}
                  
                  onChange={(e) =>  { 
                    const sanitizedValue = e.target.value.replace(/\D/g, '');
                  // Limit input to 10 numbers
                  const truncatedValue = sanitizedValue.slice(0, 10);

                    
                    
                    //Errornumber()
                    setFormValue({ ...formValue, mobile_number:truncatedValue  });

                
                
               }}
                  // onChange={handleChanges}
                    // onChange={handleMobileNumberChange} 
                />
              </Grid>
              
              {/* <Grid item xs={12}>
              <Button
              variant="contained"
              component="label">
               Upload File
            <input
                 type="file"
                hidden
                        />
               </Button>
              </Grid> */}
              
              
              
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, }}
              // backgroundColor:"#F0E7F5", color:"black", fontFamily:"Inter-SemiBold"
              onClick={registerUser}
               
            >
              Create Account
            </Button>

            <Typography variant="body2" sx={{ mb: 5 }}>
            Already have an account ?
          <Link variant="subtitle2"  to="/login"  component={RouterLink} sx={{textDecoration:'none'}} > Click Here </Link>
        </Typography>
           
       <Snackbar
        open={showAlert}
        onClose={() =>  setShowAlert(false)}
        autoHideDuration={1000} >
         <Alert severity="success">register successfull!</Alert>
        </Snackbar>
        <Snackbar
        open={errorAlert}
        onClose={() =>  setErrorAlert(false)}        
        autoHideDuration={1000}
        >
         <Alert severity="error">register failed!</Alert>
        </Snackbar>

        <Snackbar
        open={enterFields}
        onClose={() =>setEnterFields(false) }
        autoHideDuration={1000}
        >
        <Alert severity="warning"> Some Required Fields are missing </Alert>  
         </Snackbar>


         <Snackbar
        open={errorMobile}
        onClose={() =>setErrorMobile(false) }
        autoHideDuration={1000}
        >
        <Alert severity="warning"> mobile number must be 10 </Alert>  
         </Snackbar>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}