// ----------------------------------------------------------------------
import React from "react";
// import { useState,useEffect } from "react";
// const [username, setusername] = useState('')
// useEffect(() => {
   
//   setValues()
  


// }, [])


// const setValues = async () => {
// let uname =  localStorage.getItem('Username')
// await setusername(uname)
// }


let uname =  localStorage.getItem('Username')
console.log(uname)
const account = {
  displayName: uname,
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatars/avatar_default.jpg',
};

export default account;
