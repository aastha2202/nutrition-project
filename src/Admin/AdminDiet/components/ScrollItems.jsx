import * as React from 'react';
import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
 // import Typography from 'src/theme/overrides/Typography';

import Typography  from '@mui/material/Typography';


const cardstyle={
  fontFamily: 'Inter-Regular',
  color:"white",
  fontSize:"12px",
  textAlign:"center",
 
  
};



export default function ScrollableTabsButtonPrevent(props) {
  const [value, setValue] = React.useState(0);

  const [categoryData,setCategoryData]=useState(props.category)
  // setCategoryData(props.category)
  //console.log(categoryData,'----propscategoryData');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{  bgcolor: 'background.paper', width:"100%" ,  }}>
      <Tabs
      
        // value={value}
        // onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
       
      

    {
      categoryData?.map(item=>{
        return (
          <Card sx={{ minWidth: 200, m: 1,p:2,  background:'#BF40BF' , color:"white"}} >
        
          <Typography style={cardstyle} mt={0.3} >Category:{item.Category}</Typography>
          <Typography style={cardstyle} mt={0.3} >Recommended Servings:{item.recommended_servings}</Typography>
          <Typography style={cardstyle} mt={0.3} >Total Servings:{item.recommended_servings}</Typography>
        
      </Card>
        );
      })
    } 

      
      {/* <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' ,color:"white" }}>
        
          <Typography sx={cardstyle}  mt={0.3}>Crabs:"20"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' ,color:"white" }}>
        
          <Typography style={cardstyle}  mt={0.3}>Crabs:"20"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' , color:"white"}}>
        
          <Typography style={cardstyle}  mt={0.3}>Crabs:"20"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' ,color:"white" }}>
        
          <Typography style={cardstyle}  mt={0.3}>Crabs:"20"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' ,color:"white" }}>
        
          <Typography style={cardstyle}  mt={0.3}>Crabs:"20"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' , color:"white"}}>
        
          <Typography style={cardstyle}  mt={0.3}>Crabs:"20"</Typography>
        
      </Card> */}
      
      
      
      </Tabs>
    </Box>
  );
}