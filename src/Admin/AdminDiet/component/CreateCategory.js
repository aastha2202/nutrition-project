import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { CardContent, Stack, TextField, Typography, AppBar,Toolbar,} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateCategory() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
    
    <Button
          id="create-poa-button"
          variant="contained"
          onClick={handleClickOpen}
          style={{
            float: 'right',
            marginLeft: '1rem',
            borderRadius: '50%',
            padding: '0.2rem',
            marginTop: '-0.5rem',
            position: 'fixed',
            zIndex: '1',
            bottom: 40,
            right: 40,
          }}
         
      // sx={{
      //   ':hover': {
      //       bgcolor: '#ffd796', // theme.palette.primary.main #ffd796
      //         color: '#ff7424', //#ff7424
      //       border: '#ffd796',
      //       borderStyle:"solid",
      //       BorderColor:"#9B54BF",
            
      //     },
      //     bgcolor: 'white', //ffd796
      //     color: '#9B54BF',
      //     border: '3px',
      //     borderStyle:"solid",
      //     BorderColor:"#9B54BF",
        
      // }} 



      sx={{
        ':hover': {
          bgcolor: "#F0E7F5", // theme.palette.primary.main
          color: '#9B59B6',
          border: '#ffd796'
        },
        ':active': {
          bgcolor: "#F0E7F5",
          color: "#9B59B6"
        },
        bgcolor: '#F0E7F5',
        color: "#9B59B6",
        border: 'none'
      }} 
    


          title="Create POA"
        >
          {/* style={{ float: "right", marginLeft:100, borderRadius: "50%", padding: "0.2rem", position:'relative', zIndex: '-1',marginRight:10,marginTop:15}} */}
          <span style={{ fontSize: '2rem' }}>+</span>
        </Button>
    
     <Dialog 
        position="fixed"
       
        open={open}
        TransitionComponent={Transition}
       keepMounted
        onClose={handleClose}
       aria-describedby="alert-dialog-slide-description"
      >
       <AppBar sx={{ position: 'relative', backgroundColor:"purple" }}>
          <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Rename
            </Typography>
            
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Category
            </Typography>
            <Button sx={{marginTop:"5px",ml:2, fontSize:"17px"}} autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
        
        <DialogContent>
          <TextField label="create new category" fullWidth> 

          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={handleClose}>Delete</Button>
        </DialogActions>
      </Dialog>
     
    </div>
  );
}
