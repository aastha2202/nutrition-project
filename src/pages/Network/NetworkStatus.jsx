import React, { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';

import Snackbar from '@mui/material/Snackbar';

import MuiAlert from '@mui/material/Alert';

import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {

    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

  });

const NetworkStatus = ({isOnlineFun,props}) => {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  console.log(navigator.onLine,'>>>>>')

  const [showMessage, setShowMessage] = useState(false);

  const [open, setOpen] = React.useState(false);

const navigate=useNavigate()

  useEffect(() => {

    const handleOnline = () => {

      setIsOnline(true);

      setShowMessage(true);

      setOpen(true);

      isOnlineFun(true)

    };




    const handleOffline = () => {

      setIsOnline(false);

      setShowMessage(true);

      setOpen(true);

      isOnlineFun(false)

      ///navigate('/dashboardadmin/adminuser',{state:'anil'})

    };




    window.addEventListener('online', handleOnline);

    window.addEventListener('offline', handleOffline);




    return () => {

      window.removeEventListener('online', handleOnline);

      window.removeEventListener('offline', handleOffline);

    };

  }, []);




  useEffect(() => {

    let timeoutId;




    if (showMessage) {

      timeoutId = setTimeout(() => {

        setShowMessage(false);

      }, 8000);

    }




    return () => clearTimeout(timeoutId);

  }, [showMessage]);




  const handleClose = (event, reason) => {

    if (reason === 'clickaway') {

      return;

    }

   

        setOpen(false);

   

   

  };




  return (

    <div>

      {showMessage && (

        <>{isOnline ?

           

            <Snackbar sx={{ width: '95%' }} open={open} autoHideDuration={1000000} onClose={handleClose}>

            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>

            Connected To Network

            </Alert>

          </Snackbar>

            :  <Snackbar sx={{ width: '95%' }} open={open} autoHideDuration={1000000}  onClose={handleClose}>

            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>

             Network Got Disconnected

           

           

            </Alert>

          </Snackbar>

           

           

            }</>

      )}

    </div>

  );

};




export default NetworkStatus;