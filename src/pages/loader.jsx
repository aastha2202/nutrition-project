// import React, { useState, useEffect } from 'react';
// import Nova from "../assets/nova.svg"
// import TitleLogo from "../assets/TitleLogo.svg"
// import { ThreeDots } from  'react-loader-spinner'
// const loader = () => {
//   const [imageSize, setImageSize] = useState(100); // Initial image size
//   const [imageUrl, setImageUrl] = useState(''); // Image URL

//   useEffect(() => {
//     // Function to generate a random image URL
//     const generateImageUrl = () => {
//       // Replace 'generateImageUrl' with your logic to generate the image URL
//       const newImageUrl = {TitleLogo};
//       setImageUrl(newImageUrl);
//     };

//     // Generate the initial image URL
//     generateImageUrl();
//     let ran=0.5;

//     // Interval for changing the image size every 3 seconds
//     const interval = setInterval(() => {
//       const newSize = Math.floor(ran* 100) + 50; // Random size between 50 and 150
//       //ran++;
//       if(ran>1.5)ran=0.5;
//       else ran=ran+0.5;
//       setImageSize(newSize);
//       generateImageUrl();
//     }, 500);

//     // Clean up the interval on component unmount
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const imageStaticSize={
//     height:"10px",
//     width:"10px"

//   }

//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
//       {/* {imageUrl && (
//         <img src={TitleLogo} alt="loading" style={{ height: `${imageSize}px`, width: `${imageSize}px` }}  />
      
//      )} */}
//      <h1>please wait a moment...</h1>
//      <ThreeDots 
// height="80" 
// width="80" 
// radius="9"
// // color="#4fa94d" 
// color="black"
// ariaLabel="three-dots-loading"
// wrapperStyle={{}}
// wrapperClassName=""
// visible={true}
//  />
//      {/* style={{ animation: "flicker 1s infinite" }} */}
//        {/* <img src={Nova} alt="image "  style={{heigth:"50px",width:"50px"}}  /> */}
//     </div>
//   );
// };

// export default loader;


// import React, { useState } from 'react';
// import {  TextField,Stack, Tooltip, Card  } from '@mui/material';
// import { CardGiftcardOutlined, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

// const loader = () => {
//   const [arrowDirection, setArrowDirection] = useState('down');
//   const [loading, setLoading] = useState(true)
//   // const [count3, setCount3] = useState("0")

//   const handleClick = () => {
//     setArrowDirection(arrowDirection === 'down' ? 'up' : 'down');
//   };


//   const [count3, setCount3] = useState(0);
//     const handleIncrement3 = () => {
//         setCount3(count3 + 1);
//     };

//     const handleDecrement3 = () => {
//         if (count3 > 0) {
//             setCount3(count3 - 1);
//         }

//     };
//     const handleTextFieldChange = (e) => {
//       const value = parseInt(e.target.value);
//       if (!isNaN(value)) {
//         setCount3(value);
//       }
//     };

//     console.log(count3,"loader  page---")
//   return (
//     // <button onClick={handleClick}>
//     //   {arrowDirection === 'down' ? (
//     //     <KeyboardArrowDown />
//     //   ) : (
//     //     <KeyboardArrowUp />

       
//     //   )}
//     // </button>

// <Card  >



                 
//                    <span  onClick={() => {  handleDecrement3() }}> -</span>
//                  {count3}
           
//                   <TextField  sx={{  "& fieldset": { border: 'none' }, }} value={ count3} onChange={handleTextFieldChange}>  {count3}</TextField>
//                    <span  onClick={() => { handleIncrement3() }}> +</span>
                
// </Card>
//   );
// };

// import React, { useState } from 'react';

// const loader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleFileChange} />

//       {selectedFile && (
//         <div>
//           <p>Selected File: {selectedFile.name}</p>
//           <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
//         </div>
//       )}
//     </div>
//   );
// };

// // export default PhotoUploader;


// export default loader;
// import React, { useState, useRef } from 'react';

//   const loader = () => {
//   const videoRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   const handleCapture = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });

//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }
//     } catch (error) {
//       console.log('Error accessing camera:', error);
//     }
//   };

//   const handleCaptureImage = () => {
//     const videoElement = videoRef.current;

//     if (videoElement && videoElement.srcObject) {
//       const canvas = document.createElement('canvas');
//       const context = canvas.getContext('2d');
//       const videoTrack = videoElement.srcObject.getVideoTracks()[0];

//       canvas.width = videoTrack.getSettings().width;
//       canvas.height = videoTrack.getSettings().height;

//       context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

//       const capturedImageData = canvas.toDataURL('image/jpeg');
//       setCapturedImage(capturedImageData);

//       videoElement.srcObject.getVideoTracks().forEach((track) => track.stop());
//     }
//   };

//   const handleUpload = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         setCapturedImage(e.target.result);
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleCapture}>Capture Photo</button>

