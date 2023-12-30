import React, { useEffect, useState } from "react";
import "./css/Setting.css";
import axios from "axios";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Avatar } from "@mui/material";
import { Store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const Setting = () => {
  const Navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const handleEdit = () => {
    setIsDisabled(!isDisabled);
  };
  const checkEdit = () => {
    if (isDisabled) {
      alert("Please, Enable the Edit mode");
    }
  };
  const [inputs, setInputs] = useState({
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",

    primaryRole: "",

    job: "",
    jobCheck: "",

    anotherCheckbox: "",
    customerService: "",
    Buying: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const [jobCheck, setJobCheck] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
     // // Create a new FileReader instance
    // const reader = new FileReader();

    // // Define the onload event handler
    // reader.onload = (e) => {
    //   const fileData = e.target.result;
    //   const metaData = fileData.split(";")[0].split(":")[1];
    //   console.log("File metadata:", reader.result);
    // };

    // Read the file as data URL
    // reader.readAsDataURL(file);
    setSelectedFile(file);
  };
  const [deptSubscription, setDeptSubscription] = useState([]);
  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleMultiChange = (event) => {
    const { name, checked, value } = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: checked ? value : undefined,
    }));
  };
  const handleSubmit = async (e) => {
    console.log(inputs);
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/blogs/settings`,
        {
          profileImg: selectedFile,
          fname: inputs.firstName,
          lname: inputs.lastName,
          email: inputs.email,
          number: inputs.mobile,
          primary_role: inputs.primaryRole,
          job_notification_status: inputs.job,
          job_notification_type: [
            inputs.Buying,
            inputs.anotherCheckbox,
            inputs.customerService,
          ],
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      Store.addNotification({
        title: response.data.message,
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
      if (response.data.message === "User created") {
        window.location.reload();
      }
      // if (response.data.message === "User details already exist") {
      //   window.location.reload();
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function checkSettings() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/blogs/get_settings`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(response);
        if (response.data.message === "Please login first") {
          Store.addNotification({
            title: "Please login first",
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
          Navigate("/home");
        }
        if (response.data.message === "data found") {
          const data = response.data.data.data.settings;
          setInputs({
            ...inputs,
            email: data.email,
            firstName: data.fname,
            lastName: data.lname,
            mobile: data.number,
            primaryRole: data.primary_role,

            job: "Once per week",

            Buying: data.job_notification_type[0],
            customerService: data.job_notification_type[1],
            anotherCheckbox: data.job_notification_type[2],
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    checkSettings();
  }, []);
  useEffect(() => {
    localStorage.setItem("selectedTabIndex", "3");
  }, []);
  const [avatarSrc, setAvatarSrc] = React.useState("images/defaultAvatar.jpg");

  const handleAvatarError = () => {
    setAvatarSrc("images/defaultAvatar.jpg");
  };
  return (
    <div>
      <div className="ssection section1">
        <div className="titleContainer">
          <div className="title1"> Settings</div>
          <div className="editBanner">
            <div className="title">Account</div>
            <div
              className="edit"
              onClick={handleEdit}
              style={{
                borderRadius: "5px",
                backgroundColor: !isDisabled ? "#343434" : "",
              }}
            >
              <EditNoteIcon fontSize="large" />
            </div>
          </div>
          <div className="subtitle">
            Your basic information is submitted with every application at
            CollabHous
          </div>
        </div>
        <form action=" " className="form">
          <div className="left_form" onClick={checkEdit}>
            <label htmlFor="upload-file" className="custom-file-upload">
              <Avatar
                src={avatarSrc}
                onError={handleAvatarError}
                alt="Avatar"
                sx={{ width: "100%", height: "100%" }}
              />
            </label>
            {!isDisabled && (
              <input
                type="file"
                id="upload-file"
                className="inputBox_profile"
                name="profile"
                value={inputs.dp}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            )}
          </div>
          <div className="right_form">
            <input
              type="text"
              placeholder="First Name"
              className="inputBox"
              value={inputs.firstName}
              name="firstName"
              onChange={handleChange}
              disabled={isDisabled}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="inputBox"
              value={inputs.lastName}
              name="lastName"
              onChange={handleChange}
              disabled={isDisabled}
            />
            <input
              type="text"
              placeholder="Email"
              className="inputBox"
              value={inputs.email}
              name="email"
              onChange={handleChange}
              disabled={isDisabled}
            />
            <input
              type="text"
              placeholder="Mobile"
              className="inputBox"
              value={inputs.mobile}
              name="mobile"
              onChange={handleChange}
              disabled={isDisabled}
            />
          </div>
        </form>
      </div>
      <div className="ssection section2">
        <div className="titleContainer">
          <div className="title"> Your primary role</div>
          <div className="subtitle">
            Let cH know what department and role you are most interested in.
            Your selection will also be used for job subscriptions
          </div>
        </div>
        <form action="" className="form_radio">
          <div className="input_radio">
            <input
              className="radio-input"
              type="radio"
              id="buying"
              name="primaryRole"
              value="buying"
              checked={isDisabled ? inputs.primaryrole === "buying" : undefined} // Set checked to true
              onChange={handleChange}
              disabled={isDisabled}
            />
            <label className="label" htmlFor="buying">
              Buying
            </label>
          </div>
          <div className="input_radio">
            <input
              className="radio-input"
              type="radio"
              id="content"
              name="primaryRole"
              checked={
                isDisabled ? inputs.primaryrole === "content" : undefined
              } // Set checked to true
              value="content"
              onChange={handleChange}
              disabled={isDisabled}
            />
            <label className="label" htmlFor="content">
              Content and Activation
            </label>
          </div>
          <div className="input_radio">
            <input
              className="radio-input"
              type="radio"
              id="customerCare"
              name="primaryRole"
              value="customerCare"
              checked={
                isDisabled ? inputs.primaryrole === "customerCare" : undefined
              } // Set checked to true
              onChange={handleChange}
              disabled={isDisabled}
            />
            <label className="label" htmlFor="customerCare">
              Customer care & Service
            </label>
          </div>
          <div className="input_radio">
            <input
              className="radio-input"
              type="radio"
              id="ecom"
              name="primaryRole"
              value="ecom"
              checked={isDisabled ? inputs.primaryrole === "ecom" : undefined} // Set checked to true
              onChange={handleChange}
              disabled={isDisabled}
            />
            <label className="label" htmlFor="ecom">
              Ecom
            </label>
          </div>
          <div className="input_radio">
            <input
              className="radio-input"
              type="radio"
              id="finance"
              name="primaryRole"
              value="finance"
              checked={
                isDisabled ? inputs.primaryrole === "finance" : undefined
              } // Set checked to true
              onChange={handleChange}
              disabled={isDisabled}
            />
            <label className="label" htmlFor="finance">
              Finance
            </label>
          </div>
        </form>
      </div>
      <div className="ssection section2">
        <div className="titleContainer">
          <div className="title">Job subscription</div>
          <div className="subtitle">
            Get new jobs sent to your email inbox. Select all or customise the
            departments and roles you want to stay updated on
          </div>
        </div>
        <form action="" className="form_radio">
          <div className="input_radio">
            <PinkSwitch
              className="radio-inputs"
              type="checkbox"
              id="jobCheck"
              name="jobCheck"
              value="Notify about new jobs"
              onChange={(event) => {
                handleChange(event);
                setJobCheck(!jobCheck);
              }}
              // checked={inputs.job} // Set checked to true only when isDisabled is true
              disabled={isDisabled}
            />
            <label className="label" htmlFor="Audi">
              Notify about new jobs
            </label>
          </div>
          {jobCheck && (
            <div>
              <div className="input_radio">
                <input
                  className="radio-input"
                  type="radio"
                  name="job"
                  value="Every time a job is added"
                  onChange={handleChange}
                  disabled={isDisabled}
                  checked={
                    isDisabled
                      ? inputs.job === "Every time a job is added"
                      : undefined
                  } // Set checked to true
                />
                <label className="label" htmlFor="Audi">
                  Every time a job is added
                </label>
              </div>
              <div className="input_radio">
                <input
                  className="radio-input"
                  type="radio"
                  name="job"
                  value="Once per week"
                  onChange={handleChange}
                  disabled={isDisabled}
                  checked={
                    isDisabled ? inputs.job === "Once per week" : undefined
                  } // Set checked to true
                />
                <label className="label" htmlFor="Audi">
                  Once per week
                </label>
              </div>
              <div className="input_radio">
                <input
                  className="radio-input"
                  type="radio"
                  name="job"
                  value="Once per month"
                  onChange={handleChange}
                  disabled={isDisabled}
                  checked={
                    isDisabled ? inputs.job === "Once per month" : undefined
                  } // Set checked to true
                />
                <label className="label" htmlFor="Audi">
                  Once per month{" "}
                </label>
              </div>
            </div>
          )}
        </form>
        <form action="" className="form_radio">
          <div>
            <div>
              <div className="input_radio">
                <input
                  className="radio-input"
                  type="checkbox"
                  name="Buying"
                  value="Buying"
                  onChange={handleMultiChange}
                  disabled={isDisabled}
                  checked={inputs.Buying} // Set checked to true
                />
                <label className="label" htmlFor="Audi">
                  Buying
                </label>
              </div>
              <div className="input_radio">
                <input
                  className="radio-input"
                  type="checkbox"
                  name="customerService"
                  value="CustomerService"
                  onChange={handleMultiChange}
                  disabled={isDisabled}
                  checked={inputs.customerService} // Set checked to true
                />
                <label className="label" htmlFor="Audi">
                  Customer Service
                </label>
              </div>
              <div className="input_radio">
                <input
                  className="radio-input"
                  type="checkbox"
                  name="anotherCheckbox"
                  value="AnotherCheckbox"
                  onChange={handleMultiChange}
                  disabled={isDisabled}
                  checked={inputs.anotherCheckbox} // Set checked to true
                />
                <label className="label" htmlFor="Audi">
                  Another Checkbox
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="ssection section3">
        <div className="titleContainer">
          <div className="title">Data and Privacy</div>
          <div className="boxes">
            <div className="left_boxes">
              <div className="inner_box">
                <div className="headers">Request my data</div>
                <div className="details">
                  Get a copy of the recruitment-related personal data that we
                  process about you
                </div>
                <div className="view">Request</div>
              </div>
              <div className="inner_box">
                <div className="headers">Remove my data</div>
                <div className="details">
                  We will assess your request and delete all your personal data
                  we no longer have a reason to keep
                </div>
                <div className="view">Request</div>
              </div>
            </div>
            <div className="right_boxes">
              <div className="inner_box">
                <div className="headers">Privacy Policy</div>
                <div className="details">
                  Read more about how SNS collects and processes your personal
                  data
                </div>
                <div className="view">Request</div>
              </div>
              <div className="inner_box">
                <div className="headers">Cookie policy</div>
                <div className="details">
                  Find out more about how we use cookies to improve your user
                  experience our website
                </div>
                <div className="view">Request</div>
              </div>
            </div>
            <div className="container">
              <div
                className="save"
                onClick={() => {
                  if (!isDisabled) handleSubmit();
                  else
                    Store.addNotification({
                      title: "Please Enable the Edit mode",
                      message: "",
                      type: "default",
                      insert: "top",
                      container: "bottom-center",
                      animationIn: ["animate__animated", "animate__fadeIn"],
                      animationOut: ["animate__animated", "animate__fadeOut"],
                      dismiss: {
                        duration: 2000,
                        onScreen: true,
                      },
                    });
                }}
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
