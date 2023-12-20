import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  "../components/css/FAQ_box.css"

const FAQ_box= () => {
return (
      <Accordion>
        <div className='row1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="label1">
          <span className="whatis">What is </span><span className="collabhous">collabHous?</span>
          </Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className="FAQDrop">
            <div className="row2">
          <Typography className="label2">
          <span>Lorem ipsum dolor sit amet consectetur. Enim viverra lorem eu turpis et mauris et sit. Ornare malesuada vulputate volutpat magna risus in praesent </span>
          <span>dictum. Est in nunc diam donec ultricies volutpat in. Tristique morbi arcu malesuada id. Facilisis vestibulum tristique quisque nulla sed dictum quam dis.</span>
              <span>Adipiscing nullam suspendisse ac vitae ultrices tempor. Sed ipsum hendrerit ornare amet bibendum integer scelerisque ac natoque. Porta</span>
              <span>faucibus diam magna sagittis ornare tincidunt dui magna amet. Sapien sodales quis nunc morbi.</span>
          </Typography>
          </div>
        </AccordionDetails>
      </Accordion>

);
}

export default FAQ_box;