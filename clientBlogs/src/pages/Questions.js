import React, { useEffect, useState } from "react";
import "./css/Questions.css";

import FileUpload from "../components/FileUpload";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Questions = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
    pitch: "",
    company: "",
  });
 
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    console.log(inputs);
    if (e) {
      e.preventDefault();
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/blogs/questions`,
        {
          fname: inputs.firstName,
          lname: inputs.lastName,
          number: inputs.mobile,
          pitch: inputs.pitch,
          rname: inputs.name,
          remail: inputs.email,
          rtitle: inputs.company,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      response.data?.(navigate("/home"));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    localStorage.setItem("selectedTabIndex", "3");
  }, []);
  return (
    <div className="questionsPage">
      <div className="qsection section1">
        <div className="circle">
          <div className="type">4</div>
          <div className="type">slides</div>
        </div>
        <div className="titleContainer">
          <div className="title">Our questions to you</div>
          <div className="subtitle">
            Let’s get to know you today. Your answers will help us understand if
            we are a good match for you. You are welcome to answer these
            questions at any time
          </div>
        </div>
        <div
          className="letsGoBtn"
          onClick={() => document.getElementById("section2").scrollIntoView()}
        >
          Let’s go
        </div>
      </div>
      <div id="section2" className="qsection section2">
        <div>
          <div className="title">Any basic details to share?</div>
          <form action="" className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First name"
              className="inputBox"
              value={inputs.firstName}
              name="firstName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last name"
              className="inputBox"
              value={inputs.lastName}
              name="lastName"
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
          </form>
          <button
            className="nextBtn"
            onClick={() => document.getElementById("section3").scrollIntoView()}
          >
            Next
          </button>
        </div>
      </div>
      <div id="section3" className="qsection section3">
        <div>
          <div className="title">Pitch yourself</div>
          <div className="subtitle">
            Stand out from the crowd in 140 characters
          </div>
          <form action="" className="form">
            <input
              type="text"
              placeholder="Write your pitch..."
              className="input_Box"
              value={inputs.pitch}
              name="pitch"
              onChange={handleChange}
            />
          </form>
          <div
            className="nextBtn"
            onClick={() => document.getElementById("section4").scrollIntoView()}
          >
            Next
          </div>
        </div>
      </div>
      <div id="section4" className="qsection section4">
        <div>
          <div className="title">My CV</div>
          <div>
            <FileUpload
              onFileSelect={(file) => {
                // Handle the selected file here
                setSelectedFile(file);
              }}
              onFileSelectError={({ error }) => alert(error)}
            />
          </div>
          <div
            className="nextBtn"
            onClick={() => document.getElementById("section5").scrollIntoView()}
          >
            Next
          </div>
        </div>
      </div>
      <div id="section5" className="qsection section5">
        <div className="titleC">
          <div className="title">Who can recommend you?</div>
          <div className="subtitle">
            Add people who can recommend and vouch for your credibility. cH will
            contact your favorable mentions via email. They will be asked to
            provide a reference for you.
          </div>
        </div>
        <form action="" className="form">
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
            placeholder="Name"
            className="inputBox"
            value={inputs.name}
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Company/Title"
            className="inputBox"
            value={inputs.company}
            name="company"
            onChange={handleChange}
          />
        </form>
        <button className="nextBtn btn" onClick={handleSubmit}>
          Add recommendation
        </button>
      </div>
    </div>
  );
};

export default Questions;
