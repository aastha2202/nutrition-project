import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { Grid,Card,CardContent, Typography} from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
const maintext = {
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color:"#112866",

};

const CardItem = () => {
  return (
    <>
        <Card style={{margin: '1rem',
    boxShadow: '#c4c4c4'}}>
<CardContent >

<Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={3}  sx={{textAlign:"center"}} >
          <ButtonBase >
          {/* <Skeleton variant="circular" width={40} height={40} /> */}
            <Skeleton variant="circular" style={{width: '70px',height: '70px'}}  />
          </ButtonBase>
        </Grid>
        <Grid container item xs={9} spacing={1} >
          {/* <Grid item xs> */}
            {/* <div style={{ display: "flex" }}> */}
            <Grid item xs={8} >
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              </Grid>
              <Grid item xs={4} >
    
              <Card sx={{position:'absolute', minWidth:"15%"  , right:10,borderRadius:1,boxShadow: '#c4c4c4'}}  >
             

              <Skeleton variant="rectangular" />


      
               
              </Card>
              </Grid>
            

           <Grid item xs={12}>
            <Typography variant="body2" gutterBottom mt={0.6} style={maintext}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </Typography>
            </Grid>


          </Grid>
        </Grid>

</CardContent>
</Card>
      
    </>
  )
}

export default CardItem
