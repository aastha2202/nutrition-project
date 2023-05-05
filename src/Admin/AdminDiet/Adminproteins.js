import { Grid, Typography, Select, FormControl, InputLabel } from '@mui/material';
import * as React from 'react';
// import '../../fonts/Poppins-BoldItalic.ttf'

// import '../../fonts/Poppins-ExtraBold.ttf';

import CreateDiet from "./component/CreateDiet";
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import ButtonBase from '@mui/material/ButtonBase'

import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Logo from "../../assets/nova.svg";
import Poultry from "../../assets/Poultry.svg";
import Fish from "../../assets/Fish.svg";

import Iconify from 'src/components/iconify/Iconify';
import { Link } from 'react-router-dom';
// import  "../styles.css";

const pageheading={
    fontFamily:"Inter-Bold",
    color:"#112866",
}

const buttonStyle = {

    position: 'absolute',
    right:20,
    borderRadius: "10px",
    boxShadow: '#c4c4c4',
    

}

const cardStyle = {
    backgroundColor: "#F0E7F5",
    margin: '1rem',
    boxShadow: '#c4c4c4'

}

const textparaStyle = {
    fontFamily: 'Inter-Regular',
    padding: "30px",
    color: "#9B54BF"
}

const maintitle = {
    fontFamily: 'Inter-Bold',
  
     // fontFamily: 'poppinsItalic',
    // // src: url('./fonts/Roboto-Regular.ttf') format('truetype'),
     fontStyle: "normal",
     fontWeight: "600",
     fontSize: "20px",
     color:"#112866",
   // fontFamily: "'Poppins', sans-serif",
    // src: `url(${poppinsItalic}) format('truetype')`,
    // lineHeight: "38px", 
};

const maintext = {
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color:"#112866",
    


};

const calories ={
    fontFamily: 'Inter-Regular',
    color:"#112866",
};
const caloriesremained={
    fontFamily: 'Inter-Regular',
    color:"black",

}




export default function Protein() {


    const [count1, setCount1] = useState(0);

    const handleIncrement1 = () => {
        setCount1(count1 + 1);
    };

    const handleDecrement1 = () => {
        if (count1 > 0) {

            setCount1(count1 - 1);
        }

    };





    const [count2, setCount2] = useState(0);

    const handleIncrement2 = () => {

        setCount2(count2 + 1);
    };

    const handleDecrement2 = () => {
        if (count2 > 0) {
            setCount2(count2 - 1);
        }

    };





    const [count3, setCount3] = useState(0);

    const handleIncrement3 = () => {
        setCount3(count3 + 1);
    };

    const handleDecrement3 = () => {
        if (count3 > 0) {
            setCount3(count3 - 1);
        }

    };


    return ( 
        <div>
  
  {
    <img
      src={Logo}
      alt="nova logo"
      style={{ height: "auto", width: "250px", marginLeft: "30px" }}
    />
  }
  


  <Grid container spacing={2}>
    <Grid item xs={6}>
     
      <Grid container  flexDirection="row">
                <Grid item textAlign={"center"} marginTop={0.5}  >
                <Link to="/dashboardadmin/adminitems">
                 <IconButton>
                 <Iconify icon="material-symbols:arrow-back-rounded" />
                   </IconButton></Link>

                </Grid>
               
                <Grid item>
                
            <Typography variant="h3" style={pageheading}  >
            Proteins 
            </Typography>
            
     
                </Grid>
                
            
                    
                        
                        
             
             </Grid>
        {/* <Typography variant="h3" style={pageheading} >Proteins </Typography> */}
        <Typography style={calories} sx={{marginLeft:4}}>45 Calories / Servings </Typography>
        <Typography style={calories} sx={{marginLeft:4}}>13 Servings / Day </Typography>
      
    </Grid>
    <Grid item xs={6}>
      <CardContent>
        <Card
          sx={{ Width: 200, height: 110 }}
          style={{ backgroundColor: "#E1B725", textAlign:"center" }}
        >
          <Typography variant="h3"  style={caloriesremained}>
            7
          </Typography>
          <Typography variant="h5" style={caloriesremained} >
            serving
          </Typography>
          <Typography variant="h5" style={caloriesremained} >
            remained
          </Typography>
        </Card>
      </CardContent>
    </Grid>
  </Grid>




  <CardContent>
    <Card>
      <Typography variant="body1" style={textparaStyle}>
        Weigh AFTER cooked / 1 serving = 1 cooked oz
      </Typography>
    </Card>
  </CardContent>
  <Card style={cardStyle}>
    <CardContent>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={2} md={2}>
          <ButtonBase>
            <img src={Poultry} alt="nova logo" />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} spacing={2} md={10}>
          <Grid item xs>
            <div style={{ display: "flex" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={maintitle}
                className="maintitlecss"
              >
                Poultry 
              </Typography>
              
            </div>
            <Typography variant="body2" mt={1} gutterBottom style={maintext}>
              white meat, skinless, chicken, turkey, hen, duck
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  <Card style={cardStyle}>
    <CardContent>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={2} md={2}>
          <ButtonBase>
            <img src={Fish} alt="nova logo" />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} spacing={2} md={10}>
          <Grid item xs>
            <div style={{ display: "flex" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={maintitle}
              >
                Poultry
              </Typography>
              
            </div>
            <Typography variant="body2" gutterBottom mt={1} style={maintext}>
              fresh, canned or frozen, Cod, Flounder, Haddock, Halibut.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  <Card style={cardStyle}>
    <CardContent>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={2} md={2}>
          <ButtonBase>
            <img src={Fish} alt="nova logo" />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} spacing={2} md={10}>
          <Grid item xs>
            <div style={{ display: "flex" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                 style = {maintitle }
              >
                Fish
              </Typography>
              
            </div>
            <Typography variant="body2" gutterBottom mt={1} style={maintext}>
              fresh, canned or frozen, Cod, Flounder, Haddock, Halibut.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>


  <CreateDiet />
</div>

            );
    }