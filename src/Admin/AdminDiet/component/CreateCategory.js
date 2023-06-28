import * as React from 'react';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { CardContent, Stack, TextField, Typography, AppBar,Toolbar,} from '@mui/material';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});






const CreateCategory = forwardRef((props, ref,categoryData,setShowState,showState) => {


const [readOnlyAction,setReadOnlyAction]=useState(false)
  
  
const [editing, setEditing] = useState(true);
const [value, setValue] = useState('Initial value');



const deleteHit=async=>{
    let data = JSON.stringify({
        "category_id":createData?.category_id, 
      });
      
      let config = {
        method: 'PUT',
        maxBodyLength: Infinity,
        url: 'http://44.212.136.151:8081/api/deletecategory',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        props.categoryhit(0)
      })
      .catch((error) => {
        console.log(error);
      });

}

  console.log(categoryData,showState,"<-------------------forwardRefforwardRef-")
      const [open, setOpen] = React.useState(false);
      const [createData, setCreateData] = useState({
          "category_name": "",
          "type": " "
      })
      const [renameData, setRenameData] = useState({
          "category_id": "",
          "category_name": "",
          "type": ""
  
      })
      const [action,setAction]=useState("");
  
    //   useEffect(() => {
          
    //       addCategory();
    //   }, []);
  

    const handleSave=async=>{
        if(action==='edit'){
            RenameHit();
        }else if(action==='create'){
            addCategory();
        }
        setOpen(false);
    }
  
      const addCategory = async() => {
  
  
          let data = JSON.stringify({
              "category_name": createData?.category_name,
              "type": "food"
          });
  
          let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'http://44.212.136.151:8081/api/AddCategories',
              headers: {
                  'Content-Type': 'text/plain'
              },
              data: data
          };
  
  
          axios.request(config)
              .then((response) => {
                  if (response.code == "200") {
                      setCreateData({
                          "category_name": "",
                          "type": "food "
                      })
  
  
  
                  }
                  props.categoryhit(1)
                      //  < alert/>
                  console.log((response.data.data, "-----create dataikiii"));
  
                  setOpen(false);
  
              })
              .catch((error) => {
                  console.log(error);
              });
  
      }
  
  
  
  
  
  
  
      const RenameHit = async => {
  
          let data = JSON.stringify({
              "category_id":createData?.category_id,
              //  "category_name": createData?.category_name,
              "category_name": createData?.category_name,
  
              "type": "food"
          });
  
  
  
          let config = {
              method: 'PUT',
              maxBodyLength: Infinity,
              // url: baseUrl+'updatecategory',
              url: "http://44.212.136.151:8081/api/updatecategory",
              headers: {
                  'Content-Type': 'application/json'
              },
              data: data
  
          };
  
          axios(config)
              .then((response) => {
                  setRenameData(response?.data?.data)
                  console.log(response.data.data, "<-----------------setDelete Dataset DeleteData");
                  props.categoryhit(2)
              })
              .catch((error) => {
                  console.log(error);
              });
            
      }
  
  
  
      useImperativeHandle(ref, () => ({
          handleClickOpenEdit(categoryName,categoryId) {
              // setCreateData({...createData, category_name:itemName })
              setCreateData({
                ...createData,
                category_name:categoryName,
                category_id:categoryId

              })
              console.log("handle click");
              setEditing(false);
              setOpen(true);
              setAction('edit');
          }
          
      }))
      const handleClickOpen = (e) => {
  
        setEditing(true);
          setOpen(true);
          setAction('create');
      };
  
      const handleClose = (e) => {
        setCreateData({...createData, category_name:"" })
          setOpen(false);
      };
      const handleCloseDelete=()=>{
        deleteHit();
        setCreateData({...createData, category_name:"" })
          setOpen(false);
      }
      

      const handleRename=()=>{
        setEditing(true);
    //    RenameHit();
    //     console.log('rename',createData);
    //     setOpen(false);
      }
  
      // const location = useLocation();
      // console.log(props, " props");
      // console.log(location, " useLocation Hook");
      // const  categoryData = location.state?.categoryData;
      // {console.log(categoryData,"import data ");}
  
  
      const handleTextFieldBlur = () => {
        setEditing(false);
      };
    //   const handleButtonClick = () => {
    //     setEditing(true);
    //   };
  
  
  
      return ( 
      <div >
  
              <Button id = "create-poa-button"
              variant = "contained"
              onClick = { handleClickOpen }
              style = {
                  {
                      float: 'right',
                      marginLeft: '1rem',
                      borderRadius: '50%',
                      padding: '0.2rem',
                      marginTop: '-0.5rem',
                      position: 'fixed',
                      zIndex: '1',
                      bottom: 40,
                      right: 40,
                  }
              }
  
              sx = {
                  {
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
                  }
              }
              title = "Create POA" >
  
              <span style = {   { fontSize: '2rem' } } > + </span> 
              </Button >
  
              < Dialog position = "fixed"
  
              open = { open }
              TransitionComponent = { Transition }
              keepMounted onClose = { handleClose }
              aria-describedby = "alert-dialog-slide-description" >
              < AppBar sx = {
                  { position: 'relative', backgroundColor: "purple" }
              } >
              < Toolbar >
              <Typography sx = {{ ml: 2, flex: 1 } }
              variant = "h6"
              component = "div" onClick={handleRename}> Rename </Typography>
  
              < Typography sx = {
                  { ml: 2, flex: 1 }
              }
              variant = "h6"
              component = "div" >
              Category </Typography> 
              <Typography onClick = { handleClose }
              sx = {
                  { ml: 2, flex: 1 }
              }
              variant = "h6"
              component = "div" >
              Close </Typography> {
              /* <Button sx={{marginTop:"5px",ml:2, fontSize:"17px"}} autoFocus color="inherit" onClick={handleClose}>
                            close
                          </Button> */
          } </Toolbar> 
          </AppBar >
  
          <DialogContent >
  
          {/* <TextField  label = "create new category" onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) } value = { createData?.category_name } fullWidth >

          </TextField>  */}

          <TextField
          onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) }
          value = { createData?.category_name }
          fullWidth
        disabled={!editing}
        InputProps={{
          readOnly: !editing,
          onBlur: handleTextFieldBlur,
          
        }}
      />
      {/* <Button onClick={handleButtonClick} disabled={editing}>edit</Button> */}
          </DialogContent > 
          <DialogActions >
          <Button onClick = { handleSave } > Save </Button> 
  
  
      <Button onClick = { handleCloseDelete } > Delete </Button> 
      </DialogActions > 
                </Dialog>


     
  
      </div>
  );
  })
  
  
  export default CreateCategory;
