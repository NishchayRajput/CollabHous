const mongoose = require('mongoose');
const commune = require('../models/commune');
const userInfo = require('../../ecommerce/models/userInfo');
const {S3} = require('aws-sdk/clients/s3');
const fs = require('fs');
async function get_settings(req, res){
  try{
    
    // const udata = await userInfo.findById(req.body.uId);
    
    const data = await commune.findOne({user : req.body.uId});
    
    if(data){

      res.status(200).json({message : "data found", data : { udata}});

    }else{
      res.status(404).json({message : "data not found", error : error});
    }
  }
  catch(error){
    console.log(error);
    res.status(500).json({message : "getting error in fetching data", error : error});
  }
}

async function settings(req, res) {
  try {
    
    let id = req.body.uId;
    
      const { fname, lname, email, number, primary_role, job_notification_status, job_notification_type } = req.body;


      const settings = {
        fname: fname,
        lname: lname,
        email: email,
        number: number,
        primary_role: primary_role,
        job_notification_status: job_notification_status,
        job_notification_type: job_notification_type,
        items: itemsArray
      };


      const communeInstance = commune.findByIdAndUpdate(id, { settings: settings });

      // const communeInstance = new commune({ user: id, settings: settings });
      // await communeInstance.save();

      res.status(200).json({ message: 'User created', communeInstance });


  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error });
  }
}

async function questions(req, res) {
  try {

    
    let id = req.body.uId;
    


    const user = await commune.findOne({ user: id });

    const { fname, lname, number, pitch } = req.body;
    
    const newQuestion = {
      fname: fname,
      lname: lname,
      number: number,
      pitch: pitch,
    };

    if (user && user.questions) {
      // Append the new question to the existing questions array
      user.questions.push(newQuestion);
      await user.save();
    } else {
      // If user or user.questions doesn't exist, create a new array with the new question
      const nquestion = new commune({ user: id, questions: [newQuestion] });
      await nquestion.save();
    }

    res.status(200).json({ message: 'Question added', newQuestion });



  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error asdfasdf', error: error });

  }
}

async function set_interest(req, res) {
  try {
    const { interest } = req.body;
    const userId = req.body.uId;
    const user = await commune.findOne({ user: userId });

    if (user) {
      user.interest = interest; // Update the interest field directly
      await user.save(); // Save the changes
      res.status(200).json({ message: "Interest set", user: user });
    } else {
      const newCommuneUser = new commune({
        user: userId,
        interest: interest,
      });
      await newCommuneUser.save();
      res.status(200).json({ message: "Interest set", user: newCommuneUser });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in setting interest", error: error });
  }
}


async function get_interest(req, res) {
  try {
    const userId = req.body.uId; // Assuming the user ID is in the URL parameters
    const user = await commune.findOne({ user: userId }).select('interest');


    if (user) {
      const interest = user.interest || [];
      res.status(200).json({ message: "Interest retrieved", interest: interest });
    } else {
      res.status(404).json({ message: "User not found", interest: [] });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in getting interest", error: error });
  }
}

module.exports = {settings, questions, get_settings, set_interest, get_interest};
