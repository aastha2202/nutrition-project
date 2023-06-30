import { CardContent, Grid, ButtonBase, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
// import WaterWalk from "./pictures/Waterwalk.svg"
// import Lunge from "./pictures/Lunge.svg"
// import Sidestep from "./pictures/Sidestep.svg"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Poultry from "../../assets/Poultry.svg";
import SideStepping from "../../assets/SideStepping.svg";
import WaterWalking from "../../assets/WaterWalking.svg";
import ForwardLunge from "../../assets/ForwardLunge.svg";
import Logo from "../../assets/nova.svg";
import axios from "axios";
import Plusimage from "../../assets/Plusimage.svg";
import CreateExercise from "./components/CreateExercise";






const title={
  fontFamily:"Inter-Bold",
  fontSize:"30px",
  color:"#112886" 
};


const maintext = {
  fontFamily: 'Inter-Regular',
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "21px",
  color:"#112866",
  


};

const textparaStyle = {
  fontFamily: 'Inter-Regular',
  padding: "30px",
  color: "#9B54BF"
 
};

const maintitle = {
  fontFamily: 'Inter-Bold',

   // fontFamily: 'poppinsItalic',
  //  src: url('./fonts/Roboto-Regular.ttf') format('truetype'),
   fontStyle: "normal",
   fontWeight: "600",
   fontSize: "20px",
   color:"#112866"
 // fontFamily: "'Poppins', sans-serif",
  // src: `url(${poppinsItalic}) format('truetype')`,
  // lineHeight: "38px", 
};

const regular={
  fontFamily:'Inter-Regular',
  textAlign:"center",
  color:"black"

}


const Aerobic = forwardRef((props, ref) => {

    const [count1, setCount1] = useState(0);
    const location =useLocation();
    const [dataOfExercise,setDataOfExercise]=useState(location?.state?.data);
    console.log(dataOfExercise,'dataOfExercise');
    const [exerciseData,setExerciseData]=useState([])
    const childref=useRef();

    const handleIncrement1 = () => {
      setCount1(count1 + 1);
    };
  
    const handleDecrement1 = () => {
        if (count1 > 0){

            setCount1(count1 - 1);
        }
      
    };






    const [count2, setCount2] = useState(0);

    const handleIncrement2 = () => {
        
      setCount2(count2 + 1);
    };
  
    const handleDecrement2 = () => {
        if (count2 > 0){
            setCount2(count2 - 1);
        }
      
    };

    



    const [count3, setCount3] = useState(0);

    const handleIncrement3 = () => {
      setCount3(count3 + 1);
    };
  
    const handleDecrement3 = () => {
        if (count3 > 0){
            setCount3(count3 - 1);
        }
      
    };
  useEffect(()=>{
    apiHit();
  },[])

  console.log(dataOfExercise.category_id,'dataOfExercise.category_id');

    const apiHit=aysnc=>{
      let config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: `http://44.212.136.151:8081/api/getItemsOfCategory?category_id=${dataOfExercise.category_id}&type=exercise`,
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(response?.data?.data,'responseDate');
        setExerciseData(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }



  return (
    <div>
      <img
        src={Logo}
        alt="nova logo"
        style={{ height: "auto", width: "250px", marginLeft: "30px" }}
      />
      
        
    <CardContent>
            <Typography x variant="h3" style={title}>
             {dataOfExercise.category_name}
            </Typography>
            
     </CardContent>
       
        
     

      <Card style={{ margin: "1rem"}}>
        <Typography  style={textparaStyle}>
          Engaging in Water Aerobics is a great way to stay active while
          limiting pain associated with arthritis.The water is a great place to
          get moving while adding resistance and without putting too much
          pressure on your joints.
        </Typography>
      </Card>

      
      

      {
        exerciseData?.map(item=>{
          return (
            <Card style={{backgroundColor: "#F0E7F5", margin: "1rem", boxShadow: "#c4c4c4", }}>
            <CardContent>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={2} md={2}>
                  <ButtonBase sx={{ width: "auto", height: "auto" }}>
                    <img src={SideStepping} alt="nova logo" style={{ height: "100", width: "100px" }} />
                  </ButtonBase>
                </Grid>
                <Grid sx={{display:'flex',justifyContent:'space-between'}}item xs={10} spacing={2} md={10}>
                  <Grid item >
                      <Grid container flexDirection={"row"}>
                       <Grid item >
                      <Typography gutterBottom variant="h5" component="div" style={maintitle}>
                       {item.item_name}
                      </Typography>
                      </Grid>
                      
    
                      </Grid>     
                    
                    <Typography variant="body2" mt={1} gutterBottom style={maintext}>
                     {item.description}
                    </Typography>
                   
                  </Grid>
                  <Grid item>

                  <Button onClick={(e)=>{childref?.current?.handleClickEdit(item,'Edit')}}>Edit</Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          )
        })
      }
     




    
<CreateExercise ref={childref} />
      

      



    
    </div>
  );
})

export default  Aerobic;
