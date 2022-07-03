import React, { useState, useEffect }  from "react";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import isEmail from "validator/lib/isEmail";
import { MenuItem,TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CreateUser({setNewUserPopup}) {
  const [open, setOpen] = React.useState(true);
  const [state,setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    dateOfBirth:"",
    mobile:"",
    accountType:"1",
  })
  const [error,setError] = useState({
    firstName:false,
    lastName:false,
    email:false,
    dateOfBirth:false,
    mobile:false,
    accountType:false,
  })

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name]:value
    })
  }

  const handleClose = () => {
    setNewUserPopup(false);
  };

  const handleSubmit = () => {
    let errorCheck = 0;
    
    let errorObj = {
        firstName:false,
        lastName:false,
        email:false,
        dateOfBirth:false,
        mobile:false,
        accountType:false,
    }

    if(!state.firstName || state.firstName.length > 50){
        errorCheck = 1;
        errorObj.firstName =  true
    }
    if(!state.lastName || state.lastName.length > 50){
        errorCheck = 1;
        errorObj.lastName =  true
    }
    if(!isEmail(state.email)){
        errorCheck = 1;
        errorObj.email = true
    }
    if(!state.dateOfBirth){
        errorCheck = 1;
        errorObj.dateOfBirth =  true
    }
    if(!state.mobile || state.mobile.length < 6){
        errorCheck = 1;
        errorObj.mobile =  true
    }
    if(!state.accountType){
        errorCheck = 1;
        errorObj.accountType =  true
    }

    setError(errorObj)

    if(errorCheck == 0){
        let postData= {
          firstName:state.firstName,
          lastName:state.lastName,
          email:state.email,
          dateOfBirth:state.dateOfBirth,
          mobile:state.mobile,
          accountType:state.accountType,
        }

        console.log("post Data",postData);
    }
    
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={{textAlign:"center"}}>
          Create New User
        </BootstrapDialogTitle>
        <DialogContent dividers>

            <TextField
                size="small"
                error={error.firstName}
                id="outlined-error-helper-text"
                label="First Name"
                name="firstName"
                value={state.firstName}
                helperText={error.firstName && !state.firstName ? "This field is required" :state.firstName.length > 50 ? "This field is is too length":""}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                style={{marginTop:20}}
            />
            <TextField
                size="small"
                error={error.lastName}
                id="outlined-error-helper-text"
                label="Last Name"
                name="lastName"
                value={state.lastName}
                helperText={error.lastName && !state.lastName ? "This field is required" :state.lastName.length > 50 ? "This field is is too length":""}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                style={{marginTop:20}}
            />            
            <TextField
                size="small"
                error={error.email}
                id="outlined-error-helper-text"
                label="Email"
                name="email"
                value={state.email}
                helperText={error.email && "Invalid email"}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                style={{marginTop:20}}
            />            
            <TextField
                size="small"
                error={error.mobile}
                id="outlined-error-helper-text"
                label="Mobile"
                name="mobile"
                type={"number"}
                value={state.mobile}
                helperText={error.mobile && "Invalid phone number"}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                style={{marginTop:20}}
            />            
            <TextField
                size="small"
                error={error.dateOfBirth}
                id="outlined-error-helper-text"
                label="Date of Birth"
                name="dateOfBirth"
                type={"date"}
                value={state.dateOfBirth}
                helperText={error.dateOfBirth && "This field is required"}
                onChange={handleChange}
                variant="outlined"
                style={{marginTop:20}}
                InputLabelProps={{shrink:true}}
            />            
            <TextField
                size="small"
                select
                error={error.accountType}
                id="outlined-error-helper-text"
                label="Account Type"
                name="accountType"
                value={state.accountType}
                helperText={error.accountType && "Account type is required"}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                style={{marginTop:20}}
            >
                <MenuItem value={"1"}>Student</MenuItem>
                <MenuItem value={"2"}>Admin</MenuItem>
            </TextField>            
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} style={{marginTop:20}}>
                Create
            </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

