import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Register = () => {
  const navigate = useNavigate();
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
        "http://localhost:5000/ecommerce/signup",
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

      if (data.message === "Signup successful") {
        toast.success("User Register Successfully");
        navigate("/login");
        console.log("Registered successfully");
      }
      if (data.message === "Google signup successful") {
        toast.success("User Register Successfully");
        navigate("/");
        console.log("Registered successfully");
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
            Register
          </Typography>
          <TextField
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            margin="normal"
            type={"text"}
            required
          />
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
                  console.log(credentialResponse.clientId);
                  console.log(details);
                  inputs.g_id = credentialResponse.clientId;
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
            onClick={() => navigate("/login")}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Already Registerd ? Please Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Register;
