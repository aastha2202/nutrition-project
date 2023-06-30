// @mui
import React from "react"
import { Grid, Typography, Select, FormControl,  InputLabel,Button,IconButton,Stack, Tooltip,  } from '@mui/material';
import{useState,useEffect} from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import BarGraph1 from './components/BarGraph1'
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
// import DietPlan from '../Diet/DietPlan'; 
import Iconify from 'src/components/iconify/Iconify';
import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import Exerciselogo from "../../assets/Exerciselogo.svg";
import {useImperativeHandle,forwardRef} from 'react';
import  "../styles.css";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChevronDownIcon from '@material-ui/icons/ExpandMore';
// import Stack from '@mui/material/Stack';
// components
import AccountPopover from "../../layouts/dashboard/header/AccountPopover";
import Joyride, { STATUS } from "react-joyride";
// sections
import { useLocation } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
// ----------------------------------------------------------------------
  
const hello={
  color:"#112866",
  fontFamily:"Inter-SemiBold",

}
const subtext={
  
  fontSize:"12px" ,
  color:"white",
  fontFamily:"Inter-regular",
  // fontFamily:"Inter-SemiBold",

}
const calories ={
  fontFamily: 'Inter-Regular',
  color:"#112866",
};

export function step3ClassName() {
  return <h1 className="step-3">Step 2</h1>;
}

export function step4ClassName() {
  return <h1 className="step-4">Step 2</h1>;
}
// export const step3ClassName = "step-3";
// export const step4ClassName = "step-4";
export default function Home() {
 const charts= useLocation.state;

console.log(charts,"=---charts importing----")
const handleExpandClick = () => {
      setExpanded(true);
    };
  
    const handleCloseClick = () => {
      setExpanded(false);
    }

  const [expanded, setExpanded] = useState(false);
    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    
    }));
