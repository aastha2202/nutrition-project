import {React, useEffect, useState }from 'react';
import axios from 'axios';
// import Joyride from 'react-joyride';
import Joyride, { STATUS } from "react-joyride";
// import '../css/DietPlan.css';

import { Link as RouterLink, useLocation ,useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import {   Select, FormControl, InputLabel } from '@mui/material';
import Card from '@mui/material/Card';
// import axios from 'axios';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';

import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { MarginOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import Typography from '@mui/material/Typography';
 // import { makeStyles } from '@material-ui/core/styles';

// import CardMedia from '@material-ui/core/CardMedia';
// import Poultry from "../pictures/Poultry.svg";
import TitleLogo from "../../assets/TitleLogo.svg";
import Diet from "../../assets/Diet.svg";
import Peas from "../../assets/Peas.svg";
import Arrowforward from "../../assets/Arrowforward.svg";
import ProteinChicken from "../../assets/ProteinChicken.svg"

// import companyimage from '../images/CompanyName.png';

// import chicken from '../images/chicken.png';

// import peas from '../images/peas.png'

// import dinning from '../images/dinningicon.png';

// import  "../styles.css";
import CircularProgress from '@mui/material/CircularProgress';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { step3ClassName, step4ClassName } from '../Home/Home';
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
  const day={
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize:"20px",
    lineHeight: "15px",
    color:"white",
    marginLeft:'1'

  };

const month={
    fontFamily: 'Inter-Regular',
    fontSize:"15px" ,
    
    marginTop:"10px",
    alignSelf:"center",
    color:"#112866",
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



export default function DietPlan(){
  const location = useLocation();

const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [DietData, setDietData] = useState([])
  const [oneDietPlan, setOneDietPlan] = useState([])
  // const isFocused = useIsFocused();


  useEffect(() => {
    
      getValues()
    
  }, [])

  const getValues = async () => {
    // console.log("getValuess calledddd")
    let start_date = await localStorage.getItem('dietstartDate')
    let end_date = await localStorage.getItem('dietendDate')
    await apiCall(start_date, end_date)
  }


  const apiCall = async (start_date, end_date) => {
    setLoading(true)
    let userIdAsync = localStorage.getItem('userId')
    // console.log(start_date, end_date)
    if (start_date) {
      axios.get(`https://novapwc.com/api/getAllDietPlan?userid=${userIdAsync}&startdate=${start_date}&enddate=${end_date}&type=food&status=today`)
        .then(function (response) {
          if (response?.data?.Status=== "No content"){
            setLoading(false)
            console.log(response?.data?.Status ,"======ressssssss")
          }

          // console.log(response.data.data, "dieettttttttttt")
          response.data.data.servingsLeft = parseInt
            (response?.data?.data.RecommendedServings - response?.data?.data.CosumedServings)
          setDietData(response?.data?.data)
          // console.log(data)
          axios.get(`https://novapwc.com/api/getOneDietPlan?userid=${userIdAsync}`)
            .then(function (response) {

              let resDietPlan = response?.data?.data
              // console.log(response?.data?.data, "one diet plannnn")
              // setOneDietPlan(response?.data?.data)
              setLoading(false)
              axios.get(`https://novapwc.com/api/getAllCategories?type=food`)
                .then(function (response) {

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
    }
    else {
      setLoading(false)
    }
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
    localStorage.setItem('params',JSON.stringify({ cat: id, diet_id: item?.diet_id, category: item.category, type: "food", servingsConsumed: item.servings_consumed,recommended_servings:item.recommended_servings, apiCall: apiCall }))
    navigate('/dashboard/itemsofdietplan')
    

  }
  // console.log(state,"-----state checking")

  const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering

  // useEffect(() => {
  //   console.log("loader is onnnnnnn");

  //   // <img src={Diet} alt="loader image" width="100" height="100"/>
  //   setTimeout(() =>{ 

  //     setSpinner(false)
  //   }, 700)
  // }, []);


  // tour working from here
  const tourSteps = [
    {
      target: '.tour-element-1',
      content: 'Step 1: Welcome to the tour!',
      placement: 'bottom',
    },
    {
      target: '.tour-element-2',
      content: 'Step 2: Here is another element to showcase.',
      placement: 'top',
    },
  ];
  const [isTourOpen, setIsTourOpen] = useState(false);

  const handleTourOpen = () => {
    setIsTourOpen(true);
  };

  const handleTourClose = () => {
    setIsTourOpen(false);
  };

  // 2nd try
  const [{ run, steps }, setState] = useState({
    run: true,
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
        target: "#step-1",
        title: "First step"
      },
      {
        content: <h2>Here is second step!</h2>,
        placement: "bottom",
        target: "#step-2",
        title: "Second step",

        // <Link to={user.id}>{user.name}</Link>
      },
      {
        content: <h2>Here is third step!</h2>,
        placement: "bottom",
        target: "#step-3",
        title: "Third step"
      },
      {
        content: <h2>Here is fourth step!</h2>,
        placement: "bottom",
        target: "#step-4",
        title: "Fourth step"
      },
      {
        content: <h2>Here is fifth step!</h2>,
        placement: "bottom",
        target: "#step-5",
        title: "Fifth step"
      },
      {
        content: <h2>Here is six step!</h2>,
        placement: "bottom",
        target: "#step-6",
        title: "Six step"
      }, 
    ]
  });
  
// const [close,setClose]=useState(true);
//   const handleJoyrideCallback = (data) => {
//     const { status } = data;

//     if (status === 'finished') {
//       setState((prevState) => ({
//         ...prevState,
//         run: false,
//       }));
//     }
//   };
// const [loading, setLoading] = useState(true)

    return ( 
      // !spinner &&

      <>
      {loading?(<div className="loader-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          
          {/* <ClipLoader height={100} width={100}  color="grey"  wrapperStyle={{}}  wrapperClass=""  visible={true}  ariaLabel='oval-loading'  secondaryColor="#4fa94d"  strokeWidth={2} strokeWidthSecondary={2}/> */}
          <CircularProgress/>
        </div>):(< >

{/* <div>
{close &&(<div style={{
background: "#797979",
height: "100vh",
display: "flex",
gap: "8px",
padding: 10,
color: "white",
justifyContent: "center",
alignItems: "center"
}}>
<Joyride
continuous
// callback={handleJoyrideCallback}
callback={() => {}}
run={run}
steps={steps}
hideCloseButton
scrollToFirstStep
showSkipButton
showProgress
/>
{
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
}

</div>) }



</div> */}
  {/* <CardContent className='dietplan-companyname'>
      <img src={Logo} alt="loading" className='dietplan-companyname-image'/>
      
  </CardContent> */}
  <Grid container   style={{display:'flex',flexDirection:"row",position:'relative'}}>
     <Grid item xs={6} className="step-4"  >
     <CardContent  >
     
               <Typography  variant='h5' style={title} >
                    Diet plan
                </Typography>    

     </CardContent>
     </Grid>

     {/* {DietData?.RecommendedServings >0 ?(0):(0)} */}
     
  <Grid  item xs={6} mt={1} >
 
    <CardContent  >
            {/* <FormControl  sx={{ position:'absolute',right:6 }} size="small">
           <Select sx={{backgroundColor:"white"}} defaultValue="Today">
           <MenuItem value="Today"  >Today</MenuItem>
           <MenuItem value="Next Week">Next Week</MenuItem>
           <MenuItem value="Previous Week">Previous Week</MenuItem>
           </Select>
           </FormControl> */}
       <br/>  
    </CardContent>
    </Grid>
</Grid>

{DietData?.RecommendedServings >0 ?(<Grid>
  <Grid>
      <Card  style={{backgroundColor:"#D1A6E7",margin:"10px"}}>
          <Grid container  item flexDirection={'row'} alignItems="center"  >
            <Grid item xs={6}> 
          <Card  sx={{minHeight:80}} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
              <Grid container mt={1} justifyContent="center" alignItems="center" item flexDirection="row" >
              
                 <Grid item mt={3} alignSelf={"center"} >
                  
                 <Typography variant="body1" component="span" style={day} >
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
              
              <Grid item mt={1} className={step4ClassName} >
              <Typography style={exercise}>Today's Intakes</Typography>
              </Grid>
              <Grid item>

             
              <Grid  container flexDirection="row">
                 <Grid item ><Typography style={{ fontSize:"30px" ,color:"white",fontWeight:"40px"}}> {DietData?.RecommendedServings} </Typography></Grid>
                 <Grid item><Typography mt={2}  ml={0.5} style={exercise}>Servings</Typography></Grid>
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
                      {DietData?.servingsLeft}  servings left 
                          
                      </Typography>
                       </CardContent>
              </Grid>
                 
              </Grid>             

              <Grid item xs={4} alignItems="flex-end"  >
              <Grid item  container justifyContent="center" alignItems="center">
              <CardContent sx={{alignItems:"center",alignSelf:'center',alignContent:"center"}}>
                       <img src={Diet} className='dinning-img' alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                       </CardContent>
              </Grid>
                 
              </Grid>
              
       </Grid>
          
          

     </Card> 
          
{oneDietPlan?.length>0?(oneDietPlan.map(item=>{
return(
// <Grid container flex sx={12} lg={4}>
  <Card  style={maincardStyle}  >
          <CardContent onClick={()=>{setDietId(item)}} sx={{textDecoration:'none', cursor:"pointer"}}>
          <Grid container spacing={1} margin="10px" alignItems="center">
           <Grid item xs={11}  >
           
           <Grid item  alignSelf={'center'}>
                  <Grid item container flexDirection={"column"}>
                  <Typography variant="body1" Wrap component="span" style={proteinStyle}>
                      {item.category}
                  </Typography> 
                  </Grid>
                  <Grid item>
                  <Typography alignContent="center" variant="body1" component="span" style={totalservingsStyle}>
                  {item.servings_consumed} servings consumed
                  </Typography>
                  </Grid>    
              </Grid> 
             
              </Grid>    
             
              <Grid item container xs={1} sx={{ position:'absolute',right:2 }}>
                    <ArrowForwardIcon/>
                  </Grid>

              
          </Grid>
          </CardContent>
          

     </Card>
    //  </Grid>  

);
})):(<Card sx={{ margin:"10px" ,maxHeight:"800px"}}>
<CardContent>
<Typography   align="center"  style={title} >No categories assigned</Typography>

</CardContent>
</Card> )}

</Grid>):(<Card sx={{backgroundColor:"#8D25C1", margin:"10px" ,maxHeight:"800px"}}>
    <CardContent>
    <Typography  align="center"    style={{calories,color:"white"}}> You don't have any ongoing diet  plans. Please consult Dietician.</Typography>
    </CardContent>
    </Card>)}


</>)}
      </>

      
          
          

         
        
      

         
    );
}
