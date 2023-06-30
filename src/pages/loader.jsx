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

import { Height } from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
const loader = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const uploadImage = () => {
    // Implement the logic to upload the image to your server
    if (capturedImage) {
      // Use the capturedImage variable to access the captured image data
      console.log('Uploading image:', capturedImage);
    } else {
      console.log('No image captured');
    }
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} />

      {capturedImage && (
        <div>
          <p>Captured Image:</p>
          <img src={capturedImage} alt="Captured"  style={{Height:"60px",width:"60px",borderRadius:"70px"}}/>
        </div>
      )}

      <button onClick={captureImage}>Capture Image</button>
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
};




export default loader;

