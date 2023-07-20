import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { Grid,Card,CardContent, Typography} from '@mui/material';
const CardItem = () => {
  return (
    <>
    <Card  style={{margin:"10px"}}> 
              
              <Skeleton variant="h1" height="30px" width="30%" style={{margin:"16px"}} />
              <Card  style={{margin:"10px"}}>                       
               <Grid container item flexDirection="row" alignItems="center" justifyContent="center">
                <Grid item xs={4} container alignItems="center"  justifyContent="center">
                  <Skeleton>
                    <Grid item>
                    <Card sx={{
                      minHeight:10,
                      width: { xs: "90px", sm: "100px", md: "120px", lg: "130px" },
                      backgroundColor: "#8D25C1",
                      margin: "10px"
                    }}></Card>
                    
                    </Grid>
                  </Skeleton>
                </Grid>
              
                <Grid item xs={4}  container alignItems="center"  justifyContent="center">
                  <Skeleton>
                  <Card sx={{
                      minHeight: 10,
                      width: { xs: "90px", sm: "100px", md: "120px", lg: "130px" },
                      backgroundColor: "#8D25C1",
                      margin: "10px"
                    }}></Card>
                  </Skeleton>
                </Grid>
                <Grid item xs={4}  container alignItems="center"  justifyContent="center">
                  <Skeleton>
                  <Card sx={{
                      minHeight:10,
                      width: { xs: "90px", sm: "100px", md: "120px", lg: "130px" },
                      backgroundColor: "#8D25C1",
                      margin: "10px"
                    }}></Card>
                  </Skeleton>
                </Grid>
              </Grid>
              
 
                                             
                            </Card>
 
                   
                                
                            </Card>
      
    </>
  )
}

export default CardItem