//       {capturedImage && (
//         <div>
//           <p>Captured Photo:</p>
//           <img src={capturedImage} alt="Captured" />
//         </div>
//       )}

//       <video ref={videoRef} style={{ display: 'none' }} />

//       <input type="file" accept="image/*" ref={fileInputRef} onChange={handleUpload} />

//       <button onClick={() => fileInputRef.current.click()}>Upload Photo--</button>

//       <button onClick={handleCaptureImage}>Capture Image--</button>
//     </div>
//   );
// };

// export default loader;

// import { Height } from '@mui/icons-material';
// import React, { useRef, useState } from 'react';
// import Webcam from 'react-webcam';
// const loader = () => {
//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   const captureImage = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//   };

//   const uploadImage = () => {
//     // Implement the logic to upload the image to your server
//     if (capturedImage) {
//       // Use the capturedImage variable to access the captured image data
//       console.log('Uploading image:', capturedImage);
//     } else {
//       console.log('No image captured');
//     }
//   };

//   return (
//     <div>
//       <Webcam audio={false} ref={webcamRef} />

//       {capturedImage && (
//         <div>
//           <p>Captured Image:</p>
//           <img src={capturedImage} alt="Captured"  style={{Height:"60px",width:"60px",borderRadius:"70px"}}/>
//         </div>
//       )}

//       <button onClick={captureImage}>Capture Image</button>
//       <button onClick={uploadImage}>Upload Image</button>
//     </div>
//   );
// };


// import React, { useState } from 'react';

// const loader = () => {
//   const [searchQuery, setSearchQuery] = useState(null);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearch}
//         placeholder="Search..."
//       />
//       <button onClick={() => console.log(searchQuery)}>Search</button>
//     </div>
//   );
// };


// export default loader;




// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Autocomplete from '@mui/material/Autocomplete';

// export default function loader() {
//   return (
//     <Stack spacing={2} sx={{ width: 300 }}>
      
//       <Autocomplete
//         freeSolo
//         id="free-solo-2-demo"
//         disableClearable
//         options={top100Films.map((option) => option.title)}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="Search input"
//             InputProps={{
//               ...params.InputProps,
//               type: 'search',
//             }}
//           />
//         )}
//       />
//     </Stack>
//   );
// }

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//   },
//   { title: 'The Prestige', year: 2006 },
//   { title: 'The Lion King', year: 1994 },
//   { title: 'Apocalypse Now', year: 1979 },
//   { title: 'Alien', year: 1979 },
//   { title: 'Sunset Boulevard', year: 1950 },
//   { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//     year: 1964,},
//   { title: '3 Idiots', year: 2009 },
//   { title: 'Monty Python and the Holy Grail', year: 1975 },
// ];



// import React, { useEffect } from "react";

// const loader = () => {
//   useEffect(() => {
//     if (!("Notification" in window)) {
//       console.log("Browser does not support desktop notification");
//     } else {
//       Notification.requestPermission();
//     }
//   }, []);

//   const showNotification = () => {
//     console.log("helllooooooooo")
//     new Notification("Hello World");
//   };

//   return (
//     <div style={{margin:"20px"}}>
//       <button onClick={showNotification}>Show notification</button>
//     </div>
//   );
// };

// export default loader;



import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const Image = styled('img')({
  width: '100%',
});

function loaderDemo(props) {
  const { loading = true } = props;

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
          {loading ? (
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
          )}
        </Box>
        <Box sx={{ width: '100%' }}>
          {loading ? (
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
          ) : (
            <Typography>Ted</Typography>
          )}
        </Box>
      </Box>
      {loading ? (
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>
      ) : (
        <Image
          src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt=""
        />
      )}
    </div>
  );
}

loaderDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function loader() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <loaderDemo loading />
      </Grid>
      <Grid item xs>
        <loaderDemo />
      </Grid>
    </Grid>
  );
}








//  <div>
//       <Accordion expandIcon={expandIcon === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>
//             General settings
//           </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
//             Aliquam eget maximus est, id dignissim quam.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expandIcon={expandIcon === 'panel2'} onChange={handleChange('panel2')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2bh-content"
//           id="panel2bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
//           <Typography sx={{ color: 'text.secondary' }}>
//             You are currently not an owner
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
//             varius pulvinar diam eros in elit. Pellentesque convallis laoreet
//             laoreet.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expandIcon={expandIcon === 'panel3'} onChange={handleChange('panel3')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3bh-content"
//           id="panel3bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>
//             Advanced settings
//           </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>
//             Filtering has been entirely disabled for whole web server
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
//             amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expandIcon={expandIcon === 'panel4'} onChange={handleChange('panel4')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel4bh-content"
//           id="panel4bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
//             amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>