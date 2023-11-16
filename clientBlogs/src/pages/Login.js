import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
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
      console.log(data);

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

      if (data.message === "Login successful with Google") {
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
      Store.addNotification({
        title: error.response.data,
        message: "",
        type: "danger",
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
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
  return (
    <div style={{ marginTop: "8rem" }}>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign="center"
          >
            Login
          </Typography>

          <TextField
            placeholder="email"
            value={inputs.email}
            name="email"
            margin="normal"
            type={"email"}
            required
            onChange={handleChange}
          />
          <TextField
            placeholder="password"
            value={inputs.password}
            name="password"
            margin="normal"
            type={"password"}
            required
            onChange={handleChange}
          />

          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button style={{ marginTop: "15px" }}>
            <GoogleOAuthProvider clientId="673293732147-5pde4aq555gdp0b3m8gv3f6s84peico5.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const details = jwtDecode(credentialResponse.credential);
                  console.log(credentialResponse);
                  console.log(details.sub);
                  inputs.g_id = details.sub;
                  inputs.name = details.name;
                  inputs.email = details.email;
                  handleSubmit();
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </Button>
          <Button
            onClick={() => navigate("/register")}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Not a user ? Please Register
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
