import React, { useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../assets/icons/Frame.svg';
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

    <SafeAreaView style={styles.container}>

      <View>

        <View style={styles.logovw}>
          <Logo style={styles.logop} />
        </View>

        <View flexDirection={'column'}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#8E9AA7"
            placeholder="Email ID"
            keyboardType="default"
            onChangeText={(e) => { setFormValue({ ...formValue, email_id: e }) }}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#8E9AA7"
            placeholder="Password"
            keyboardType="default"
            onChangeText={(e) => { setFormValue({ ...formValue, password: e }) }}
          />
        </View>


        <Text style={{alignItems:"center"}}>{response}</Text>

        <TouchableOpacity style={styles.buttonvw} onPress={loginUser}>
          <Text allowFontScaling={false} style={styles.textApple}>
            Login
          </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
          <View style={{ top: 120, alignSelf: "center" }}>
            <Text style={{fontSize:20}}> Create an account .</Text>
          </View>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#fff"
  },
  logovw: {
    alignItems: 'center',
    marginBottom: 40
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    top: '-16%',
    color: '#112866',
    borderColor: "#C8CEDD",
    fontFamily: "Inter-Regular",
    fontSize: 14,
    backgroundColor: '#fff'
  },
  buttonvw: {
    width: 328,
    height: 44,
    // top: 50,
    backgroundColor: "#702963",
    borderRadius: 12,
    alignSelf: "center",
    borderWidth: 2.6,
    borderColor: "#F6F8FB",
  },
  textApple: {
    fontFamily: "Inter-Regular",
    fontWeight: "600",
    fontSize: 14,
    top: 11,
    color: "#fff",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default Login;