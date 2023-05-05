import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
 // import Typography from 'src/theme/overrides/Typography';

import Typography  from '@mui/material/Typography';
export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = React.useState(0);

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
       
      

      {/* <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:40,maxHeight:50, m: 1, background:'purple' , }}>
        <CardContent>
          <Typography>Crabs:"20"</Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:40,maxHeight:50, m: 1, background:'purple' , }}>
        <CardContent>
          <Typography>Crabs:"20"</Typography>
        </CardContent>
      </Card> */}

      <Card sx={{ minWidth: 140,  minHeight:20,maxHeight:30, m: 1,  background:'purple' , color:"white"}}>
        
          <Typography sx={{textAlign:"center"}}>Crabs:"208"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' ,color:"white" }}>
        
          <Typography sx={{textAlign:"center"}}>Crabs:"20"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' ,color:"white" }}>
        
          <Typography sx={{textAlign:"center"}}>Crabs:"20"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' , color:"white"}}>
        
          <Typography sx={{textAlign:"center"}}>Crabs:"20"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' ,color:"white" }}>
        
          <Typography sx={{textAlign:"center"}}>Crabs:"20"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' ,color:"white" }}>
        
          <Typography sx={{textAlign:"center"}}>Crabs:"20"</Typography>
        
      </Card>
      <Card sx={{ minWidth: 140, maxWidth: 200, minHeight:20,maxHeight:30, m: 1,  background:'purple' , color:"white"}}>
        
          <Typography sx={{textAlign:"center"}}>Crabs:"20"</Typography>
        
      </Card>
      
      
      
      </Tabs>
    </Box>
  );
}
