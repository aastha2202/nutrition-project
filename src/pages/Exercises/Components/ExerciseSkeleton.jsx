import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Grid,Card,CardContent, Typography} from '@mui/material';
import CardExercise from './CardExercise';

const ExerciseSkeleton = () => {
  return (
    <>
    
    <Skeleton variant="h2" style={{margin:"14px"}} />
         
                  <Card  style={{margin:"10px"}}> 
              
    
                      
     <Grid container item flexDirection="row" alignItems="center" justifyContent="center">
      <Grid item xs={6} container alignItems="center"  justifyContent="center">
        <Skeleton>
          <Grid item>
          <Card sx={{
            minHeight: 80,
            width: { xs: "150px", sm: "300px", md: "400px", lg: "400px" },
            backgroundColor: "#8D25C1",
            margin: "10px"
          }}></Card>
          
          </Grid>
        </Skeleton>
      </Grid>
    
      <Grid item xs={6}  container alignItems="center"  justifyContent="center">
        <Skeleton>
        <Card sx={{
            minHeight: 80,
            width: { xs: "150px", sm: "300px", md: "400px", lg: "400px" },
            backgroundColor: "#8D25C1",
            margin: "10px"
          }}></Card>
        </Skeleton>
      </Grid>
    </Grid>
    
                      
                      
                  </Card>

                



                  <Card  style={{margin:"10px"}}> 
              
    
                      
              <Grid container item flexDirection="row" alignItems="center" justifyContent="center">
               <Grid item xs={9} container alignItems="center"  justifyContent="center">
                 <Skeleton>
                   <Grid item>
                   <Card sx={{
                     minHeight: 80,
                     width: { xs: "200px", sm: "400px", md: "500px", lg: "600px" },
                     backgroundColor: "#8D25C1",
                     margin: "10px"
                   }}></Card>
                   
                   </Grid>
                 </Skeleton>
               </Grid>
             
               <Grid item xs={3}  container alignItems="center"  justifyContent="center">
                 <Skeleton>
                 <Card sx={{
                     minHeight: 80,
                     width: { xs: "50px", sm: "100px", md: "150px", lg: "200px" },
                     backgroundColor: "#8D25C1",
                     margin: "10px"
                   }}></Card>
                 </Skeleton>
               </Grid>
             </Grid>
             
                               
                               
                           </Card>
                    
          
                 <CardExercise/>
                 <CardExercise/>
                 <CardExercise/>
                 <CardExercise/>
                 {/* <div className="loader-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
              
             
              <CircularProgress/>
            </div> */}
         </>
  )
}

export default ExerciseSkeleton;
