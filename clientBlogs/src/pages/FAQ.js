// import React, { useState } from "react";
// import { Button, Typography } from "@mui/material";
import "./css/FAQ.css";
import FAQ_box from "../components/FAQ_box";


// const FAQ = () => {


//     const [FAQArrow, setFAQArrow] = useState(0);


//     function handleButtonFAQClick() {
//         if (FAQArrow === 0) {
//             setFAQArrow(1);
//         } else {
//             setFAQArrow(0);
//         }
//     }


//     return (

//         <div style={{ minHeight: "100vh", width: "100vw", backgroundColor: "rgba(35, 36, 38, 1)" }}>

//             <div className="FAQcontainer">
//             <div className="FAQtext">
//                     Frequently Asked Questions
//                     </div>
//            <div className="allboxes">
//                     <div><FAQ_box/></div>
//                     <div><FAQ_box/></div>
//                     {/* <FAQ_box/>
//                     <FAQ_box/>
//                     <FAQ_box/>
//                     <FAQ_box/> */}
//                     </div>

//             </div> 
//         </div>
//     );
// }





// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function BasicAccordion() {
//   return (
//     <div style={{ minHeight: "100vh", width: "100vw", backgroundColor: "rgba(35, 36, 38, 1)" }}>
//          <div className="FAQcontainer">

//         <div className="FAQsmallcontainer">
//                      <div className="FAQtext">
//                      Frequently Asked Questions
//                     </div>
//                     <div className="row1">
//       <Accordion className="row1">
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
            
//           <Typography className="label1">
//           <span className="whatis">What is </span><span className="collabhous">collabHous?</span>
//           </Typography>
//         </AccordionSummary>
//         <Accordion>
//         <AccordionDetails>
//             <div className="FAQDrop">
//                 <div className="row2">
//           <Typography className="label2">
//           <span>Lorem ipsum dolor sit amet consectetur. Enim viverra lorem eu turpis et mauris et sit. Ornare malesuada vulputate volutpat magna risus in praesent </span>
//           <span>dictum. Est in nunc diam donec ultricies volutpat in. Tristique morbi arcu malesuada id. Facilisis vestibulum tristique quisque nulla sed dictum quam dis.</span>
//              <span>Adipiscing nullam suspendisse ac vitae ultrices tempor. Sed ipsum hendrerit ornare amet bibendum integer scelerisque ac natoque. Porta</span>
//              <span>faucibus diam magna sagittis ornare tincidunt dui magna amet. Sapien sodales quis nunc morbi.</span>

//           </Typography>
//           </div>
//           </div>
//         </AccordionDetails>
//       </Accordion>

//       </div>
//       </div>
      
//     </div>
//   );
// }

import * as React from 'react';
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




