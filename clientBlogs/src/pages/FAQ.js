import * as React from "react";
import "./css/FAQ.css";
import FAQBox from "../components/FAQ_box";

export default function BasicAccordion() {
  React.useEffect(() => {
    localStorage.setItem("selectedTabIndex", "NULL");
    // const index = localStorage.getItem("selectedTabIndex");
    // function timerFunction() {
    //   count++;
    //   if (count === 1 && index != "NULL") {
    //     window.location.reload();
    //   
    // }

    // setInterval(timerFunction, 1000);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "rgba(35, 36, 38, 1)",
      }}
    >
      <div className="FAQcontainer">
        <div className="FAQtext">Frequently Asked Questions</div>
        <div className="FAQboxes">
          <FAQBox />
          <FAQBox />
          <FAQBox />
          <FAQBox />
          <FAQBox />
          <FAQBox />
        </div>
      </div>
    </div>
  );
}
