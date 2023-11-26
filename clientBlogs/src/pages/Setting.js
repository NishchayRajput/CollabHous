import React from "react";
import "./css/Setting.css";

const Setting = () => {
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
              type="text"
              placeholder="Upload"
              className="inputBox_profile"
            />
          </div>
          <div className="right_form">
            <input type="text" placeholder="First Name" className="inputBox" />
            <input type="text" placeholder="Last Name" className="inputBox" />
            <input type="text" placeholder="Email" className="inputBox" />
            <input type="text" placeholder="Mobile" className="inputBox" />
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
            <input className="radio-input" type="radio" id="Audi" name="brand" value="Audi" />
            <label className="label" for="Audi">Buying</label>
          </div>
          <div className="input_radio">
            <input className="radio-input" type="radio" id="Audi" name="brand" value="Audi" />
            <label className="label" for="Audi">Content and Activation</label>
          </div>
          <div className="input_radio">
            <input  className="radio-input"  type="radio" id="Audi" name="brand" value="Audi" />
            <label className="label" for="Audi">Customer care & Service</label>
          </div>
          <div className="input_radio">
            <input  className="radio-input"  type="radio" id="Audi" name="brand" value="Audi" />
            <label className="label" for="Audi">Ecom</label>
          </div>
          <div className="input_radio">
            <input  className="radio-input"  type="radio" id="Audi" name="brand" value="Audi" />
            <label className="label" for="Audi">Finance</label>
          </div>
        </form>
      </div>
      <div className="ssection section2">
        <div className="titleContainer">
          <div className="title">Job subscription</div>
          <div className="subtitle">
          Get new jobs sent to your email inbox. Select all or customise the departments and roles you want to stay updated on
          </div>
        </div>
        <form action="" className="form_radio">
          <div className="input_radio">
            <input className="radio-input" type="radio" id="Audi" name="brand" value="Audi" />
            <label className="label" for="Audi">Buying</label>
          </div>
          <div className="input_radio">
            <input className="radio-input" type="radio" id="Audi" name="brand" value="Audi" />
            <label className="label" for="Audi">Content and Activation</label>
          </div>
          <div className="input_radio">
            <input  className="radio-input"  type="radio" id="Audi" name="brand" value="Audi" />
            <label className="label" for="Audi">Customer care & Service</label>
          </div>
          <div className="input_radio">
            <input  className="radio-input"  type="radio" id="Audi" name="brand" value="Audi" />
            <label className="label" for="Audi">Ecom</label>
          </div>
          <div className="input_radio">
            <input  className="radio-input"  type="radio" id="Audi" name="brand" value="Audi" />
            <label className="label" for="Audi">Finance</label>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
