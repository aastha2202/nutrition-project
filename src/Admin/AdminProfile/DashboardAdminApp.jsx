// @mui
import { Grid, Typography, Select, FormControl, InputLabel,Button,IconButton,Stack  } from '@mui/material';
import{useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { styled } from '@mui/material/styles';

import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import MenuItem from '@mui/material/MenuItem';
// import DietPlan from '../Diet/DietPlan'; 

import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import Exerciselogo from "../../assets/Exerciselogo.svg";
// import  "../styles.css";

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


export default function DashboardAppPage(props) {

  // expand 
  // const location = useLocation();
  // const [dataOfUser,setDataOfUser] = useState(location.state?.data);
  // console.log(dataOfUser,'------dataOfUser----');
  

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

  var username = 'Seema'

  const location = useLocation();
  const[userData,setUserDate]=useState(location.state?.data);
  console.log(userData,'userData');
  const [oneDietPlanData, setoneDietplanData] = useState([])
  const [oneExerciseData, setOneExerciseData] = useState([])
  const [data, setData] = useState({ date: "31  March \n 2023", servingsConsumed: 120, servingsLeft: 60, exercisesRecommended: 20, exercisesLeft: 10 })
  const [selected, setSelected] = useState({ label: "Today", value: "today" })
  const [viewOneDietPlan, setViewOneDietPlan] = useState({ ongoing: true, previous: -1 })
  const interval = { '0': 'today', '1': 'week', '2': 'month', '3': '3months' }
  const [ongoingDietPlan, setOngoingDietPlan] = useState({})
  const [ongoingExercisePlan, setOngoingExercisePlan] = useState({})
  const [prevDietPlan, setPrevDietPlan] = useState([])
  const [value, setValue] = useState('-1');


  useEffect(() => {
    listDietPlan()
  }, [])


  const onIntervalChange = (value) => {
    if (value == '-1') {
      getAllDietPlan(0,0,0)
    }
    else {
      getAllDietPlan(ongoingDietPlan, ongoingExercisePlan, value)
    }
  }

  const listDietPlan = () => {
   
    axios.get(`https://aipse.in/api/getlistsdietplans?userid=1`)
      .then(function (response) {
        console.log(response?.data, "response in list diet plan")
        let prev = response?.data?.data?.filter(e => e.status == 'previous')
        let ongoing = response?.data?.data?.filter(e => e.status == 'ongoing')
        setPrevDietPlan(prev ? prev : [])
        console.log('prev and ongoing',prev,ongoing);
        if (ongoing?.length > 0) {
          getAllDietPlan(0,0,0)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(ongoingDietPlan,'----data coming')
  }

  const getAllDietPlan = (diet, exercise, value) => {
     console.log(diet,'diet', exercise,'exercise',value)
    console.log('called');
    let dieturl = `https://aipse.in/api/getAllDietPlan?userid=1&type=food&status=ongoing`,
      exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=1&type=exercise&status=ongoing`
    if (diet) {
      dieturl = `https://aipse.in/api/getAllDietPlan?userid=2&startdate=${diet?.StartDate}&enddate=${diet?.EndDate}&type=food&status=${interval[value]}`
      if (exercise?.StartDate) {
        exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=2&startdate=${exercise?.StartDate}&enddate=${exercise?.EndDate}&type=exercise&status=${interval[value]}`
      }
    }
    console.log('diet and exwrcise url',dieturl, exerciseurl)
    axios.get(dieturl)
      .then(function (response) {
        let days;
          value == '0' ? days = 1 : value == '1' ? days = 7 : value == '2' ? days = 30 : days = 90
        // 
        console.log(response.data, "foodddd")
      
        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
        setOngoingDietPlan(response?.data?.data)
        axios.get(exerciseurl)
          .then(function (response) {
            console.log(response.data, "exercise")
            if (response?.data?.data) {
              response.data.data.servingsLeft = parseInt
                (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
              setOngoingExercisePlan(response?.data?.data)
            }
            else {
              setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getOneDiet = (item, index) => {
    console.log(item.status, "itemmmm statusss .....  ")
    axios.get(`https://aipse.in/api/getAllDietPlan?userid=2&startdate=${item.startdate}&enddate=${item.enddate}&type=food&status=${item.status}`)
      .then(function (response) {
        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
        setViewOneDietPlan({ ...viewOneDietPlan, previous: index })
        setoneDietplanData(response?.data?.data)
        axios.get(`https://aipse.in/api/getAllDietPlan?userid=2&startdate=${item.startdate}&enddate=${item.enddate}&type=exercise&status=${item.status}`)
          .then(function (response) {
            response.data.data.servingsLeft = parseInt
              (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
            setOneExerciseData(response?.data?.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
  <div >
    <img src={Logo} alt="nova logo" style={{height: "auto", width: "250px", marginLeft: "30px"}}/>
    
        
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
            sx={{backgroundColor:"white"}} >
                     <MenuItem value="-1" >Over All</MenuItem>
                     <MenuItem value="0">Today</MenuItem>
                     <MenuItem value="1">Week</MenuItem>
                    
                     <MenuItem value="2">1 Month</MenuItem>
                     <MenuItem value="3">3 Week</MenuItem>
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
                {ongoingDietPlan?.StartDate}
                </Typography>
                <Typography variant='h4'  style={{color:"black" ,margin: "5px"}}>
                {ongoingDietPlan?.EndDate}
                </Typography>
                
              </div>

              
              
            </Typography>

          </Card>
          
        </CardContent>
      </Card>
      
    </Card>

    
    
    
    
   


    <Card   style={{backgroundColor:"#212121",margin:"10px"}}>
                    <CardContent   to="/dashboard/dietplan" component={RouterLink} sx={{textDecoration:'none'}}>
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
    
            <Card   style={{backgroundColor:"#212121",margin:"10px"}}>
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
                                {ongoingExercisePlan.servingsLeft}
                                </Typography>
                                <Typography style={subtext}>exercise left</Typography>
                                


                          
                               
                        </Grid>
                        
                       
                        
                       
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>

            
            {/* <Button id = "create-poa-button"
            variant = "contained"
            // onClick = { handleClickOpen }
            style = {
                {
                    float: 'right',
                    marginLeft: '1rem',
                    borderRadius: '50%',
                    padding: '0.2rem',
                    marginTop: '-0.5rem',
                    position: 'fixed',
                    zIndex: '1',
                    bottom: 40,
                    right: 40,
                }
            }

            sx = {
                {
                    ':hover': {
                        bgcolor: "#F0E7F5", // theme.palette.primary.main
                        color: '#9B59B6',
                        border: '#ffd796'
                    },
                    ':active': {
                        bgcolor: "#F0E7F5",
                        color: "#9B59B6"
                    },
                    bgcolor: '#F0E7F5',
                    color: "#9B59B6",
                    border: 'none'
                }
            }
            title = "Create POA" >

            <span style = {   { fontSize: '2rem' } } > + </span> 
            </Button > */}
            <Stack mt={10}><Card to="/dashboardadmin/alldietplan" state={{data:userData}} component={RouterLink} sx={{textDecoration:'none'}} style={{backgroundColor:"purple", margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'left', color:'white', fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} gutterBottom variant="h5" component="div" mt={3}  >
                   Create Diet Plan
                  </Typography></Stack></Card></Stack>

            <Stack mt={4}><Card style={{backgroundColor:"purple", margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', color:'white', fontFamily:'Inter-semiBold', lineHeight:'38px', marginLeft:'10px'}} mt={3}  >
              Create Exercise Plan
            </Typography></Stack></Card></Stack>

             {/* expand */}
     
     
      {(!expanded)?<ExpandMore disableRipple style={{ backgroundColor: 'transparent' }} expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">

      
    <Button variant="warning" style={{textAlign:'right'}} id="edit_user"
      sx={{
        ':hover': {
          bgcolor: '#ffd796', // theme.palette.primary.main
          color: '#ff7424',
        },
        ':focus': {
          bgcolor: '#ffd796',
          color: "#ff7424"
        },
        bgcolor: '#ffd796',
        color: "#ff7424"
      }} component={RouterLink} to="#" >
      Edit User
    </Button> 

    {/* startIcon={<Iconify icon="material-symbols:edit" />} */}

  </ExpandMore>: 
  
  <IconButton  title="close" onClick={handleCloseClick} color="inherit" aria-label="close"  style={{float:'right'}} id="close">
      1
  </IconButton>}

         
    
    
  </div>
  );
}