import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import "./css/FAQ.css";


const FAQ = () => {


    const [FAQArrow, setFAQArrow] = useState(0);


    function handleButtonFAQClick() {
        if (FAQArrow === 0) {
            setFAQArrow(1);
        } else {
            setFAQArrow(0);
        }
    }


    return (

        <div style={{ minHeight: "100vh", width: "100vw", backgroundColor: "rgba(35, 36, 38, 1)" }}>

            <div className="FAQcontainer">
                <div className="FAQsmallcontainer">
                    <div className="FAQtext">
                    Frequently Asked Questions
                    </div>

                     <div className="FAQ_ques">
                        <div className="row1">
                            <Typography className="label">
                                <span className="whatis">What is </span><span className="collabhous">collabHous?</span>
                            </Typography>
                            <Button onClick={handleButtonFAQClick} >
                                {FAQArrow === 0 ?
                                    <img
                                        src="images/arrow_down.png"
                                        alt=""
                                        style={{ marginLeft: "24px" }}

                                    /> :
                                    <img
                                        src="images/VectorStraight.png"
                                        alt=""
                                        style={{ marginLeft: "24px" }}
                                    />}
                            </Button>
                        </div>
                        {FAQArrow === 1 ?
                            <div className="FAQDrop">
                                <div className="row2">
                                    <Typography className="label">Lorem ipsum dolor sit amet consectetur. Enim viverra lorem eu turpis et mauris et sit. Ornare malesuada vulputate volutpat magna risus in praesent dictum. Est in nunc diam donec ultricies volutpat in. Tristique morbi arcu malesuada id. Facilisis vestibulum tristique quisque nulla sed dictum quam dis. Adipiscing nullam suspendisse ac vitae ultrices tempor. Sed ipsum hendrerit ornare amet bibendum integer scelerisque ac natoque. Porta faucibus diam magna sagittis ornare tincidunt dui magna amet. Sapien sodales quis nunc morbi.
</Typography>
                                </div>

                            </div> : ""
                        }

                    </div> 
                </div>


            </div>
        </div>
    );
}

export default FAQ;