// alert usage here

    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  

  // alert messages
  const [alert1Open, setAlert1Open] = useState(false);
  const [alert2Open, setAlert2Open] = useState(false);
  const [alert3Open, setAlert3Open] = useState(false);
  const [alert4Open, setAlert4Open] = useState(false);
  const [alert5Open, setAlert5Open] = useState(false);

  const handleAlert1Click = () => {
    setAlert1Open(true);
  };

  const handleAlert2Click = () => {
    setAlert2Open(true);
  };

  const handleAlert3Click = () => {
    setAlert3Open(true);
  };

  const handleAlert4Click = () => {
    setAlert4Open(true);
  };

  const handleAlert5Click = () => {
    setAlert5Open(true);
  };

  const handleAlertClose = (alertId) => {
    switch (alertId) {
      case 1:
        setAlert1Open(false);
        break;
      case 2:
        setAlert2Open(false);
        break;
      case 3:
        setAlert3Open(false);
        break;
      case 4:
        setAlert4Open(false);
        break;
      case 5:
        setAlert5Open(false);
        break;
      default:
        break;
    }
  };
  const[toolTipmsg,setToolTipMsg]=useState( "click to view")


  const [loading, setLoading] = useState(true)
  const [username, setusername] = useState('')
  const [userId, setuserId] = useState('')
  const [oneDietPlanData, setoneDietplanData] = useState([])
  const [oneExerciseData, setOneExerciseData] = useState([])
  const [viewOneDietPlan, setViewOneDietPlan] = useState({ ongoing: true, previous: -1 })
  const interval = { '0': 'today', '1': 'week', '2': 'month', '3': '3months' }
  const [ongoingDietPlan, setOngoingDietPlan] = useState({})
  const [ongoingExercisePlan, setOngoingExercisePlan] = useState({})
  const [prevDietPlan, setPrevDietPlan] = useState([])
  const [value, setValue] = useState('-1');
  const [upcoming, setUpComing] = useState([])


  useEffect(() => {
   
      setValues()
    

  }, [])


  

  const setValues = async () => {
    let uname =  localStorage.getItem('Username')
    let uid = localStorage.getItem('userId')
    
    await setusername(uname)
    await setuserId(uid)
    await listDietPlan(uid);
  }

  // const formatDate = (date) => {
  //   let splitDate = date.split("-")
  //   return splitDate[1]+'-'+splitDate[0]+'-'+splitDate[2]
  // }
  const formatDate = (date) => {
    if (date && typeof date === 'string') {
      let splitDate = date.split("-");
      return splitDate[1] + '-' + splitDate[0] + '-' + splitDate[2];
    } else {
      return ""; // Return an empty string or handle the case when date is undefined
    }
  };
  const onIntervalChange = (value) => {
    if (value == '-1') {
      getAllDietPlan(0, 0, 0, userId)
    }
    else {
      getAllDietPlan(ongoingDietPlan, ongoingExercisePlan, value, userId)
    }
  }

  const listDietPlan = async (uid) => {

    // console.log(`https://novapwc.com/api/getlistsdietplans?userid=${uid}`)
    await axios.get(`https://novapwc.com/api/getlistsdietplans?userid=${uid}`)
      .then(function (response) {
        if (response?.data?.data == 'Data not found') {
          setLoading(false)
          localStorage.removeItem('exercisestartDate')
          localStorage.removeItem('exerciseendDate')
          localStorage.removeItem('dietstartDate')
          localStorage.removeItem('dietendDate')
        }
        else {
          let prev = response?.data?.data?.filter(e => e.status == 'previous')
          let ongoing = response?.data?.data?.filter(e => e.status == 'ongoing')
          let upcoming = response?.data?.data?.filter(e => e.status == 'upcoming')
          setUpComing(upcoming ? upcoming : [])
          setPrevDietPlan(prev ? prev : [])
          if (ongoing?.length > 0) {
            getAllDietPlan(0, 0, 0, uid)
          }
          else {
            localStorage.removeItem('exercisestartDate')
            localStorage.removeItem('exerciseendDate')
            localStorage.removeItem('dietstartDate')
            localStorage.removeItem('dietendDate')
            setLoading(false)
          }
        }
      })
      .catch(function (error) {
        setLoading(false)

        // Alert.alert("something went wrong");
        console.log(error, "listdietPlamn");
      });
  }

  // const getAllDietPlan = (diet, exercise, value, uid) => {
  //   // console.log("getAlldeiteplan")
  //   let dieturl = `https://novapwc.com/api/getAllDietPlan?userid=${uid}&type=food&status=ongoing`,
  //     exerciseurl = `https://novapwc.com/api/getAllDietPlan?userid=${uid}&type=exercise&status=ongoing`
  //   if (diet) {
  //     dieturl = `https://novapwc.com/api/getAllDietPlan?userid=${uid}&startdate=${diet?.StartDate}&enddate=${diet?.EndDate}&type=food&status=${interval[value]}`
  //     if (exercise?.StartDate) {
  //       exerciseurl = `https://novapwc.com/api/getAllDietPlan?userid=${uid}&startdate=${exercise?.StartDate}&enddate=${exercise?.EndDate}&type=exercise&status=${interval[value]}`
  //     }
  //   }
  //   // console.log(dieturl, exerciseurl)
  //   let days;
  //   value == '0' ? days = 1 : value == '1' ? days = 7 : value == '2' ? days = 30 : days = 90

  //   axios.get(dieturl)
  //     .then(function (response) {
  //       // 
  //       // console.log(response.data, "foodddd")
  //       // setOngoingDietPlan({ servingsLeft: 0, TotalServings: 0 })
  //       // setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
  //       if (diet) {


  //         if (response?.data?.data?.RecommendedServings * days < response?.data?.data?.TotalServings) {
  //           response.data.data.TotalServings = parseInt
  //             (response?.data?.data?.RecommendedServings * days)
  //         }



  //       }


  //       // console.log(response.data.data,"responseee")

  //       response.data.data.servingsLeft = parseInt
  //         (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)

  //       localStorage.setItem('dietstartDate', response?.data?.data?.StartDate)
  //       localStorage.setItem('dietendDate', response?.data?.data?.EndDate)
  //       setOngoingDietPlan(response?.data?.data)
  //       axios.get(exerciseurl)
  //         .then(function (response) {

  //           console.log(response?.data,"checking----exercise ---------")

  //           if (response?.data?.data) {
  //             if (exercise) {
  //               if (response?.data?.data?.RecommendedServings * days < response?.data?.data?.TotalServings) {
  //                 response.data.data.TotalServings = parseInt
  //                   (response?.data?.data?.RecommendedServings * days)
  //               }

  //             }

  //             response.data.data.servingsLeft = parseInt
  //               (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
  //             localStorage.setItem('exercisestartDate', response?.data?.data?.StartDate)
  //             localStorage.setItem('exerciseendDate', response?.data?.data?.EndDate)

  //             setOngoingExercisePlan(response?.data?.data)
  //           }
  //           else {
  //             setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
  //           }

  //           setLoading(false)
  //         })
  //         .catch(function (error) {
  //           // Alert.alert("something went wrong");
  //           console.log(error);
  //         });
  //     })
  //     .catch(function (error) {
  //       // Alert.alert("something went wrong");
  //       console.log(error);
  //     });
  // }

  const getAllDietPlan = (diet, exercise, value, uid) => {

    let dieturl = `https://novapwc.com/api/getAllDietPlan?userid=${uid}&type=food&status=ongoing`,
      exerciseurl = `https://novapwc.com/api/getAllDietPlan?userid=${uid}&type=exercise&status=ongoing`
    if (diet) {
      dieturl = `https://novapwc.com/api/getAllDietPlan?userid=${uid}&startdate=${diet?.StartDate}&enddate=${diet?.EndDate}&type=food&status=${interval[value]}`
      if (exercise?.StartDate) {
        exerciseurl = `https://novapwc.com/api/getAllDietPlan?userid=${uid}&startdate=${exercise?.StartDate}&enddate=${exercise?.EndDate}&type=exercise&status=${interval[value]}`
      }
    }
    console.log(dieturl, exerciseurl, 'get all diet plan')
    let days;
    value == '0' ? days = 1 : value == '1' ? days = 7 : value == '2' ? days = 30 : days = 90

    axios.get(dieturl)
      .then(function (response) {

        if (response?.data?.data) {
          if (diet) {


            if (response?.data?.data?.RecommendedServings * days < response?.data?.data?.TotalServings) {
              response.data.data.TotalServings = parseInt
                (response?.data?.data?.RecommendedServings * days)
            }



          }


          // console.log(response.data.data,"responseee")

          response.data.data.servingsLeft = parseInt
            (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)

          localStorage.setItem('dietstartDate', response?.data?.data?.StartDate)
          localStorage.setItem('dietendDate', response?.data?.data?.EndDate)
          setOngoingDietPlan(response?.data?.data)
        }

        axios.get(exerciseurl)
          .then(function (response) {

            if (response?.data?.data) {
              if (exercise) {
                if (response?.data?.data?.RecommendedServings * days < response?.data?.data?.TotalServings) {
                  response.data.data.TotalServings = parseInt
                    (response?.data?.data?.RecommendedServings * days)
                }

              }

              response.data.data.servingsLeft = parseInt
                (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
              localStorage.setItem('exercisestartDate', response?.data?.data?.StartDate)
              localStorage.setItem('exerciseendDate', response?.data?.data?.EndDate)

              setOngoingExercisePlan(response?.data?.data)
            }

            setLoading(false)
          })
          .catch(function (error) {
            setLoading(false)
            // Alert.alert("something went wrong");
            console.log(error);
          });
      })
      .catch(function (error) {
        setLoading(false)
        // Alert.alert("something went wrong");
        console.log(error);
      });
  }

  

  
  

  const getOneDiet = (item, index) => {

    console.log(item.status, "itemmmm statusss .....  ")
    axios.get(`https://novapwc.com/api/getAllDietPlan?userid=${userId}&startdate=${item.startdate}&enddate=${item.enddate}&type=food&status=${item.status}`)
      .then(function (response) {
        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
        setViewOneDietPlan({ ...viewOneDietPlan, previous: index })
        setoneDietplanData(response?.data?.data)
        axios.get(`https://novapwc.com/api/getAllDietPlan?userid=${userId}&startdate=${item.startdate}&enddate=${item.enddate}&type=exercise&status=${item.status}`)
          .then(function (response) {
            response.data.data.servingsLeft = parseInt
              (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
            setOneExerciseData(response?.data?.data)

          })
          .catch(function (error) {
            // Alert.alert("something went wrong");
            console.log(error);
          });
      })
      .catch(function (error) {
        // Alert.alert("something went wrong");
        console.log(error);
      });
      // axios.get(`https://novapwc.com/api/getAllDietPlan?userid=${userId}&startdate=${item.startdate}&enddate=${item.enddate}&type=exercise&status=${item.status}`)
      //     .then(function (response) {
      //       response.data.data.servingsLeft = parseInt
      //         (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
      //       setOneExerciseData(response?.data?.data)

      //     })
      //     .catch(function (error) {
      //       // Alert.alert("something went wrong");
      //       console.log(error);
      //     });
  }

  // const getOneDiet = (item, index) => {

  //   console.log(item, "itemmmm statusss .....  ")
  //   axios.get(`https://novapwc.com/api/getAllDietPlan?userid=${userId}&startdate=${item.startdate}&enddate=${item.enddate}&type=${item.type}&status=${item.status}`)
  //     .then(function (response) {
  //       console.log(response?.data, "prev plannnn")
  //       setViewOneDietPlan({ ...viewOneDietPlan, previous: index })
  //       if (response?.data?.data) {
  //         response.data.data.servingsLeft = parseInt
  //           (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
  //         setoneDietplanData(response?.data?.data)
  //       }
  //       else {
  //         setoneDietplanData('empty')
  //       }
  //     })
  //     .catch(function (error) {
  //       // Alert.alert("something went wrong");
  //       console.log(error);
  //     });
  // }


 
console.log(ongoingDietPlan,"checking data ---ongoingDietPlan");
console.log(ongoingExercisePlan,"checking data----ongoingExercisePlan");
console.log(oneDietPlanData,"------oneDietPlanData  -----dataa");
console.log(oneExerciseData,"-----oneExerciseData --dataa ");
console.log(upcoming,"----upcoming----")
console.log(prevDietPlan,"----------previous plan dataaaaa....")

// console.log(userData,"----user details---")  


const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    console.log("loader is onnnnnnn");


    setTimeout(() =>{ 
      // <img src={Logo} alt="loader image" width="100" height="100"/>
     
      
      // <HashLoader color="#36d7b7" />
      setSpinner(false)
    }, 1000)
  }, []);


  // joyride applying

  // const steps = [
  //   {
  //     target: '.tour-element-1',
  //     content: 'Step 1: Welcome to the tour!',
  //     placement: 'bottom',
  //   },
  //   {
  //     target: '.tour-element-2',
  //     content: 'Step 2: Here is another element to showcase.',
  //     placement: 'top',
  //   },
  // ];


  // const hasLoggedIn = localStorage.getItem('hasLoggedIn');

  //   if (!hasLoggedIn) {
  //     // First time login, show Joyride
  //     setShowJoyride(true);

  //     // Store the flag in sessionStorage
  //     localStorage.setItem('hasLoggedIn', true);
  //   }
 

  const [tour,setTour] = useState( localStorage.getItem('tour'));
  const [{ run, steps }, setState] = useState({
    run: tour,
     
    steps: [
      {
        content: <h2>Let's begin our journey!</h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body"


      },
      {
        content: <h2>Here is first step!</h2>,
        placement: "bottom",
        target: ".step-1",
        title: "First step"
      },
      {
        content: <h2>Here is second step!</h2>,
        placement: "bottom",
        target: ".step-2",
        title: "Second step",

        // <Link to={user.id}>{user.name}</Link>
      },
      {
        content: <h2>Here is third step!</h2>,
        placement: "bottom",
        target: ".step-3",
        title: "Third step"
      },
      {
        content: <h2>Here is fourth step!</h2>,
        placement: "bottom",
        target: ".step-4",
        title: "Fourth step"
      },
      {
        content: <h2>Here is fifth step!</h2>,
        placement: "bottom",
        target: ".step-5",
        title: "Fifth step"
      },
      {
        content: <h2>Here is six step!</h2>,
        placement: "bottom",
        target: ".step-6",
        title: "Six step",
       // setTour("false")
       

      },
    ]
  });
  
