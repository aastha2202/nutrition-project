// @mui
// @mui
import { Grid, Typography, Select, FormControl, InputLabel,Button,IconButton,Stack  } from '@mui/material';
import{useState,useEffect} from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';

import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import MenuItem from '@mui/material/MenuItem';
// import DietPlan from '../Diet/DietPlan'; 

// import Logo from "../../assets/nova.svg";
// import Diet from "../../assets/Diet.svg";
// import Exerciselogo from "../../assets/Exerciselogo.svg";
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


export default function DashboardAppPage() {



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
      getAllDietPlan()
    }
    else {
      getAllDietPlan(ongoingDietPlan, ongoingExercisePlan, value)
    }
  }

  const listDietPlan = () => {
    axios.get(`https://aipse.in/api/getlistsdietplans?userid=1`)
      .then(function (response) {
        // console.log(response?.data, "response in list diet plan")
        let prev = response?.data?.data?.filter(e => e.status == 'previous')
        let ongoing = response?.data?.data?.filter(e => e.status == 'ongoing')
        setPrevDietPlan(prev ? prev : [])
        console.log('prev and ongoing',prev,ongoing);
        if (ongoing?.length > 0) {
          getAllDietPlan()
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
    let dieturl = `https://aipse.in/api/getAllDietPlan?userid=2&type=food&status=ongoing`,
      exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=2&type=exercise&status=ongoing`
    if (diet) {
      dieturl = `https://aipse.in/api/getAllDietPlan?userid=2&startdate=${diet?.StartDate}&enddate=${diet?.EndDate}&type=food&status=${interval[value]}`
      if (exercise?.StartDate) {
        exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=2&startdate=${exercise?.StartDate}&enddate=${exercise?.EndDate}&type=exercise&status=${interval[value]}`
      }
    }
    console.log('diet and exwrcise url',dieturl, exerciseurl)
    axios.get(dieturl)
      .then(function (response) {
        // 
        console.log(response.data, "foodddd")
        // setOngoingDietPlan({ servingsLeft: 0, TotalServings: 0 })
        // setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
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

            
            

         
    
    
  </div>
  );
}