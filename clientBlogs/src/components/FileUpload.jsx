import React, { useRef } from "react";
import "./css/FileUpload.css";

const FileUploader = ({ onFileSelect }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    onFileSelect(e.target.files[0]);
  };

  const handleButtonClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  return (
    <div className="file-uploader">
      <input
        type="file"
        onChange={handleFileInput}
        ref={fileInput}
        style={{ display: "none" }}
      />
      <button onClick={handleButtonClick} className="btn custom">
        Upload
      </button>
    </div>
  );
};
export default FileUploader;
