import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import {AppBar,ToolBar} from "@mui/material";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { CardContent, Grid, Stack, TextField, Typography, AppBar,Toolbar, Card,} from '@mui/material';
import {useImperativeHandle,forwardRef} from 'react';
// import { IconButton, RemoveIcon,AddIcon} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const EditCalories = forwardRef((props, ref) => {
 
  const [open, setOpen] = React.useState(false);

  useImperativeHandle(ref, () => ({
     handleClickOpen () {
      setOpen(true);
    }
  }))

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // {calories,category_id,counts,description,item_id,item_image,item_name,sets,time_or_weight,type,units    }
const items = props.state2;
const itemIntakeStatus =props.state;


  console.log(itemIntakeStatus,"-------editCalories------")
   console.log(items,"-------state2222...------")

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        alert dialog
      </Button> */}

       <Dialog 
       
        
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <CardContent sx={{minWidth:"250px"}}>
        <DialogTitle>loii</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           ksksks
          </DialogContentText>
        </DialogContent>
        </CardContent>
        <DialogContent>
          
           select servings
         
          {/* <Grid container item flexDirection={"row"}>
            <span >-</span>
            <Typography>0</Typography>
            <span>+</span>
          

          </Grid> */}
          <Grid>
          <IconButton >
                                <RemoveIcon />
                                 </IconButton>
                                 0
                                 <IconButton >
                                 <AddIcon />
                                 </IconButton> 
          </Grid>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
        
        </DialogActions>
      </Dialog>
    
     

    </div>
  );
});

export default EditCalories;