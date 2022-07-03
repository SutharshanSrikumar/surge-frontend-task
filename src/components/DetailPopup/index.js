import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Grid } from '@mui/material';

export default function DetailPopup({ setSelectedId, selectedId }) {

  const [open, setOpen] = useState(true);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('xs');
  const [data, setData] = useState({});

  const handleClose = () => {
    setSelectedId("")
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContent sx={{lineHeight: 2}}>
          <Grid container>
              <Grid item xs={6}>
                First Name
              </Grid>
              <Grid item xs={6} sx={{textAlign:"right"}}>
                {data.firstName}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                Last Name
              </Grid>
              <Grid item xs={6} sx={{textAlign:"right"}}>
                {data.lastName}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                Email
              </Grid>
              <Grid item xs={6} sx={{textAlign:"right"}}>
                {data.email}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                Date of Birth
              </Grid>
              <Grid item xs={6} sx={{textAlign:"right"}}>
                {data.dateOfBirth}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                Mobile
              </Grid>
              <Grid item xs={6} sx={{textAlign:"right"}}>
                {data.mobile}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                Account Type
              </Grid>
              <Grid item xs={6} sx={{textAlign:"right"}}>
                {data.accountType}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                Completed
              </Grid>
              <Grid item xs={6} sx={{textAlign:"right"}}>
                {data.completed ? <CheckIcon htmlColor="green" /> : <ClearIcon htmlColor="red" />}
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
