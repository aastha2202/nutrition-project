// @mui
import React from "react"
import { Grid, Typography, Select, FormControl, InputLabel,Button,IconButton,Stack  } from '@mui/material';
import{useState,useEffect} from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';

import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
// import DietPlan from '../Diet/DietPlan'; 

import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import Exerciselogo from "../../assets/Exerciselogo.svg";
import  "../styles.css";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// import Stack from '@mui/material/Stack';
// components

// sections

// ----------------------------------------------------------------------
  
const hello={
  color:"#112866",
  fontFamily:"Inter-SemiBold",

}
const subtext={
  
  fontSize:"10px" ,
  color:"white",
  fontFamily:"Inter-regular",

}


export default function Home() {



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
  // const [username,setusername]=useState('')
  // const [userId,setuserId]=useState('')
  // const [loading,setLoading]=useState(true)
  // const [oneDietPlanData, setoneDietplanData] = useState([])
  // const [oneExerciseData, setOneExerciseData] = useState([])
  // const [data, setData] = useState({ date: "31  March \n 2023", servingsConsumed: 120, servingsLeft: 60, exercisesRecommended: 20, exercisesLeft: 10 })
  // const [selected, setSelected] = useState({ label: "Today", value: "today" })
  // const [viewOneDietPlan, setViewOneDietPlan] = useState({ ongoing: true, previous: -1 })
  // const interval = { '0': 'today', '1': 'week', '2': 'month', '3': '3months' }
  // const [ongoingDietPlan, setOngoingDietPlan] = useState({})
  // const [ongoingExercisePlan, setOngoingExercisePlan] = useState({})
  // const [prevDietPlan, setPrevDietPlan] = useState([])
  // const [value, setValue] = useState('-1');


  // useEffect(() => {
  //   setValues()
   
  
  // }, [])

  // const setValues = async () => {
  //   let uname =localStorage.getItem('Username')
  //   let uid =localStorage.getItem('userId')
  //   await setusername(uname)
  //   await setuserId(uid)
  //   await listDietPlan(uid);
  // }

  // const onIntervalChange = (value) => {
  //   console.log(value)
  //   if (value == '-1') {
  //     getAllDietPlan(0, 0, 0, userId)
  //   }
  //   else {
  //     getAllDietPlan(ongoingDietPlan, ongoingExercisePlan, value, userId)
  //   }
  // }

  // const listDietPlan = async (uid) => {
  //   setLoading(true)
  //   console.log(`https://aipse.in/api/getlistsdietplans?userid=${uid}`)
  //   await axios.get(`https://aipse.in/api/getlistsdietplans?userid=${uid}`)
  //     .then(function (response) {
  //       if (response?.data?.data == 'Data not found') {
  //         setLoading(false)
  //         localStorage.removeItem('exercisestartDate')
  //         localStorage.removeItem('exerciseendDate')
  //         localStorage.removeItem('dietstartDate')
  //         localStorage.removeItem('dietendDate')
  //       }
  //       else {
  //         let prev = response?.data?.data?.filter(e => e.status == 'previous')
  //         let ongoing = response?.data?.data?.filter(e => e.status == 'ongoing')
  //         setPrevDietPlan(prev ? prev : [])
  //         if (ongoing?.length > 0) {
  //           getAllDietPlan(0, 0, 0, uid)
  //         }
  //         else {
  //           localStorage.removeItem('exercisestartDate')
  //           localStorage.removeItem('exerciseendDate')
  //           localStorage.removeItem('dietstartDate')
  //           localStorage.removeItem('dietendDate')
  //           setLoading(false)
  //         }
  //       }
  //     })
  //     .catch(function (error) {
  //       setLoading(false)

  //       // Alert.alert("something went wrong");
  //       console.log(error, "listdietPlamn");
  //     });
  // }

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

    // console.log(`https://aipse.in/api/getlistsdietplans?userid=${uid}`)
    await axios.get(`https://aipse.in/api/getlistsdietplans?userid=${uid}`)
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

  const getAllDietPlan = (diet, exercise, value, uid) => {
    // console.log("getAlldeiteplan")
    let dieturl = `https://aipse.in/api/getAllDietPlan?userid=${uid}&type=food&status=ongoing`,
      exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=${uid}&type=exercise&status=ongoing`
    if (diet) {
      dieturl = `https://aipse.in/api/getAllDietPlan?userid=${uid}&startdate=${diet?.StartDate}&enddate=${diet?.EndDate}&type=food&status=${interval[value]}`
      if (exercise?.StartDate) {
        exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=${uid}&startdate=${exercise?.StartDate}&enddate=${exercise?.EndDate}&type=exercise&status=${interval[value]}`
      }
    }
    // console.log(dieturl, exerciseurl)
    let days;
    value == '0' ? days = 1 : value == '1' ? days = 7 : value == '2' ? days = 30 : days = 90

    axios.get(dieturl)
      .then(function (response) {
        // 
        // console.log(response.data, "foodddd")
        // setOngoingDietPlan({ servingsLeft: 0, TotalServings: 0 })
        // setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
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
        axios.get(exerciseurl)
          .then(function (response) {

            console.log(response?.data,"checking----exercise ---------")

            if (response?.data?.data) {
              if (diet) {
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
            else {
              setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
            }

            setLoading(false)
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
  }

  const getOneDiet = (item, index) => {

    console.log(item.status, "itemmmm statusss .....  ")
    axios.get(`https://aipse.in/api/getAllDietPlan?userid=${userId}&startdate=${item.startdate}&enddate=${item.enddate}&type=food&status=${item.status}`)
      .then(function (response) {
        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
        setViewOneDietPlan({ ...viewOneDietPlan, previous: index })
        setoneDietplanData(response?.data?.data)
        axios.get(`https://aipse.in/api/getAllDietPlan?userid=${userId}&startdate=${item.startdate}&enddate=${item.enddate}&type=exercise&status=${item.status}`)
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
  }
  
// console.log(uname,"username--checking---")  
// console.log(uid,"id-------checking")
console.log(ongoingDietPlan,"checking data ---ongoingDietPlan");
console.log(ongoingExercisePlan,"checking data----ongoingExercisePlan");
console.log(oneDietPlanData,"------oneDietPlanData  -----dataa");
console.log(oneExerciseData,"-----oneExerciseData --dtaa checking");



  return (
  < >
    {/* <img src={Logo} alt="nova logo" style={{height: "auto", width: "250px", marginLeft: "30px"}}/> */}
      

    <Snackbar
        open={alert1Open}
        onClose={() => handleAlertClose(1)}
        // message="Over all plan is open"
        autoHideDuration={1000}
        // severity="success"
        // sx={{background:"green"}}
        >
         <Alert severity="success">Over all plan is open!</Alert>
        </Snackbar>
      <Snackbar
        open={alert2Open}
        onClose={() => handleAlertClose(2)}
        message="Today plan is open"
        autoHideDuration={1000}
        >
       <Alert severity="success">Today plan is open!</Alert>  
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
        <Alert severity="success">3 Month plan is open!</Alert>  
         </Snackbar>

    <Card style={{margin:"10px"}}>
    
      <Card  style={{ backgroundColor:"#D1A6E7"}}>
        <CardContent >
          <Card style={{backgroundColor:"#D1A6E7"}}>
            <Grid container   style={{display:'flex',flexDirection:"row",position:'relative',marginBottom:'1rem'}}>
               <Grid item xs={6}>
               <CardContent >
                         <Typography  variant='h5' style={hello} >
                              Hello, {username}
                          </Typography>    

               </CardContent>
               </Grid>
               


          {(ongoingDietPlan?.Type || ongoingExercisePlan?.Type) &&
        
             (<Grid  item xs={6} >
              <CardContent >
                      <FormControl  sx={{ position:'absolute',right:0 }} size="small">
                     <Select  onChange={item => {
                setValue(item.target.value);
                onIntervalChange(item.target.value)
            }} 
            sx={{backgroundColor:"white"}}  defaultValue="-1" >
                     <MenuItem value="-1"  onClick={handleAlert1Click}>Over All</MenuItem>
                    
                    
                     <MenuItem value="0"onClick={handleAlert2Click} >Today</MenuItem>
                    
                     <MenuItem value="1"onClick={handleAlert3Click}>Week</MenuItem>
                    
                     <MenuItem value="2" onClick={handleAlert4Click}>1 Month</MenuItem>
                     <MenuItem value="3" onClick={handleAlert5Click}>3 Months</MenuItem>
                     </Select>
                     </FormControl>
                 <br/>
                
              </CardContent>
              </Grid>)}
 
        

          </Grid>

          </Card>
          


          <Card  style={{backgroundColor:"#8D25C1"}}>
            <Typography color="purple" variant='h4' >
              <div style={{display:'flex',alignContent:'center',justifyContent:'center',alignItems:"center",margin: "10px"}}>
                <Typography variant='h4' style={{color:"black" ,margin: "5px" }}>
                {/* {ongoingDietPlan?.StartDate} */}
                {formatDate(ongoingDietPlan?.StartDate)}
                </Typography > 
                <Typography sx={{color:"white",fontFamily:"Inter-regular"}}>to</Typography>
                <Typography variant='h4'  style={{color:"black" ,margin: "5px"}}>
                {/* {ongoingDietPlan?.EndDate} */}
                {formatDate(ongoingDietPlan?.EndDate)}
                </Typography>
                
              </div>
            </Typography>

          </Card>
          
        </CardContent>
      </Card>
      
    </Card>

    <Card   style={{backgroundColor:"#2c2b2b",margin:"10px"}}>
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
    
            <Card   style={{backgroundColor:"#2c2b2b",margin:"10px"}}>
                    <CardContent   to="/dashboard/Exercise" component={RouterLink} sx={{textDecoration:'none'}}>
                    <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                        
                        <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
                              
                                
                                <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                {ongoingExercisePlan.TotalServings}
                                </Typography>
                                <Typography style={subtext}>exercise recommended</Typography>
                               

                              
                               
                        </Grid>
                        <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
                        
                        <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                        
                       
                        </Grid>
                        <Grid item xs={4} sx={{textAlign:'center'}}  >
                          
                          
                                <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                {/* {ongoingExercisePlan.servingsLeft} */}
                                {ongoingExercisePlan.servingsLeft}
                                </Typography>
                                <Typography style={subtext}>exercise left</Typography>
                                                    
                               
                        </Grid>
                                       
                        </Grid>
                    </CardContent>
            </Card>

            
            

         
    
    
  </>
  );
}