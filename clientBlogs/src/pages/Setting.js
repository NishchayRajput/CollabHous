import React, { useEffect, useState } from "react";
import "./css/Setting.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

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
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
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
  const [jobCheck, setJobCheck] = useState(false);
  const handleFileChange = (event) => {
    // Access the selected file from the input
    const file = event.target.files[0];
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
  const handleSubmit = async (e) => {
    setDeptSubscription([
      inputs?.Buying,
      inputs?.anotherCheckbox,
      inputs?.customerService,
    ]);
    if (e) {
      e.preventDefault();
    }

    try {
      // const response = await axios.post(
      //   "http://localhost:5000/blogs/setting",
      //   {
      //     fname: inputs.firstName,
      //     lname: inputs.lastName,
      //     email: inputs.email,
      //     number: inputs.mobile,
      //     primary_role: inputs.primaryRole,
      //     job_notification_status: inputs.job,
      //     job_notification_type: deptSubscription,
      //   },
      //   {
      //     withCredentials: true,
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded",
      //     },
      //   }
      // );
      // navigate("/home");
      console.log(inputs);
      console.log(deptSubscription);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();

    // Use 'selectedFile' for further processing (e.g., uploading to a server)
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      // You can add logic here to handle the file, such as uploading it to a server.
    } else {
      console.error("No file selected");
    }
  };
  useEffect(() => {
    setJobCheck(false);
  }, []);
  return (
    <div>
      <div className="ssection section1">
        <div className="titleContainer">
          <div className="title1"> Settings</div>
          <div className="title">Account</div>
          <div className="subtitle">
            Your basic information is submitted with every application at
            CollabHous
          </div>
        </div>
        <form action=" " className="form">
          <div className="left_form">
            <input
              type="file"
              placeholder="Upload"
              className="inputBox_profile"
              name="profile"
              onChange={handleFileChange}
            />
          </div>
          <div className="right_form">
            <input
              type="text"
              placeholder="First Name"
              className="inputBox"
              value={inputs.firstName}
              name="firstName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="inputBox"
              value={inputs.lastName}
              name="lastName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              className="inputBox"
              value={inputs.email}
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Mobile"
              className="inputBox"
              value={inputs.mobile}
              name="mobile"
              onChange={handleChange}
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
              onChange={handleChange}
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
              value="content"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
              <div className="save" onClick={handleSubmit}>
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
