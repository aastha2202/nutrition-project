// ----------------------------------------------------------------------
// import React from "react";
import { React,useState,useEffect } from "react";
// import { useState,useEffect } from 'react';
import axios from 'axios';
// const [username, setusername] = useState('')
// useEffect(() => {
   
//   setValues()
  


// }, [])


// const setValues = async () => {
// let username =  localStorage.getItem('Username')
// await setusername(username)
// }
// api integration
// const [userData,setUserData]= useState([]);
//   useEffect(() => {
    
//     apiCall()
  
// }, [])
  
//    const apiCall = async()=>{
//     let uid = localStorage.getItem('userId')
//     console.log(uid,"---popover in profile page---")
//     let config = {
//         method: 'get',
//         maxBodyLength: Infinity,
//         url: `https://novapwc.com/api/userDetails?user_id=${uid}`,
//         headers: { }
//       };
      
//      axios.request(config)
//       .then((response) => {
//         setUserData(response.data.data)
//         console.log(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//    }

// console.log(userData,"=====accccount  ----- page user details==")
   
// const [userData,setUserData]= useState([]);
//   useEffect(() => {
    
//     apiCall()
  
// }, [])
  
//    const apiCall = async()=>{
//     let uid = localStorage.getItem('userId')
//     console.log(uid,"---popover in profile-------- page---")
//     let config = {
//         method: 'get',
//         maxBodyLength: Infinity,
//         url: `https://novapwc.com/api/userDetails?user_id=${uid}`,
//         headers: { }
//       };
      
//      axios.request(config)
//       .then((response) => {
//         setUserData(response.data.data)
//         console.log(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//    }

// console.log(userData,"----account.js page user details==")
 

// let username =  localStorage.getItem('Username')
// console.log(username)
// const account = {
//   displayName: username,
//   email: 'demo@gmail.com',
//   photoURL: '/assets/images/avatars/avatar_default.jpg',
// };

// export default account;

export default function account(){

  let username =  localStorage.getItem('Username')
console.log(username)
const account = {
  displayName: username,
  email: 'demo@gmail.com',
  photoURL: '/assets/images/avatars/avatar_default.jpg',
};

  const [userData,setUserData]= useState([]);
  useEffect(() => {
    
    apiCall()
  
}, [])
  
   const apiCall = async()=>{
    let uid = localStorage.getItem('userId')
    console.log(uid,"---popover in profile-------- page---")
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://novapwc.com/api/userDetails?user_id=${uid}`,
        headers: { }
      };
      
     axios.request(config)
      .then((response) => {
        setUserData(response.data.data)
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
   }

console.log(userData,"----account.js page user details=  2  in 1---");

  return(
    hh
  );
  
}
