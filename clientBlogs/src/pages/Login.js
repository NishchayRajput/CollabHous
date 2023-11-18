import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin,useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import "./css/Login.css";



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    g_id: "",
  });


  //eye icon near password
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
  
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
  }


  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form handle
  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/ecommerce/login",
        {
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
          g_id: inputs.g_id,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (data.message === "Login successful") {
        // toast.success("User login Successfully");
        dispatch(authActions.login());
        navigate("/");
        Store.addNotification({
          title: "User login Successful",
          message: "",
          type: "success",
          insert: "top",
          container: "bottom-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: true,
          },
        });
      }

      if (data.message === "Google login successful") {
        // toast.success("User Google login Successfully");
        dispatch(authActions.login());
        navigate("/");
        Store.addNotification({
          title: "User login Successful",
          message: "",
          type: "success",
          insert: "top",
          container: "bottom-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: true,
          },
        });
      }
    } catch (error) {
      if (error.response) {
        // The server responded with a status code other than 2xx
        console.error(error.response.data); // Error response from the server
        console.error(error.response.status); // HTTP status code
        console.error(error.response.headers); // Response headers
      } else if (error.request) {
        // The request was made, but no response was received
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error", error.message);
      }
    }
  };
  const login = useGoogleLogin({
    //onSuccess: tokenResponse => console.log(tokenResponse),
    onSuccess:(credentialResponse) => {
      const details = jwtDecode(credentialResponse.credential);
      console.log(credentialResponse);
      console.log(details.sub);
      inputs.g_id = details.sub;
      inputs.name = details.name;
      inputs.email = details.email;
      handleSubmit();
    },
    onError:() => {
      console.log("Login Failed");
    }
  });

  // useEffect(() => {
  //   const getVerification = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         "http://localhost:5000/ecommerce/verify"
  //       );
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getVerification();
  // }, []);
  

  return (
    <div className="loginpage">
      <img src="images/logo.png" />
      <form onSubmit={handleSubmit} className="signinBox">
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          //alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          //boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          <Typography
            className="signInText"
          >
            Sign In
          </Typography>
          <Button
            onClick={() => navigate("/register")}
            className="newUser"
          >
          <span>New User? &nbsp;</span>Create an account
          </Button>
          
          <TextField
            placeholder="Email"
            value={inputs.email}
            name="email"
            margin="normal"
            type={"email"}
            required
            onChange={handleChange}
            variant="standard"
            sx={{'& .MuiInput-underline:before': {
                borderBottomColor: 'white'},
                input: {color: "white", fontFamily: "Montserrat", fontSize: "15px"}, 
            }}
          />
          
          <TextField
            placeholder="Password"
            value={inputs.password}
            name="password"
            margin="normal"
            type={type}
            required
            onChange={handleChange}
            variant="standard"
            sx={{'& .MuiInput-underline:before': {
            borderBottomColor: 'white'},
            input: {color: "white", fontFamily: "Montserrat", fontSize: "15px"}}}
            InputProps={{
              endAdornment: (
              <React.Fragment>
                <span onClick={handleToggle} style={{ cursor: 'pointer' }}>
                  <Icon icon={icon} size={12} style={{ color: '#FFFFFF' }} />
                </span>
              </React.Fragment>
            ),
            }}
          />
            
          <Button
            type="submit"
            className="continue"
          >
            Login
          </Button>
          <div className="or"><div></div>&nbsp;Or&nbsp; <div></div></div>
          <div className="submit">
            <Button className="loginWith" onClick={() => login()}>
                      Continue with Google
            </Button>
            <Button className="loginWith">Continue with Facebook</Button>
          </div>
          
        </Box>
      </form>
    </div>
  );
};

export default Login;
