import {React, useEffect, useState }from 'react';
// import Joyride from 'react-joyride';
// import '../css/DietPlan.css';
import {  ButtonBase, } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link as RouterLink, useLocation ,useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import {   Select, FormControl, InputLabel } from '@mui/material';
import Card from '@mui/material/Card';
import axios from 'axios';
import CardActions from '@mui/material/CardActions';
import Loader from 'react-loader-spinner';
import CardContent from '@mui/material/CardContent';
import HashLoader from "react-spinners/HashLoader";
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Joyride, { STATUS } from 'react-joyride';
// import { MarginO } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import Typography from '@mui/material/Typography';
 // import { makeStyles } from '@material-ui/core/styles';
 import { ClipLoader,RotatingLines } from 'react-spinners';
import { SyncLoader } from 'react-spinners';
// import CardMedia from '@material-ui/core/CardMedia';
// import Poultry from "../pictures/Poultry.svg";
import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import TitleLogo from "../../assets/TitleLogo.svg";
import Arrowforward from "../../assets/Arrowforward.svg";
import ProteinChicken from "../../assets/ProteinChicken.svg"
import Exerciselogo from "../../assets/Exerciselogo.svg";
// import companyimage from '../images/CompanyName.png';

// import chicken from '../images/chicken.png';

// import peas from '../images/peas.png'
import CircularProgress from '@mui/material/CircularProgress';
// import dinning from '../images/dinningicon.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import  "../styles.css";
// import Searchbar from 'src/layouts/dashboard/header/Searchbar';
import Searchbar from 'src/layouts/dashboard/nav/Searchbar';



const title={
    
    fontFamily:"Inter-Bold",
    fontSize:"20px" ,
    color:"#112866",
};
 const caloriesremained={
    fontFamily:"Inter-Regular",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    color:"#112866",
 };

 const exercise={
    fontFamily:"Inter-Regular",
    fontSize:"12px" ,
    color:"white",
    fontWeight:"20px",

 }
 

const plusStyle = {
    width: "34px",
    height: "26px",
    backGround: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px"
   
  };
  const proteinStyle={
    fontFamily: 'Inter-SemiBold',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    // lineHeight: "38px",

    color: "#112886",

   
  };
  const totalservingsStyle={
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    // lineHeight: "15px",
    color:"#112866",
    // color: "#000000"
  };
  const currentdate={
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize:"20px",
    lineHeight: "15px",
    color:"white",
    marginLeft:'1'

  };

const day={
    fontFamily: 'Inter-Regular',
    fontSize:"20px" ,
    
    marginTop:"10px",
    alignSelf:"center",
    // color:"#112866",
}

const year={
    fontFamily: 'Inter-Regular',
    fontSize:"15px" ,
    
    marginBottom:"10px",
    color:"#112866",
};

const caloriesremainedNo={
    color:"#112866",
    fontSize:"30px"
}
const maintext = {
  fontFamily: 'Inter-Regular',
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "21px",
  color:"#112866",
  


};


  const dayservingsStyle={
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    color:"#112866",
       
  };

  const maincardStyle={
    backgroundColor:"#F0E7F5",
    margin:"10px"

  };
  const todaysgoal={
    fontFamily:'Inter-Regular',
    fontSize:"15px" ,
    
   // marginLeft:"0px",
    color:"#112866",
  };

  const servingleft={
    fontFamily:'Inter-Regular',

    fontSize:"20px" ,
    color:"#E1B725"
  };
  const regular={
    fontFamily:'Inter-Regular',
    color:"#112866"
  }
  const calories ={
    fontFamily: 'Inter-Regular',
    color:"#112866",
};


