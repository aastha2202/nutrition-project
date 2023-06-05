
import React from 'react';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
// import {Card, Typography }from '@mui/material';
// import ArrowBackIosIcon from '@mui/material/ArrowBackIos';
import {Button, CardContent, Card , Typography, Grid, TextField ,MenuItem,InputLabel,NativeSelect,FormControl} from '@mui/material';


const CreateExerciseItems = forwardRef((props, ref) => {

    
    useImperativeHandle(ref, () => ({
        handleClickEdit(data,action){
          
        }
        
    }))

    return (
        <>
           
            <Card style={{padding:"20px 5px", margin:"0px auto"}}>
         {/* < ArrowBackIosIcon/>  */}
            <Typography  style={{display: 'inline-block',marginRight:"5"}} variant='h5' gutterLeft >Create Diet Items </Typography>
            
                <CardContent>
                    <Grid container flexDirection="column" spacing={1}>
                        <Grid xs={12}   mb={2}  style={{backgroundColor:"#F7EEFC"}}
                        Item>
                            <TextField label="Name" variant='outlined' fullWidth/>
                        </Grid>

                    
                    
                        <Grid xs={12}  mb={2}  style={{backgroundColor:"#F7EEFC"}}
                         Item>
                            <TextField label="Choose Exercise Image" variant='outlined' fullWidth/>
                        </Grid>
                       
                            <Grid mb={2}   Item>
                               <Grid container flexDirection="row" justifyContent="space-between">
                                    <Grid  md={6} lg={6} xs={6} style={{backgroundColor:"#F7EEFC"}}  item>
                                        <TextField   label="Count" variant='outlined'  fullWidth/>
                                    </Grid>
                                    <Grid md={5} lg={5} xs={5} style={{backgroundColor:"#F7EEFC"}}  item > 
                                    <FormControl variant="outlined" >
                                            <InputLabel variant="ourtlined" >
                                                Sets12
                                            </InputLabel>
                                            <NativeSelect
                                             variant='outlined'
                                                defaultValue={30}
                                                inputProps={{
                                                name: 'age',
                                                id: 'uncontrolled-native',
                                                }}
                                            >
                                                <option value={10}>Ten111</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                            </NativeSelect>
                                            </FormControl>
                                            
                                            
                                     </Grid>
                              
                                 </Grid>  
                                        
                            </Grid>

                                
                                

                        
                        <Grid xs={12}   mb={2}  style={{backgroundColor:"#F7EEFC"}}
                         Item>
                            <TextField label="Calories" variant='outlined' fullWidth/>
                        </Grid>
                        <Grid mb={2} xs={12}   ml={1}  style={{backgroundColor:"#F7EEFC"}}
                             Item>
                                       <FormControl variant='outlined' fullWidth>
                                            <InputLabel variant="ourtlined" htmlFor="uncontrolled-native">
                                                Select Type Of Exercise
                                            </InputLabel>
                                            <NativeSelect
                                             variant='outlined'
                                                defaultValue={30}
                                                inputProps={{
                                                name: 'age',
                                                id: 'uncontrolled-native',
                                                }}
                                            >
                                                <option value={10}>Ten123</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                            </NativeSelect>
                                            </FormControl>
                        </Grid> 
                        <Grid xs={12}   mb={2}  style={{backgroundColor:"#F7EEFC"}}
                         Item>
                            <TextField label="Description" variant='outlined' multiline rows={5} fullWidth/>
                        </Grid>

                    </Grid>
                   
                   
                </CardContent>
               
                    
               
            </Card>
            <Grid container flexDirection="row" alignItems="center" justifyContent="center">
            <Button variant="contained" color="primary">
                    Save
            </Button>
            </Grid>
           
        </>
    );
})
export default  CreateExerciseItems;


