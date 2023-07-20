import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Grid,Card,CardContent, Typography} from '@mui/material';
import CardItem from './CardItem';


const ItemsSkeleton = () => {
  return (
    <>
    <Grid container spacing={2}>
<Grid  item xs={7}>
<CardContent >

<Grid  container flexDirection={"row"} >

<Grid item alignSelf={"center"}>
  
        {/* <Skeleton variant="text" /> */}
        </Grid>
        <Grid item>
          
          
        <Skeleton variant="text" width={200} height={30}  />
        </Grid>
  </Grid>


<Skeleton variant="text"width={200} height={20}/>{/* <Typography style={calories}>{params?.recommended_servings} recommended / Sets </Typography> */}
{/* <Typography style={calories}>13 Sets / Day </Typography> */}
</CardContent>
</Grid>
<Grid item xs={4.5}>
<Skeleton>


<Card
sx={{ Width: 200, height: 110 }}
style={{ backgroundColor: "#E1B725", textAlign:"center",}}
>
<Typography variant="h3"  > 

<Skeleton variant="text" />
</Typography>
<Typography variant="h5"  >
<Skeleton variant="rectangular" width={210} height={60} />
</Typography>
<Typography variant="h5"  >
<Skeleton variant="rectangular" width={210} height={60} />
</Typography>
</Card>


</Skeleton>
</Grid>



</Grid>


<Card  style={{margin:"15px"}}> 
          

                  
          <Grid container item flexDirection="row" alignItems="center" justifyContent="center">
           <Grid item xs={12} container alignItems="center"  justifyContent="center">
             <Skeleton>
               <Grid item>
               <Card sx={{
                 minHeight: 40,
                 width: { xs: "300px", sm: "700px", md: "800px", lg: "900px" },
                 backgroundColor: "#8D25C1",
                 margin: "10px"
               }}></Card>
               
               </Grid>
             </Skeleton>
           </Grid>
         
        
         </Grid>
         
                           
                           
                       </Card>



<Skeleton variant="h1" height="30px" style={{margin:"16px"}} />









<CardItem />
<CardItem />
<CardItem />
<CardItem />
<CardItem />

{/* <div className="loader-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
      
     
      <CircularProgress/>
    </div> */}


  </>
  )
}

export default ItemsSkeleton
