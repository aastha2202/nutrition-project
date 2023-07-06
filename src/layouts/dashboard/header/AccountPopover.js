import { useState,useEffect } from 'react';
import axios from 'axios';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
// mocks_
import account from '../../../_mock/account';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import index from "../nav/index";
import Nav from "../nav/index";

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  // {
  //   label: 'Home',
  //   icon: 'eva:home-fill',
  // },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
  },
  // {
  //   label: 'Settings',
  //   icon: 'eva:settings-2-fill',
  // },
];

// ----------------------------------------------------------------------

export default function AccountPopover(props) {
  const [open, setOpen] = useState(null);

  // const userinfo = props.data;
  // console.log(userinfo);

  const [userData,setUserData]= useState([]);
  useEffect(() => {
    
    apiCall()
  
}, [])
  
   const apiCall = async()=>{
    let uid = localStorage.getItem('userId')
    console.log(uid,"---popover in profile page---")
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

console.log(userData,"=====popover page user details==")
 


const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const navigate = useNavigate();

 

  const handleClick = () => {
     localStorage.removeItem('Username')
     localStorage.removeItem('userId')
    
    navigate('/login', { replace: true });
    handleClose()
  };

  const handleRegister = () => {
    
    navigate('/dashboard/profile', { replace: true });
    handleClose()
  };
  

  const imageurl= "https://novapwc.com/";
  console.log(userData?.profile_image,"---anil---")
  return (
    
    <div style={{float:"right", }}>
    
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          paddingRight:"10px",
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              // position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        {/* <Avatar src={account.photoURL} alt="photoURL" /> */}
        <Avatar src={imageurl+userData[0]?.profile_image} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        {userData?.map(item=>{
          return(
          <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {/* {account.displayName} */}
            {item.user_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {/* {account.email} */}
            {item.email_id}
          </Typography>
        </Box>
        
          )
        })}
        {/* <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box> */}

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleRegister}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleClick} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>

      
    </div>
  );
}
