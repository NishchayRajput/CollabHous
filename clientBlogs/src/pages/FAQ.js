import * as React from 'react';
import "./css/FAQ.css";
import FAQ_box from "../components/FAQ_box";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div style={{ minHeight: "100vh", width: "100vw", backgroundColor: "rgba(35, 36, 38, 1)" }}>
        <div className="FAQcontainer">
        <div className="FAQsmallcontainer">
        <div className="FAQtext">
                      Frequently Asked Questions
                  </div>
                  <div className="allboxes">
                  <FAQ_box/>
                  <FAQ_box/>
                  <FAQ_box/>
                  <FAQ_box/>
                  <FAQ_box/>
                  <FAQ_box/>
                  </div>
   
      </div>
    </div>
    </div>
  );
}




