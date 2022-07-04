import  React ,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { isStrongPassword } from "validator";

const theme = createTheme();

export default function FirstTimeLogin() {

  const navigate = useNavigate();

  const [state,setState] = useState({
    password:"",
    confirmPassword:""
  })
  const [error,setError] = useState({
    password:false,
    confirmPassword:false
  })

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name]:value
    })
  }

  const handleSubmit = (event) => {
    let errorCheck = 0;

    let errorObj = {
      password:false,
      confirmPassword:false
    }

    if(!isStrongPassword(state.password)){
      errorCheck = 1;
      errorObj.password = true
    }
    if(state.password !== state.confirmPassword){
      errorCheck = 1;
      errorObj.confirmPassword = true
    }
    
    setError(errorObj)

    if(errorCheck == 0){
      let postData= {
        email:state.email,
        password:state.password,
      }

      console.log("post Data",postData);
      navigate("/app/users")
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Setup New Password
          </Typography>
          <Box component="jhh" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={state.password}
              onChange={handleChange}
              helperText={error.password ? "Passwors is not strong. Use atleast 1 Uppercase, 1 lowercase, 1 number and 1 special character" : ""}
              error={error.password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
              helperText={error.confirmPassword ? "Password doesn't match" : ""}
              error={error.confirmPassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}