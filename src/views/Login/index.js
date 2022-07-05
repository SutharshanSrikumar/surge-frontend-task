import  React ,{useState, useEffect} from 'react';
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
import { isEmail } from "validator";
import { useDispatch, useSelector } from 'react-redux';
import { alertNotification, postAction } from "../../redux/actions";
import { AuthConstant } from "../../redux/constant";

const theme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [submitLoader, setSubmitLoader] = useState(false);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const [state,setState] = useState({
    email:"",
    password:""
  })
  const [error,setError] = useState({
    email:false,
    password:false
  })

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name]:value
    })
  }

  useEffect(() => {
    const { type, payload, error } = auth;

    if (type === AuthConstant.LOGINSUCCESS) {
      setSubmitLoader(false);
      setSubmit(false);
      if (payload) {
        dispatch(
          alertNotification("Welcome Back " + payload?.firstName, "success")
        );
        let user = {
          userId: payload?.userId,
          email: payload?.email,
          firstName: payload?.firstName || '',
          lastName: payload?.lastName || '',
          mobile: payload?.mobile || '',
          dateOfBirth: payload?.dateOfBirth || '',
          status: payload?.status,
          accountType: payload?.accountType || 1,
          userAccessToken: payload?.accessToken
        };

        localStorage.setItem("userAuthDetail", JSON.stringify(user));

        if(!payload?.status){
          navigate("/app/update-password");
        }
        else{
          navigate("/app/users");
        }
      }
    }

    if (type === AuthConstant.LOGINFAIL) {
      setSubmitLoader(false);
      dispatch(
        alertNotification(error ? error : "Invalid username or password", "fail")
      );
    }
  }, [auth]);

  const handleSubmit = (event) => {
    setSubmit(true);
    let errorCheck = 0;

    let errorObj = {
      email:false,
      password:false,
    }

    if(!isEmail(state.email)){
      errorCheck = 1;
      errorObj.email = true
    }
    if(!state.password){
      errorCheck = 1;
      errorObj.password = true
    }
    
    setError(errorObj)

    if(errorCheck == 0){
      setSubmitLoader(true);
      let postData= {
        email:state.email,
        password:state.password,
      }
      dispatch(
        postAction("/api/login",AuthConstant.LOGINSUCCESS,AuthConstant.LOGINFAIL,AuthConstant.DEFAULTERR,postData)
      );

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
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={handleChange}
              autoFocus
              helperText={error.email ? "Invalid Mail" : ""}
              error={error.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              helperText={error.password ? "Invalid Password" : ""}
              error={error.password}
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