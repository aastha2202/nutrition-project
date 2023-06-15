// ----------------------------------------------------------------------
import React from "react";
import { useState,useEffect } from "react";
// const [username, setusername] = useState('')
// useEffect(() => {
   
//   setValues()
  


// }, [])


// const setValues = async () => {
// let username =  localStorage.getItem('Username')
// await setusername(username)
// }


let username =  localStorage.getItem('Username')
console.log(username)
const account = {
  displayName: username,
  email: 'demo@gmail.com',
  photoURL: '/assets/images/avatars/avatar_default.jpg',
};

export default account;
