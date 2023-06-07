import { Helmet } from 'react-helmet-async';
import axios from 'axios'
import {useEffect,useState} from 'react'
// @mui
// import { Link as RouterLink } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Link, Container, IconButton,Card,Typography, Divider, InputAdornment,Stack, Button, Grid,TextField } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Nova from "../assets/nova.svg";
import Alert from '@mui/material/Alert';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
import Snackbar from '@mui/material/Snackbar';
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));


const StyledSection = styled('div')(({ theme }) => ({
  width: 'auto',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  // const mdUp = useResponsive('up', 'md');
  
  // useEffect(() => {
  
  //   axios.get("http: //192.168.1.207:8081/searchUser?name=&page=1&count=7").then(res=>{
  //     console.log()
  //   })
  
  // }, [])
// alert usage here
  const [showAlert, setShowAlert] = useState(false);

  const handleSuccess = () => {
    setShowAlert(true);
  };

  const [enterFields, setEnterFields] = useState(false);

  const handleEmpty = () => {
    setEnterFields(true);
  };


  const [errorAlert, setErrorAlert] = useState(false);

  const handleError = () => {
    setErrorAlert(true);
  };



  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

 

  const handleClick = () => {
    navigate('/dashboard/', { replace: true });
  };

  // const [item,setItem]=useState()
  const [response, setResponse] = useState()
  const [formValue, setFormValue] = useState({ email_id: " ", password: " " })
  // let navigate = useNavigate();
  // localStorage.setItem('Username', 'response?.data?.Username')
  const loginUser = () => {
    console.log(Object.values(formValue),"hellooo")
    if(Object.values(formValue).includes("")){
        // alert("Enter valid data")
        handleEmpty()
    }
   else{
    axios.post(`https://aipse.in/api/login`, formValue)
    .then(function (response) {

      console.log(response?.data, "responseeeeeee------")
      console.log(formValue,"---form value checking--");
     
      if (response?.data?.Status) {  
        
        localStorage.setItem('Username', response?.data?.Username)
       localStorage.setItem('userId', response?.data?.['User ID'])
       handleSuccess()
        console.log('Username', response?.data)
        setTimeout(() => {
          
          navigate('/dashboard', { replace: true });
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

  
    return ( 
      <>
  <Helmet>
    <title> Login | NPWC </title>
  </Helmet>
  <StyledRoot>
    
    <Container maxWidth="sm">
      <StyledContent>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item variant="h2">
            Hi, Welcome Back
          </Grid>
          <Grid item>
            <img
              src={Nova}
              alt="nova logo"
              style={{ height: "auto", width: "auto" }}
            />
          </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>

        <Typography variant="body2" sx={{ mb: 5 }}>
          Don’ t have an account ? 
          <Link variant="subtitle2"  to="/registeruser"  component={RouterLink} sx={{textDecoration:'none'}} > Get started </Link>
        </Typography>

        <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={(e) => { setFormValue({ ...formValue, email_id: e.target.value }) }} />

        <TextField
         onChange={(e) => { console.log(e.target.value), setFormValue({ ...formValue, password: e.target.value }) }}
          name="password"
          label="Password"
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
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        
        
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>
      <Card >
      {/* to="/dashboard" component={RouterLink} sx={{textDecoration:'none'}}  ^ onPress={loginUser} */}
      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={loginUser} > 
        Login
      </LoadingButton>
      
      <Snackbar
        open={enterFields}
        onClose={() =>setEnterFields(false) }
        autoHideDuration={1000}
        >
        <Alert severity="warning"> Email and password can`t Empty </Alert>  
         </Snackbar>

    <Snackbar
        open={showAlert}
        onClose={() =>setShowAlert(false) }
        autoHideDuration={1000}
        >
        <Alert severity="success"> Login successfull !</Alert>  
         </Snackbar>
      <Snackbar
        open={errorAlert}
        onClose={() => setErrorAlert(false)}
       
        autoHideDuration={1000}
        >
        <Alert  severity="error">Password doesn`t match with email !</Alert>  
         </Snackbar>


      </Card>

       
      </StyledContent>
    </Container>
  </StyledRoot>
</>

    );
}