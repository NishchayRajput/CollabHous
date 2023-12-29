const mongoose = require("mongoose");
const commune = require("../models/commune");
const userInfo = require("../../ecommerce/models/userInfo");
const { S3 } = require("aws-sdk/clients/s3");
const fs = require("fs");
const { ObjectId } = mongoose.Types;

async function get_settings(req, res) {
  try {
    // console.log(req.body.uId);

    // const udata = await userInfo.findById(req.body.uId);

    const data = await commune.findOne({ user: new ObjectId(req.body.uId) });
    // console.log(data);

    if (data) {
      res.status(200).json({ message: "data found", data: { data } });
    } else {
      res.status(404).json({ message: "data not found", error: error });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "getting error in fetching data", error: error });
  }
}

async function settings(req, res) {
  try {
    const id = req.body.uId;
    console.log(id);

    const {
      fname,
      lname,
      email,
      number,
      primary_role,
      job_notification_status,
      job_notification_type,
      itemsArray,
      profileImg,
    } = req.body;

    // const file = fs.createReadStream(profileImg.path);

    // if (profileImg) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     // The file's text will be printed here
    //     console.log(reader.result);
    //   };
    //   reader.readAsDataURL(profileImg);
    // }
    console.log("profileImage: ", profileImg);

    const settings = {
      fname: fname,
      lname: lname,
      email: email,
      number: number,
      primary_role: primary_role,
      job_notification_status: job_notification_status,
      job_notification_type: job_notification_type,
      items: itemsArray,
    };
    console.log(settings);

    const communeInstance = await commune
      .findOneAndUpdate(
        { user: id },
        { $set: { settings: settings } },
        { new: true }
      )
      .exec();

    console.log(communeInstance);

    if (!communeInstance) {
      // Handle if communeInstance is null or undefined
      return res.status(404).json({ message: "Commune not found" });
    }

    res.status(200).json({ message: "User settings updated", communeInstance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
}

// module.exports = { settings };

async function questions(req, res) {
  try {
    let id = req.body.uId;

    const user = await commune.findOne({ user: id });

    const { fname, lname, number, pitch, rname, remail, rtitle } = req.body;

    const newQuestion = {
      fname: fname,
      lname: lname,
      number: number,
      pitch: pitch,
      rname: rname,
      rtitle: rtitle,
      remail: remail,
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

    res.status(200).json({ message: "Question added", newQuestion });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server error asdfasdf", error: error });
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
    res
      .status(500)
      .json({ message: "Error in setting interest", error: error });
  }
}

async function get_interest(req, res) {
  try {
    const userId = req.body.uId; // Assuming the user ID is in the URL parameters
    const user = await commune.findOne({ user: userId }).select("interest");

    if (user) {
      const interest = user.interest || [];
      res
        .status(200)
        .json({ message: "Interest retrieved", interest: interest });
    } else {
      res.status(404).json({ message: "User not found", interest: [] });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error in getting interest", error: error });
  }
}

module.exports = {
  settings,
  questions,
  get_settings,
  set_interest,
  get_interest,
};
