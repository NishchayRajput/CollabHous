import React, {useState} from "react";
import SettingsCard from "../components/SettingsCard";
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
                        title=<p className="username">{username}</p>
                        className="usernameHeader"
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
                            {socialMediaArrow===1? 
                                <div className="socialMediaDrop">
                                <div className="row">
                                <Typography className="label">Instagram</Typography>
                                <Typography className="values">Instagram</Typography>
                                </div>
                                <div className="row">
                                <Typography className="label">Youtube</Typography>
                                <Typography className="values">youtube</Typography>
                                </div>
                                <div className="row">
                                <Typography className="label">Linkedin</Typography>
                                <Typography className="values">linkedin</Typography>
                                </div>
                                </div> : ""
                            }
                            
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
                            {dataArrow===1?
                                <div className="dataDrop">
                                    <SettingsCard 
                                        heading="Request my data"
                                        content="Get a copy of the recruitment-related personal data that we process about you"
                                        button="Request"
                                    />
                                    <SettingsCard 
                                        heading="Remove my data"
                                        content="We will assess your request and delete all your personal data we no longer have a reason to keep"
                                        button="Request"

                                    />
                                    <SettingsCard 
                                        heading="Privacy Policy"
                                        content="Read more about how CHcommune collects and processes your personal data"
                                        button="View"
                                    />
                                    <SettingsCard 
                                        heading="Cookie Policy"
                                        content="Find out more about how we use cookies to improve your user experience our website "
                                        button="View"
                                    />
                                </div>
                                : ""
                            }
                            <div className="signoutDiv">
                                <Button className="signout">
                                    <img
                                    src="images/VectorSignOut.png"
                                    alt=""/>
                                        
                                    <span >&nbsp;Signout</span> 
                                </Button>
                            </div>
                           
                        </div>
                </Card>
            </div>
        </div>
    );
}

export default Settings;