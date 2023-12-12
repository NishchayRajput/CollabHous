import * as React from 'react';
import "./css/FAQ.css";
import FAQBox from "../components/FAQ_box";

export default function BasicAccordion() {
  return (
    <div style={{ minHeight: "100vh", width: "100vw", backgroundColor: "rgba(35, 36, 38, 1)" }}>
        <div className="FAQcontainer">
        <div className="FAQsmallcontainer">
        <div className="FAQtext">
                      Frequently Asked Questions
                  </div>
                  <div className="allboxes">
                  <FAQBox/>
                  <FAQBox/>
                  <FAQBox/>
                  <FAQBox/>
                  <FAQBox/>
                  <FAQBox/>
                  </div>
   
      </div>
    </div>
    </div>
  );
}




