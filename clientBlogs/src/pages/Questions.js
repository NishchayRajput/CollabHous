import React, { useState } from "react";
import "./css/Questions.css";

import FileUpload from "../components/FileUpload";

const Questions = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div>
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
        <div className="letsGoBtn">Let’s go</div>
      </div>
      <div className="qsection section2">
        <div>
          <div className="title">Any basic details to share?</div>
          <form action="" className="form">
            <input type="text" placeholder="First name" className="inputBox" />
            <input type="text" placeholder="Last name" className="inputBox" />

            <input type="text" placeholder="Mobile" className="inputBox" />
          </form>
          <div className="nextBtn">Next</div>
        </div>
      </div>
      <div className="qsection section3">
        <div>
          <div className="title">Pitch yourself</div>
          <div className="subtitle">
            Stand out from the crowd in 140 characters
          </div>
          <form action="" className="form">
            <input
              type="text"
              placeholder="Write your pitch..."
              className="inputBox"
            />
          </form>
          <div className="nextBtn">Next</div>
        </div>
      </div>
      <div className="qsection section4">
        <div>
          <div className="title">My CV</div>
          <div className="fileupload">
            <FileUpload
              onFileSelectSuccess={(file) => setSelectedFile(file)}
              onFileSelectError={({ error }) => alert(error)}
            />
          </div>
          <div className="nextBtn">Next</div>
        </div>
      </div>
      <div className="qsection section5">
        <div className="titleC">
          <div className="title">Who can recommend you?</div>
          <div className="subtitle">
            Add people who can recommend and vouch for your credibility. cH will
            contact your favorable mentions via email. They will be asked to
            provide a reference for you.
          </div>
        </div>
        <form action="" className="form">
          <input type="text" placeholder="Email" className="inputBox" />
          <input type="text" placeholder="Name" className="inputBox" />
          <input type="text" placeholder="Company/Title" className="inputBox" />
        </form>
        <div className="nextBtn btn">Add recommendation</div>
      </div>
    </div>
  );
};

export default Questions;
