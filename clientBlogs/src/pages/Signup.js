import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Store } from "react-notifications-component";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import "./css/Login.css";

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

  useEffect(() => {
    const getVerification = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/ecommerce/verify`,
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
      } catch (error) {
        console.log(error);
      }
    };

    getVerification();
  }, [navigate]);

  //form handle
  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/ecommerce/signup`,
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
          withCredentials: true,
        }
      );

      if (data.message === "Signup successful") {
        navigate("/login");

        Store.addNotification({
          title: "Registered successfully",
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
      if (data.message === "Google signup successful") {
        // toast.success("User Register Successfully");
        navigate("/");
        Store.addNotification({
          title: "Registered Successfully",
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
        console.error(error.response.data.message); // Error response from the server
        Store.addNotification({
          title: error.response.data.message,
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

  // const login = useGoogleLogin({

  //   onSuccess: (credentialResponse) => {
  //     const details = jwtDecode(credentialResponse.credential);

  //     inputs.g_id = details.sub;
  //     inputs.name = details.name;
  //     inputs.email = details.email;
  //     handleSubmit();
  //   },
  //   onError: () => {
  //     console.log("Login Failed");
  //   },
  // });

  return (
    <div className="loginpage">
      <img src="images/logo.png" alt="f" />
      <form onSubmit={handleSubmit} className="signupBox">
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
          <Typography className="signInText">Create an account</Typography>
          <Button onClick={() => navigate("/login")} className="newUser">
            <span>Already have an account? &nbsp;</span>Sign in
          </Button>

          <TextField
            className="registerUsername"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            margin="normal"
            type={"text"}
            required
            variant="standard"
            sx={{
              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "#FF2E64",
              },
              "& .MuiInput-underline:after": {
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
            className="registerEmail"
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
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "#FF2E64",
              },
              "& .MuiInput-underline:after": {
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
            className="registerPassword"
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
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "#FF2E64",
              },
              "& .MuiInput-underline:after": {
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
          <p className="requirements">
            Must be of atleast 8 characters and contain atleast one uppercase,
            one lowercase, and one number
          </p>
          <Button type="submit" className="continue">
            Register
          </Button>
          <div className="or">
            <div></div>&nbsp;Or&nbsp; <div></div>
          </div>
          <div className="submit">
            <Button>
              <GoogleOAuthProvider
                className="loginWith"
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              >
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const details = jwtDecode(credentialResponse.credential);

                    inputs.g_id = details.sub;
                    inputs.name = details.name;
                    inputs.email = details.email;
                    handleSubmit();
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  theme="filled_black"
                  shape="pill"
                  text="continue_with"
                />
              </GoogleOAuthProvider>
            </Button>
            {/* <Button className="loginWith">Continue with Facebook</Button> */}
          </div>
        </Box>
      </form>
    </div>
  );
};

export default Register;
