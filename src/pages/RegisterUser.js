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
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email_id'),
      password: data.get('password'),
      
      patientid: data.get('patient-id')
      
    });

    console.log(gender); 
  };

// To update the state of gender
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };


  //API integration
  const [response, setResponse] = useState()
    const [formValue, setFormValue] = useState({
        "user_name": "",
        "password": "",
        "role": "",
        "gender": "male",
        "mobile_number": "",
        "email_id": "",
        "address": "",
        "profile_image": ""
    })

    const registerUser = () => {
        axios.post(`https://aipse.in/api/registerUser`, formValue)
            .then(function (response) {
                console.log(response?.data, "responseeeeeee")
                navigation.navigate('Login')
            })
            .catch(function (error) {
                console.log(error);
            });
    }


  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/>
          <Typography component="h1" variant="h5">
            Create User
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
                  onChangeText={(e) => { setFormValue({ ...formValue,  user_name: e.target.value }) }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="password"
                  name="password"
                  required
                  fullWidth
                  id="password"
                  label="password"
                  autoFocus
                  onChangeText={(e) => { setFormValue({ ...formValue,  password: e.target.value }) }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email_id"
                  label="Email / Mobile No"
                  name="email_id"
                  autoComplete="email_id"
                  onChangeText={(e) => { setFormValue({ ...formValue, email_id: e.target.value }) }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="role"
                  name="role"
                  required
                  fullWidth
                  id="role"
                  label="role"
                  autoFocus
                  onChangeText={(e) => { setFormValue({ ...formValue,  role: e.target.value }) }}
                />
              </Grid>
             
              <Grid item xs={12} container flexDirection={"row"} spacing={"4"}>
              
                <FormControl fullWidth>
                  <InputLabel required>Gender</InputLabel>
                  <Select
                  labelId="gender"
                  id="gender"
                  label="gender"
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
                  required
                  fullWidth
                  id="patient-id"
                  label="Patient Id"
                  name="patient-id"
                  autoComplete="patient-id"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="address"
                  required
                  fullWidth
                  id="address"
                  label="address"
                  autoFocus
                  
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
              sx={{ mt: 3, mb: 2 }}
              // onPress={registerUser}

            >
              Submit
            </Button>

          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}