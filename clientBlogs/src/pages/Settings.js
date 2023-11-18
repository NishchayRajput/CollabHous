import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "../pages/css/Settings.css";
import { Button } from "@mui/material";

const Settings = ()=> {

    const image="";
    const username="Username";
    const bio="Bio";
    const email="blah";
    const mobile="5454";


    const [socialMediaArrow, setSocialMediaArrow] = useState(0);
    const [dataArrow, setDataArrow] = useState(0);

    function handleButtonSocialClick(){
        if(socialMediaArrow==0){
            setSocialMediaArrow(1);
        }else{
            setSocialMediaArrow(0);
        }
    }

    function handleButtonDataClick(){
        if(dataArrow==0){
            setDataArrow(1);
        }else{
            setDataArrow(0);
        }
    }
   
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "rgba(35, 36, 38, 1)" }}>
            <div className="settingsContainer">
                <Card id="userBoard">
                    <CardMedia component="img" height="55%" image={image} alt="Paella dish" style={{backgroundColor:'pink'}} />
                    <Avatar id="avatar" sx={{ border: "2px solid rgba(35, 36, 38, 1)",boxShadow: 20}}></Avatar>
                    <CardHeader 
                        title=<p style={{
                            color: "white",
                            fontFamily: 'Roboto',
                            fontWeight: "700",
                            fontSize: "26px",
                            lineHeight: "28px",
                        }}>{username}</p>
                        className="username"
                    />
                    <CardContent>
                        <Typography className="bio">
                            {bio}
                        </Typography>
                    </CardContent>
                </Card>
                <Card id="userDetails">
                        <div className="info">
                            <div className="row">
                            <Typography className="label">Username</Typography>
                            <Typography className="values">{username}</Typography>
                            </div>
                            <div className="row">
                            <Typography className="label">Email</Typography>
                            <Typography className="values">{email}</Typography>
                            </div>
                            <div className="row">
                            <Typography className="label">Mobile</Typography>
                            <Typography className="values">{mobile}</Typography>
                            </div>
                            <div className="row">
                            <Typography className="label">CV</Typography>
                            <Typography className="values">View Upload</Typography>                 
                            </div>
                            <div className="row">
                            <Typography className="label">Social Media </Typography>
                            <Button onClick={handleButtonSocialClick} >
                                    {socialMediaArrow===0?
                                    <img
                                        src="images/Vector.png"
                                        alt=""
                                        style={{ marginLeft: "24px" }}

                                    />: 
                                        <img
                                        src="images/VectorStraight.png"
                                        alt=""
                                        style={{ marginLeft: "24px" }}
                                    />}
                            </Button>
                            </div>
                            <div className="row">
                                <Typography className="label">Data & Privacy</Typography>
                                <Button onClick={handleButtonDataClick} >
                                    {dataArrow===0?
                                    <img
                                        src="images/Vector.png"
                                        alt=""
                                        style={{ marginLeft: "24px" }}

                                    />: 
                                        <img
                                        src="images/VectorStraight.png"
                                        alt=""
                                        style={{ marginLeft: "24px" }}
                                    />}
                                </Button>
                            </div>
                            <div className="signout">
                                <Button style={{

                                    fontFamily: 'Roboto',
                                    fontWeight: "700",
                                    fontSize: "16px",
                                    lineHeight: "19px",
                                    color: "#545454",

                                }}>
                                    <img
                                        src="images/VectorSignOut.png"
                                        alt=""
                                        style={{ marginLeft: "24px" }}

                                    /><span >&nbsp;Signout</span> 
                                </Button>
                            </div>
                            
                        </div>
                </Card>
            </div>
        </div>
    );
}

export default Settings;