useEffect(()=>{
  console.log('---------')
  if(tour===false)

  localStorage.setItem('tour',false)
},[tour])


{console.log(ongoingExercisePlan,"type checking---")}
console.log(oneDietPlanData.length,"----------length------");

// down arrow and up arrow

  const [arrowDirection, setArrowDirection] = useState('down');

  const handletoggle = () => {
    setArrowDirection(arrowDirection === 'down' ? 'up' : 'down');
  
  }

  return ( 
    // !spinner &&

   <>
   {loading?(<div style={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems: "center" , height:"50vh" }}  >
           
           {/* <img  src={Logo} alt="loading" style={{height:"100px",width:"100px"}} /> */}
          < CircularProgress/>

       </div>):(<>

  
{/* <Joyride
     continuous
     // callback={handleJoyrideCallback}
     callback={() => {}}
     run={run}
     steps={steps}
     hideCloseButton
     scrollToFirstStep
     showSkipButton
     showProgress
   /> */}
   
   {/* <div>
<h1 className="step-1">1</h1>
<h1 className="step-2">2</h1>
<h1 className="step-3">3</h1>
<h1 className="step-4">4</h1>
<h1 className="step-5">5</h1>
<h1 className="step-6">16</h1>


</div> */}


{/* {
     [1, 2, 3, 4, 5, 6].map((item) => {
       return (
         <div
           key={item}
           id={`step-${item}`}
           style={{
             border: "1px solid white",
             width: "100px",
             height: "100px",
             background: "#0c1d2b",
             borderRadius: "8px",
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           {item}
         </div>
       )
     })
   } */}


 {/* <img src={Logo} alt="nova logo" style={{height: "auto", width: "250px", marginLeft: "30px"}}/> */}
   
{/* <AccountPopover state={{data:userData}}/> */}

 <Snackbar
     open={alert1Open}
     onClose={() => handleAlertClose(1)}
     autoHideDuration={1000}
     >
      <Alert severity="success">Overall plan is open!</Alert>
     </Snackbar>
   <Snackbar
     open={alert2Open}
     onClose={() => handleAlertClose(2)}
     message="Today plan is open"
     autoHideDuration={1000}
     >
    <Alert severity="success">Today's plan is open!</Alert>  
     </Snackbar>
   <Snackbar
     open={alert3Open}
     onClose={() => handleAlertClose(3)}
     message="Week plan is open"
     autoHideDuration={1000}
     >
     <Alert severity="success">Week plan is open!</Alert>  
      </Snackbar>
   <Snackbar
     open={alert4Open}
     onClose={() => handleAlertClose(4)}
     // message="1 Month plan is open"
     autoHideDuration={1000}
     >
     <Alert severity="success"> 1 Month plan is open!</Alert>  
      </Snackbar>
   <Snackbar
     open={alert5Open}
     onClose={() => handleAlertClose(5)}
     // message="3 Month plan is open"
     autoHideDuration={1000}
     // severity="success"
     >
     <Alert severity="success">3 Months plan is open!</Alert>  
      </Snackbar>
<Stack marginLeft="10px">
 <Typography variant='h5'className="step-5" style={hello}>  Hello, {username} </Typography>     
 </Stack>
 <Card style={{margin:"10px"}}>
 
   <Card  style={{ backgroundColor:"#D1A6E7"}}>
     <CardContent >
       {/* <Stack style={{backgroundColor:"#D1A6E7"}}> */}
         <Grid container  className="step-6"  style={{display:'flex',flexDirection:"row",position:'relative',marginBottom:'1rem',}}>
            <Grid item xs={8} className="body">
            {/* <CardContent > */}
                      <Typography  variant='h5' style={hello} >
                      Ongoing  Plan  
                   

                       </Typography>    

            {/* </CardContent> */}
            </Grid>
            


       {(ongoingDietPlan?.Type || ongoingExercisePlan?.Type) &&
     
          (<Grid  item xs={4}>
           {/* <CardContent > */}
                   <FormControl className="step-4"  sx={{ position:'absolute',right:5 }} size="small">
                  <Select  onChange={item => {
             setValue(item.target.value);
             onIntervalChange(item.target.value)
         }} 
         sx={{backgroundColor:"white"}}  defaultValue="-1" >
                  <MenuItem value="-1"    onClick={handleAlert1Click}>Over All</MenuItem>
                 
                 
                  <MenuItem value="0"  onClick={handleAlert2Click} >Today</MenuItem>
                 
                  <MenuItem value="1"  onClick={handleAlert3Click}>Week</MenuItem>
                 
                  <MenuItem value="2"  onClick={handleAlert4Click}>1 Month</MenuItem>
                  <MenuItem value="3"  onClick={handleAlert5Click}>3 Months</MenuItem>
                  </Select>
                  </FormControl>
              <br/>
             
           {/* </CardContent> */}
           </Grid>)}

     

       </Grid>

       {/* </Stack> */}
       
     { (ongoingDietPlan?.Type)?(
     <Stack style={{ backgroundColor:"#D1A6E7"}}>

       <Grid sx={12} margin={"10px"}  className="First step" >
<Typography variant='h5' style={hello}>Diet</Typography>
</Grid>
     
     <Card  style={{backgroundColor:"#8D25C1",marginTop:"10px" }}>
     
       
         {/* <Grid style={{display:'flex',alignContent:'center',justifyContent:'center',alignItems:"center",margin: "10px"}}>
           <Typography variant='h4' style={{color:"black" , textAlign:"center" }}>
           
           {formatDate(ongoingDietPlan?.StartDate)}
           </Typography > 
           <Typography sx={{color:"white",fontFamily:"Inter-regular",textAlign:"center",marginLeft:"1px",marginRight:"1px"}}>to</Typography>
           <Typography variant='h4'  style={{color:"black" ,textAlign:"center"}}>
        
           {formatDate(ongoingDietPlan?.EndDate)}
           </Typography>
           
         </Grid> */}
          <Grid container item alignContent={"center"} minHeight="80px" className="step-1">
       <Grid item xs={5.5} >
       <Typography variant='h4' style={{color:"black" ,textAlign:"center" }}>
   
       {formatDate(ongoingDietPlan?.StartDate)}
       </Typography > 
       </Grid>
       <Grid item xs={1}>
       <Typography variant='h4' sx={{color:"black",fontFamily:"Inter-regular",textAlign:"center"}}>to</Typography>
      
       </Grid>
       <Grid item  xs={5.5} justify="center" >
       <Typography variant='h4'className="step-2"  style={{color:"black", textAlign:"center"}}>
   
       {formatDate(ongoingDietPlan?.EndDate)}
       </Typography>
       </Grid>
       
       
       </Grid>
      
       
     </Card>
     
      
    


     <Card   style={{backgroundColor:"#2c2b2b",marginTop:"10px"}}  >
               <CardContent  state={{item:ongoingDietPlan}}  to="/dashboard/dietplan" component={RouterLink} sx={{textDecoration:'none'}}>
               <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                   <Grid item xs={4} alignItems="center" sx={{textAlign:'center'}} justifyContent="center">
                          
                           <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                           {ongoingDietPlan?.TotalServings}
                           </Typography>
                           <Typography style={subtext}>Servings recommended</Typography>
                           
                   </Grid>
                   <Grid item xs={4}  sx={{justifyContent:'center',textAlign: 'center',alignItems:"center",alignSelf:'center',alignContent:'center',}}>
                  
                     <Typography >
                     <img src={Diet}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                     </Typography>
                  

                  
                  
                   </Grid>
                   <Grid item xs={4} sx={{textAlign:'center'}} alignItems="center" justifyContent="center">
                          
                           <Typography style={{ fontSize:"25px" ,color:"#E1B725"}}>
                           {ongoingDietPlan?.servingsLeft}
                           </Typography>
                           <Typography style={subtext}>Servings left</Typography>
                         
                   </Grid>
                   
                  
                   
                   </Grid>
               </CardContent>
       </Card>
       </Stack>
       
       ):(<Card sx={{backgroundColor:"#8D25C1", marginTop:"10px" ,maxHeight:"800px"}}>
           <CardContent>
           <Typography  align="center"    style={{calories, color:"white"}}> You don't have any ongoing  diet plans. Please consult Dietician.</Typography>
           </CardContent>
           </Card>)}
     

     {(ongoingExercisePlan?.Type)?(
     <Stack style={{ backgroundColor:"#D1A6E7"}}>

<Grid sx={12} margin={"10px"} >
<Typography variant='h5' style={hello}>Exercise</Typography>
</Grid>

<Card  style={{backgroundColor:"#8D25C1",marginTop:"10px" }}>

<Grid container item alignContent={"center"} minHeight="80px" >
<Grid item xs={5.5} >
<Typography variant='h4' style={{color:"black" ,textAlign:"center" }}>

{formatDate(ongoingExercisePlan?.StartDate)}
</Typography > 
</Grid>
<Grid item xs={1}>
<Typography variant='h4' sx={{color:"black",fontFamily:"Inter-regular",textAlign:"center"}}>to</Typography>

</Grid>
<Grid item  xs={5.5} justify="center" >
<Typography variant='h4'  style={{color:"black", textAlign:"center"}}>

{formatDate(ongoingExercisePlan?.EndDate)}
</Typography>
</Grid>


</Grid>


</Card>
<Card   style={{backgroundColor:"#2c2b2b",marginTop:"10px"}}>
     <CardContent   to="/dashboard/Exercise" component={RouterLink} sx={{textDecoration:'none'}}>
     <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
         
         <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
               
                 
                 <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                 {ongoingExercisePlan.TotalServings}
                 </Typography>
                 <Typography style={subtext} marginLeft={1} textAlign={"center"}>exercise recommended</Typography>
                

               
                
         </Grid>
         <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
         
         <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
         
        
         </Grid>
         <Grid item xs={4} sx={{textAlign:'center'}}  >
           
           
                 <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                
                 {ongoingExercisePlan.servingsLeft}
                 </Typography>
                 <Typography style={subtext}>exercise left</Typography>
                                     
                
         </Grid>
                        
         </Grid>
     </CardContent>
</Card>
</Stack>):(<Card sx={{backgroundColor:"#8D25C1", marginTop:"10px" ,maxHeight:"800px"}}>
           <CardContent>
           <Typography  align="center"   style={{calories,color:"white"}}> You don't have any ongoing exercise plans. Please consult Dietician.</Typography>
           </CardContent>
           </Card>)}

     
      
       
     </CardContent>
   </Card>
   
 </Card>
<br/>






      
   {prevDietPlan.length > 0 && (
     
     <Card sx={{margin:"10px"}} style={{backgroundColor:"white"}}>
       <Grid  sx={12} marginLeft={"30px"}  marginTop={"10px"}>
       <Typography variant='h5' style={hello} >Previous Plans</Typography>
 
        </Grid>
           {prevDietPlan.map((item, index) => (
             <CardContent key={index} > 
     
             
                 <Card  onClick={() => { setArrowDirection(arrowDirection === 'down' ? 'up' : 'down');  index == viewOneDietPlan.previous ? setViewOneDietPlan(-1) : getOneDiet(item, index) }} style={{backgroundColor:"white", boxShadow:10, borderRadius: 10 ,cursor:"pointer"}} >
{/* <Tooltip title={toolTipmsg} placement="top">*/}
{/* setToolTipMsg(toolTipmsg==='click to view'?'click to close':'click to view'); */}

<Grid container item alignContent={"center"} minHeight="80px" >
<Grid item xs={5} >
<Typography variant='h4' style={{color:"black" ,textAlign:"center" }}>

{formatDate(item.startdate)}
</Typography > 
</Grid>
<Grid item xs={1}>
<Typography variant='h4' sx={{color:"black",fontFamily:"Inter-regular",textAlign:"center"}}>to</Typography>

</Grid>
<Grid item  container xs={5} justifyContent="center"   >

<Typography variant='h4'  style={{color:"black", textAlign:"center"}}>

{formatDate(item.enddate)}
</Typography>


</Grid>
<Grid item xs={1} sx={{textAlign:"center",alignSelf:"center"}}>

   {arrowDirection === 'down' ? (
     <KeyboardArrowDown />
   ) : (
     <KeyboardArrowUp />
   )}
 
 </Grid>



</Grid>
{/* </Tooltip> */}

{viewOneDietPlan.previous === index && (
                 <Grid sx={{marginTop:"10px"}}>
                   {item?.type === 'food' ? (
                     // item?.type === 'food'
                     <Grid >
                       {oneDietPlanData === "empty"? (
                         <CardContent style={{ alignItems: "center", flexDirection: "row", justifyContent: 'center', textAlign: 'center' }}>
                           <Typography  style={{calories,color: "black"}}> No data found in diet plan</Typography>
                         </CardContent>
                       ) : (
                         <Card  style={{backgroundColor:"#2c2b2b", margin:"10px"}}  >
                         
                      
                             <CardContent >
                         <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                             
                             <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
                                   
                                     
                                     <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                     {oneDietPlanData.TotalServings}
                                    
                                     </Typography>
                                     <Typography style={subtext}>servings recommended</Typography>
                                    
             
                             </Grid>
                             <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
                             
                             <img src={Diet}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                             
                            
                             </Grid>
                             <Grid item xs={4} sx={{textAlign:'center'}}  >
                               
                               
                                     <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                     {oneDietPlanData.servingsLeft}
                                    
                                     
                                     </Typography>
                                     <Typography style={subtext}>servings left</Typography>
                                                         
                                    
                             </Grid>
                                            
                             </Grid>
                         </CardContent>
                         
                 </Card>
                       )}
                     </Grid>
                   ) : item?.type === 'exercise' ? (
                     <Grid  >
                       {oneExerciseData === 'empty' ? (
                         <CardContent style={{ justifyContent: "center", alignItems: "center" }}>
                           <Typography style={{ color: "white" }}> No data found in exercise plan</Typography>
                         </CardContent>
                       ) : (
                         <Card   style={{backgroundColor:"#2c2b2b",margin:"10px"}}>
                         <CardContent  >
                         <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                             
                             <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
                                   
                                     
                                     <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
     
                                     {oneExerciseData.TotalServings}
                                     </Typography>
                                     <Typography style={subtext}>exercise recommended</Typography>
                                    
     
                                   
                                    
                             </Grid>
                             <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
                             
                             <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                             
                            
                             </Grid>
                             <Grid item xs={4} sx={{textAlign:'center'}}  >
                               
                               
                                     <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                    
                                    
                                     {oneExerciseData.servingsLeft}
                                     </Typography>
                                     <Typography style={subtext}>exercise left</Typography>
                                                         
                                    
                             </Grid>
                                            
                             </Grid>
                         </CardContent>
                          </Card>
                       )}
                     </Grid>
                   ) : (
                     <CardContent style={ { justifyContent: "center", alignItems: "center" }}>
                       <Typography>No activity</Typography>
                     </CardContent>
                   )}
                 </Grid>
               )
               }

             </Card>

              
             </CardContent>
           ))}
         
       
     </Card>
     
   )}


{upcoming.length>0 && (
<Card sx={{margin:"10px"}} >
 <Grid  sx={12} marginLeft={"30px"}  marginTop={"10px"}>
       <Typography variant='h5' style={hello} >Future Plans</Typography>
 
        </Grid>



      {upcoming.map((item, index) => (
             <Stack key={index} sx={{margin:"20px"}} >
               
                 
                   {item?.type === 'food' ? (
                     <Card  style={{backgroundColor:"#2c2b2b",}} >
                         
                         {/* < Grid container item alignContent={"center"} minHeight="80px" sx={{backgroundColor:"#2c2b2b" }} >
           <Grid xs={12} >
         <img src={Diet}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
         </Grid>
        
         <Grid  container item xs={5} flexDirection={"row"}  >
          
        <Grid item>
         <Typography variant='h4' style={{color:"white" ,textAlign:"center", }}>
         {formatDate(item.startdate)}
        
         </Typography > 
         </Grid>
         </Grid>
         <Grid item xs={2}>
         <Typography variant='h4' sx={{color:"white",fontFamily:"Inter-regular",textAlign:"center"}}>to</Typography>
        
         </Grid>
         <Grid item  xs={5} justify="center" >
         <Typography variant='h4'  style={{color:"white", textAlign:"center"}}>
        
         {formatDate(item.enddate)}
         </Typography>
         </Grid>
         
         
                  </Grid>
                        */}

<Grid container item alignContent={"center"} minHeight="100px" >
<Grid xs={12} >
         <img src={Diet}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
         </Grid>
        
<Grid item xs={5.5} >
<Typography variant='h4' style={{color:"white" ,textAlign:"center" }}>

{formatDate(item.startdate)}
</Typography > 
</Grid>
<Grid item xs={1}>
<Typography variant='h4' sx={{color:"white",fontFamily:"Inter-regular",textAlign:"center"}}>to</Typography>

</Grid>
<Grid item  xs={5.5} justify="center" >
<Typography variant='h4'  style={{color:"white", textAlign:"center"}}>

{formatDate(item.enddate)}
</Typography>
</Grid>


</Grid>
                      
                    
                 
         </Card>
                    
                     
                   ) : (

                     <Card  style={{backgroundColor:"#2c2b2b",}}>
                    
                  
          
                       
                    <Grid container item alignContent={"center"} minHeight="100px" >
<Grid xs={12} >
         <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
         </Grid>
        
<Grid item xs={5.5} >
<Typography variant='h4' style={{color:"white" ,textAlign:"center" }}>

{formatDate(item.startdate)}
</Typography > 
</Grid>
<Grid item xs={1}>
<Typography variant='h4' sx={{color:"white",fontFamily:"Inter-regular",textAlign:"center"}}>to</Typography>

</Grid>
<Grid item  xs={5.5} justify="center" >
<Typography variant='h4'  style={{color:"white", textAlign:"center"}}>

{formatDate(item.enddate)}
</Typography>
</Grid>


</Grid>
       
                    
                  </Card>
                    
                   )}
                   
                
                  
                
              
             </Stack>
           ))}
               </Card>  
                ) }
 <BarGraph1/>
</>)}
   </> 
  
  
  );
}