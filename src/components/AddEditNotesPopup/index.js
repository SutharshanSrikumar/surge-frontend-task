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
import { TextField } from "@mui/material";

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

export default function AddEditNotesPopup({setNotesPopup , setSelectedId, selectedId}) {
  const [open, setOpen] = React.useState(true);
        // need to change after api integration

  // const [state,setState] = useState({
  //   title:"",
  //   description:"",
  // })
  const [state,setState] = useState( { "id":2, "title": "Title1", "description": "Desc"})
  const [error,setError] = useState({
    title:false,
    description:false,
  })

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name]:value
    })
  }

  const handleClose = () => {
    setNotesPopup(false);
    setSelectedId("");
  };

  const handleSubmit = () => {
    let errorCheck = 0;
    
    let errorObj = {
      title:false,
      description:false,
    }

    if(!state.title || state.title.length > 50){
        errorCheck = 1;
        errorObj.title =  true
    }
    if(!state.description || state.description.length > 500){
        errorCheck = 1;
        errorObj.description =  true
    }

    setError(errorObj)

    if(errorCheck == 0){
        let postData= {
          title:state.title,
          description:state.description,
        }
        // need to change after api integration
        handleClose()
        console.log("post Data",postData);
    }
    
  };

  return (
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={{textAlign:"center"}}>
          {selectedId ? "Update " : "Create New "} Note
        </BootstrapDialogTitle>
        <DialogContent dividers>

            <TextField
                size="small"
                error={error.title}
                id="outlined-error-helper-text"
                label="Title"
                name="title"
                value={state.title}
                helperText={error.title && !state.title ? "This field is required" :state.title.length > 50 ? "This field is is too length":""}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                style={{marginTop:20}}
            />
            <TextField
                size="small"
                error={error.description}
                id="outlined-error-helper-text"
                label="Description"
                name="description"
                value={state.description}
                helperText={error.description && !state.description ? "This field is required" :state.description.length > 500 ? "This field is is too length":""}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                rows={3}
                multiline
                style={{marginTop:20}}
            />                       
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} style={{marginTop:20}}>
              {selectedId ? "Update " : "Create"}
            </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

