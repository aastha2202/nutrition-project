import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Grid,Card,CardContent, Typography} from '@mui/material';

const maincardStyle={
    // backgroundColor:"#F0E7F5",
    margin:"10px"

  };

const CardExercise = () => {
  return (
    <>
    <Card  style={maincardStyle}  >
                  <CardContent >
                  <Grid container  flex flexDirection={"row"} spacing={1} margin="10px" alignItems="center">
                    
                   <Grid item container  xs={11} alignSelf={'center'}>
                          <Grid item container flexDirection={"column"}>
                          <Typography variant="body1" Wrap component="span" >
                            
                              <Skeleton variant="text" width={210} height={40} />
                          </Typography> 
                          </Grid>
                          <Grid item  position={"end"}>
                          <Typography alignContent="center" variant="body1" component="span" >
                          {/* {item.servings_consumed} sets done  */}
                          <Skeleton variant="text" width={210} height={20} />
                          </Typography>
                          </Grid>

                          <Grid item container xs={1} sx={{ position:'absolute',right:10, marginTop:"15px" }}>
                           
                            <Skeleton variant="text" width={50} height={30} />
                          </Grid>
                         
                          
                      </Grid> 
                     
                  
                      
                      
                  </Grid>
                  </CardContent>
                  
  
             </Card> 
      
    </>
  )
}

export default CardExercise;
