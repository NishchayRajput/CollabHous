const mongoose = require('mongoose');
const commune = require('../models/commune');
const userInfo = require('../../ecommerce/models/userInfo');

async function get_settings(req, res){
  try{
    const udata = userInfo.findById(req.body.uId);
    const data = commune.findById(req.body.uId);
    if(data){
      res.status(200).json({message : "data found", data : {data , udata}});
    }else{
      res.status(200).json({message : 'data not found'});
    }
  }
  catch(error){
    res.status(500).json({message : "getting error in fetching data", error : error});
  }
}

async function settings(req, res) {
  try {
    
    let id = req.body.uId;
    

    const user = await commune.findOne({ user: id });

    if (user && user.settings) {
      // If user and user.settings exist, update them with the latest values
      // const { fname, lname, email, number, primary_role, job_notification_status, job_notification_type } = req.body;

      // user.settings.fname = fname;
      // user.settings.lname = lname;
      // user.settings.email = email;
      // user.settings.number = number;
      // user.settings.primary_role = primary_role;
      // user.settings.job_notification_status = job_notification_status;
      // user.settings.job_notification_type = job_notification_type;

      // await user.save();

      res.status(200).json({ message: 'User details already exist', user : user});
    } else {
      const { fname, lname, email, number, primary_role, job_notification_status, job_notification_type } = req.body;

      const settings = {
        fname: fname,
        lname: lname,
        email: email,
        number: number,
        primary_role: primary_role,
        job_notification_status: job_notification_status,
        job_notification_type: job_notification_type,
        // image : image
      };

      const communeInstance = new commune({ user: id, settings: settings });
      await communeInstance.save();

      res.status(200).json({ message: 'User created', communeInstance });
    }

  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error });
  }
}

async function questions(req, res) {
  try {

    
    let id = req.body.uId;
    


    const user = await commune.findOne({ user: id });

    const { fname, lname, number, pitch } = req.body;
    console.log(req.body);
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



module.exports = {settings, questions, get_settings};
