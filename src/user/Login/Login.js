import React, { useState} from 'react';
import {Typography} from '@mui/material';
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import Logo from '../../assets/icons/Frame.svg';
import axios from 'axios'
// import { AsyncStorage } from 'react-native-async-storage/async-storage'

const Login = ({ navigation }) => {

  const [response, setResponse] = useState()
  const [formValue, setFormValue] = useState({ email_id: "", password: "" })

  const loginUser = () => {
    axios.post(`https://aipse.in/api/login`, formValue)
      .then(function (response) {
        console.log(response?.data, "responseeeeeee")
        if (response?.data?.status) {  
          // AsyncStorage.setItem('Username', response?.data?.Username)
          navigation.navigate('HomeScreen')
        } 
        else {
          setResponse(response?.data?.Message)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (

    // <div style={styles.container}>

    //   <div>

    //     <div style={styles.logovw}>
    //       <Logo style={styles.logop} />
    //     </div>

    //     <div flexDirection={'column'}>
    //       <TextField
    //         style={styles.input}
    //         placeholderTextColor="#8E9AA7"
    //         placeholder="Email ID"
    //         keyboardType="default"
    //         onChangeText={(e) => { setFormValue({ ...formValue, email_id: e }) }}
    //       />
    //       <TextField
    //         style={styles.input}
    //         placeholderTextColor="#8E9AA7"
    //         placeholder="Password"
    //         keyboardType="default"
    //         onChangeText={(e) => { setFormValue({ ...formValue, password: e }) }}
    //       />
    //     </div>


    //     <span style={{alignItems:"center"}}>{response}</span>

    //     <div style={styles.buttonvw} onPress={loginUser}>
    //       <span allowFontScaling={false} style={styles.textApple}>
    //         Login
    //       </span>
    //     </div>


    //     <div onPress={()=>{navigation.navigate('Register')}}>
    //       <div style={{ top: 120, alignSelf: "center" }}>
    //         <span style={{fontSize:20}}> Create an account .</span>
    //       </div>
    //     </div>

    //   </div>

    // </div>
    <h1>login page</h1>
  )
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: "#fff"
//   },
//   logovw: {
//     alignItems: 'center',
//     marginBottom: 40
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 8,
//     top: '-16%',
//     color: '#112866',
//     borderColor: "#C8CEDD",
//     fontFamily: "Inter-Regular",
//     fontSize: 14,
//     backgroundColor: '#fff'
//   },
//   buttonvw: {
//     width: 328,
//     height: 44,
//     // top: 50,
//     backgroundColor: "#702963",
//     borderRadius: 12,
//     alignSelf: "center",
//     borderWidth: 2.6,
//     borderColor: "#F6F8FB",
//   },
//   textApple: {
//     fontFamily: "Inter-Regular",
//     fontWeight: "600",
//     fontSize: 14,
//     top: 11,
//     color: "#fff",
//     justifyContent: "center",
//     textAlign: "center",
//   },
// });

export default Login;