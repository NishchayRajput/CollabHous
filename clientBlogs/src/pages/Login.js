import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import "./css/Login.css";
// axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state
  useEffect(() => {
    const getVerification = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/ecommerce/verify",
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (data.message === "Ok") {
          Store.addNotification({
            title: "You are already logged in",
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
          navigate("/home");
        }
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getVerification();
  }, []);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    g_id: "",
  });

  //eye icon near password
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

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
      const response = await axios.post(
        "http://localhost:5000/ecommerce/login",
        {
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
          g_id: inputs.g_id,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const { data } = response;
      console.log(response);
      const setCookieHeader = response.headers.get("set-cookie");
      console.log("Set-Cookie Header:", setCookieHeader);

      if (data.message === "Login successful") {
        // toast.success("User login Successsfully");
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
    onSuccess: (credentialResponse) => {
      const details = jwtDecode(credentialResponse.credential);
      console.log(credentialResponse);
      console.log(details.sub);
      inputs.g_id = details.sub;
      inputs.name = details.name;
      inputs.email = details.email;
      handleSubmit();
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

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
          <Typography className="signInText">Sign In</Typography>
          <Button onClick={() => navigate("/register")} className="newUser">
            <span>New User? &nbsp;</span>Create an account
          </Button>

          <TextField
            className="email"
            placeholder="Email"
            value={inputs.email}
            name="email"
            margin="normal"
            type={"email"}
            required
            onChange={handleChange}
            variant="standard"
            sx={{

              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before":{
                borderBottomColor: "#FF2E64",
              },
              "& .MuiInput-underline:after":{
                borderBottomColor: "#FF2E64",
              },
              input: {
                color: "white",
                fontFamily: "Montserrat",
                fontSize: "15px",
              },

             
            }}
          />

          <TextField
            className="password"
            placeholder="Password"
            value={inputs.password}
            name="password"
            margin="normal"
            type={type}
            required
            onChange={handleChange}
            variant="standard"
            sx={{
              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before":{
                borderBottomColor: "#FF2E64",
              },
              "& .MuiInput-underline:after":{
                borderBottomColor: "#FF2E64",
              },
              input: {
                color: "white",
                fontFamily: "Montserrat",
                fontSize: "15px",
              },
            }}
            InputProps={{
              endAdornment: (
                <React.Fragment>
                  <span onClick={handleToggle} style={{ cursor: "pointer" }}>
                    <Icon icon={icon} size={12} style={{ color: "#FFFFFF" }} />
                  </span>
                </React.Fragment>
              ),
            }}
          />

          <Button type="submit" className="continue">
            Login
          </Button>
          <div className="or">
            <div></div>&nbsp;Or&nbsp; <div></div>
          </div>
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

// import React, { useState } from 'react';

// const SignupForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include', // Include credentials (cookies) in the request
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         // Signup successful
//         // You can redirect or perform other actions here
//       } else {
//         // Handle signup failure
//         console.error('Signup failed');
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleSignup}>Signup</button>
//     </div>
//   );
// };

// export default SignupForm;