export default function Exercise(){
  const location = useLocation();
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState({})
  const [dietData, setdietData] = useState([])
  const [oneDietPlan, setOneDietPlan] = useState([])
  // const isFocused = useIsFocused();


  useEffect(() => {
    
      getValues()
    
  }, [])

  const getValues = async () => {
    // console.log("getValuess calledddd")
   
    let start_date = await localStorage.getItem('exercisestartDate')
    let end_date = await localStorage.getItem('exerciseendDate')
    // localStorage.removeItem(exercisestartDate);
    await apiCall(start_date, end_date)
  }


  const apiCall = async (start_date, end_date) => {
    setLoading(true)
    let userIdAsync = localStorage.getItem('userId')
    console.log(start_date, end_date);

    if (start_date) {
      axios.get(`https://novapwc.com/api/getAllDietPlan?userid=${userIdAsync}&startdate=${start_date}&enddate=${end_date}&type=exercise&status=today`)
        .then(function (response) {
        if (response?.data?.Status=== "No content"){
          setLoading(false)
          console.log(response?.data?.Status ,"======ressssssss")
        }
          
          // console.log(response?.data?.data, "dieettttttttttt")
          response.data.data.servingsLeft = parseInt
            (response?.data?.data.RecommendedServings - response?.data?.data.CosumedServings)
          setdietData(response?.data?.data)
          // console.log(data)
          axios.get(`https://novapwc.com/api/getOneDietPlan?userid=${userIdAsync}`)
            .then(function (response) {

              let resDietPlan = response?.data?.data
              // console.log(response?.data?.data, "one diet plannnn rrrrrrrrrr")
              // setOneDietPlan(response?.data?.data)
              setLoading(false)
              axios.get(`https://novapwc.com/api/getAllCategories?type=exercise`)
                .then(function (response) {
                  // setLoading(false)
                //  console.log(response?.data?.data,"-------eeeeeeeeee")
                  let existingCategories = response?.data?.data.map(e => e.category_name)
                  setData(response?.data?.data)
                  //  [{"category": "Pawan android", "diet_id": 709, "end_date": "08-23-2023", "interval": "2 month", "recommended_servings": 12, "servings_consumed": 0, "start_date": "05-25-2023", "total_servings": 1080, "type": "food", "user_id": 35}]} 
                  // console.log(response?.data?.data)
                  let dietPlan = [], dietCategories = []
                  for (let i = 0; i < resDietPlan.length; i++) {
                    let obj = resDietPlan[i]
                    if (existingCategories.includes(obj?.category)){
                    if (dietCategories.includes(obj?.category)) {
                      let index = dietPlan.findIndex((x) => x.category === obj?.category)
                      dietPlan[index].servings_consumed = dietPlan[index].servings_consumed + obj?.servings_consumed
                    }
                    else {
                      dietCategories.push(obj?.category)
                      dietPlan.push(obj)
                    }
                  }
                    if (i == resDietPlan.length - 1) {
                      // console.log(dietPlan)
                      setOneDietPlan(dietPlan)
                    }
                  }

                })
                
                .catch(function (error) {
                  // Alert.alert("something went wrong");
                  // console.log(error);
                });
              // console.log(response?.data, "response..............responseeeeee in get one diet plannnnn")
            })
            .catch(function (error) {
              // Alert.alert("something went wrong");
              // console.log(error);
            });


        })
        .catch(function (error) {
          // Alert.alert("something went wrong");
          // console.log(error);
          
        });
        // setLoading(false)
    }
    else{
      setLoading(false)
      console.log("---loader checking in else part")
    }
    
    // setLoading(false)
    // setLoading(false)
    // setTimeout(() => {
    //   console.log("Delayed for 1 second.");
    //   setLoading(false)
    // }, 500);

  }



  const getCurrentDate = () => {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    if (date < 10) date = '0' + date;
    if (month < 10) month = '0' + month;
    return date + '-' + month + '-' + year;//format: d-m-y;
  }


  let navigate = useNavigate();
 
  const setDietId = (item) => {
    let catid = data.filter(e => e.category_name == item.category)
    let id = null
    if (catid) { id = catid[0].category_id }
    localStorage.setItem('params',JSON.stringify({ cat: id, diet_id: item?.diet_id, category: item.category, type: "exercise", servingsConsumed: item.servings_consumed,recommended_servings:item.recommended_servings, apiCall: apiCall }))
    navigate('/dashboard/itemofexercise')
    

  }
  // console.log(state,"-----state checking")
  const [count3, setCount3] = useState(0);

    const handleIncrement3 = () => {
      setCount3(count3 + 1);
    };
  
    const handleDecrement3 = () => {
        if (count3 > 0){
            setCount3(count3 - 1);
        }
      
    };

//  const [ spinner, setSpinner ] = useState(true);


  
  
 

    return (  
     <>
      {/* <Searchbar/>  */}

     {loading?( <div className="loader-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          
          {/* <ClipLoader height={100} width={100}  color="grey"  wrapperStyle={{}}  wrapperClass=""  visible={true}  ariaLabel='oval-loading'  secondaryColor="#4fa94d"  strokeWidth={2} strokeWidthSecondary={2}/> */}
          <CircularProgress/>
        </div>):( <>
        
        {/* <CardContent className='dietplan-companyname'>
              <img src={Logo} alt="loading" className='dietplan-companyname-image'/>
              
          </CardContent> */}
          <Grid container className="step-6"  xs={12} style={{display:'flex', marginLeft:"15px", flexDirection:"row",position:'relative'}}>
             {/* <Grid item xs={12}> */}
           
                       <Typography  variant='h5' style={title} >
                            Exercise Plan
                        </Typography>    

             
             {/* </Grid> */}
          
        </Grid>
       
        {(dietData?.RecommendedServings > 0)?(  <Grid>
          <Grid>
              <Card  style={{backgroundColor:"#D1A6E7",margin:"10px"}}> 
              {/* background: #8D25C157; */}

                  <Grid container  item flexDirection={'row'} alignItems="center"  >
                    <Grid item xs={6}> 
                  <Card  sx={{minHeight:80}} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                      <Grid container mt={1} justifyContent="center" alignItems="center" item flexDirection="row" >
                      
                         <Grid item mt={3} alignSelf={"center"} >
                          
                         <Typography variant="body1" component="span" style={currentdate} >
                                          {getCurrentDate()}
                                  </Typography>
                          </Grid> 
                          {/* <Grid item>
                              <Grid  container flexDirection="column"  style={{backgroundColor:"#8D25C1",margin:"10px"}} >
                                  <Grid item>
                                      <Typography variant="h5" component="span" style={month}>
                                              March
                                      </Typography>
                                  </Grid>
                              
                                  <Grid item>
                                      <Typography  variant="h5" component="span" style={year}>
                                              2023
                                      </Typography>
                                  </Grid>
                              </Grid>
                          </Grid>
                          */}
                          
                      </Grid>
                  </Card>
                  </Grid> 

                  <Grid item xs={6}>
                  <Card  sx={{minHeight:80}} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                  <Grid container  justifyContent="center" alignItems="center" flexDirection="column" >
                      
                      <Grid item mt={1}>
                      <Typography style={exercise}>Today's Exercise</Typography>
                      {/* style={todaysgoal} */}
                      </Grid>
                      <Grid item >

                     
                      <Grid  container flexDirection="row">
                         <Grid item ><Typography style={{ fontSize:"35px" ,color:"white",fontWeight:"30px"}}> {dietData?.RecommendedServings}  
                         </Typography></Grid>
                         <Grid item><Typography mt={3}  ml={0.5} style={exercise}>Sets</Typography></Grid>
                          </Grid>
                      </Grid>
                      
                      
    
                  </Grid>

                  </Card>
                  </Grid>


                  </Grid>
                  
                  
              </Card>
          </Grid>  
                  
          <Card  style={{backgroundColor:"#2c2b2b",margin:"10px"}} >
                  <Grid container    sx={{textDecoration:'none'}} alignItems="center" >
                  <Grid item xs={8} alignItems="flex-end"  >
                      <Grid item  container justifyContent="center" alignItems="center">
                      <CardContent sx={{alignItems:"center",alignSelf:'center',alignContent:"center"}}>
                              <Typography variant="body1" component="span"   style={servingleft}>
                              {dietData?.servingsLeft}  sets left 
                                  
                              </Typography>
                               </CardContent>
                      </Grid>
                         
                      </Grid>             

                      <Grid item xs={4} alignItems="flex-end"  >
                      <Grid item  container justifyContent="center" alignItems="center">
                      <CardContent sx={{alignItems:"center",alignSelf:'center',alignContent:"center"}}>
                               {/* <img src={Diet} className='dinning-img' alt="dinning" style={{display: 'block', margin: 'auto'}}/> */}
                               <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                               </CardContent>
                      </Grid>
                         
                      </Grid>
                      
               </Grid>
                  
                  
 
             </Card> 
             {/* oneDietPlan?.length>0         */}
   {(oneDietPlan.length>0)?(oneDietPlan?.map(item=>{
      return(
        // <Grid container flexDirection={"row"} item  >
        //   <Grid item sx={12} > 
          <Card  style={maincardStyle}  >
                  <CardContent onClick={()=>{setDietId(item)}} sx={{textDecoration:'none',cursor:"pointer"}}>
                  <Grid container  flex flexDirection={"row"} spacing={1} margin="10px" alignItems="center">
                    
                   <Grid item container  xs={11} alignSelf={'center'}>
                          <Grid item container flexDirection={"column"}>
                          <Typography variant="body1" Wrap component="span" style={proteinStyle}>
                              {item.category}
                          </Typography> 
                          </Grid>
                          <Grid item  position={"end"}>
                          <Typography alignContent="center" variant="body1" component="span" style={totalservingsStyle}>
                          {item.servings_consumed} sets done 
                          </Typography>
                          </Grid>

                          <Grid item container xs={1} sx={{ position:'absolute',right:0 }}>
                            <ArrowForwardIcon/>
                          </Grid>
                         
                          
                      </Grid> 
                     
                  
                      
                      
                  </Grid>
                  </CardContent>
                  
  
             </Card>  

              // {/* </Grid>  
              // </Grid> */}

      );
   })):(
   <Card sx={{ margin:"10px" ,maxHeight:"800px"}}>
            <CardContent>
            <Typography   align="center"  style={title} >No exercise assigned</Typography>
            
            </CardContent>
            </Card> )
   }

   
  </Grid>

          
       ):(<Card sx={{backgroundColor:"#8D25C1", margin:"10px" ,maxHeight:"800px"}}>
            <CardContent>
            <Typography  align="center" style={{calories,color:"white"}} > You don't have any ongoing  exercise plans. Please consult Dietician.</Typography>
            </CardContent>
            </Card>)}



 
       </>)}
      
       </>
     
       

         
    );
}
