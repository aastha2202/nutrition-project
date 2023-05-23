import * as React from 'react';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import alert from '../components/alert';
import Slide from '@mui/material/Slide';
import { CardContent, Stack, TextField, Typography, AppBar, Toolbar, } from '@mui/material';
import axios from 'axios';
import { baseUrl } from 'src/config';
import { EventAvailable } from '@material-ui/icons';
import { useLocation } from "react-router-dom";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction = "up"
    ref = { ref } {...props }
    />;
});

const CreateCategory = forwardRef((props, ref,categoryData,setShowState,showState) => {

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

    useEffect(() => {
        // RenameHit();
        addCategory();
    }, []);


    const addCategory = async() => {


        let data = JSON.stringify({
            "category_name": createData?.category_name,
            "type": "food"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl + 'AddCategories',
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
                props.categoryhit()
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
            "category_id": 1,
            //  "category_name": createData?.category_name,
            "category_name": "Proteins456bbbbbb",

            "type": "food"
        });



        let config = {
            method: 'PUT',
            maxBodyLength: Infinity,
            // url: baseUrl+'updatecategory',
            url: "https://aipse.in/api/updatecategory",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data

        };

        axios(config)
            .then((response) => {
                setRenameData(response?.data?.data)
                console.log(response.data.data, "<-----------------setDelete Dataset DeleteData");
            })
            .catch((error) => {
                console.log(error);
            });
    }



    useImperativeHandle(ref, () => ({
        handleClickOpen() {
            // setCreateData({...createData, category_name:itemName })
            console.log("handle click");
            setOpen(true);
        }
    }))
    const handleClickOpen = (e) => {
        setOpen(true);
    };

    const handleClose = (e) => {
        setOpen(false);
    };


    





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
            component = "div" > Rename </Typography>

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

        <TextField label = "create new category" onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) } value = { createData?.category_name } fullWidth >

        </TextField> 
        </DialogContent > 
        <DialogActions >
        <Button onClick = { addCategory } > Save </Button> 


    <Button onClick = { handleClose } > Delete </Button> 
    </DialogActions > 
    </Dialog>

    </div>
);
})


export default CreateCategory;