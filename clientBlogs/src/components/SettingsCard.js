import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "../components/css/SettingsCard.css";
import { Button } from "@mui/material";

const SettingsCard =(props)=>{
    return(
        <div>
            <Card className="settingsCard">
                    
                    <Typography className="cardHeading">
                        {props.heading}
                    </Typography>

                    <Typography className="cardContent">
                        {props.content}
                    </Typography>

                    <Button className="button">
                        {props.button}
                    </Button>
                    
            </Card>
        </div>
    );
}


export default SettingsCard;