import Students from "../models/userModel.js";
import validator from "validator";

async function updateUserProfile(req, res) {
  const { userId } = req.params;
  const { firstName, lastName, email, age, city, hobbies } = req.body;

  // check is userId is provided
  if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
    return res.status(400).json({ message: "Please provide a userId" });
  }

  // check is user provided firstName

  if (!firstName || firstName.trim().length < 3) {
    return res.status(400).json({ message: "Please Provide your First Name" });
  }
  // check is user provided lastName
  if (!lastName || lastName.trim().length < 3) {
    return res.status(400).json({ message: "Please Provide your Last Name" });
  }
  // check is user provided age greater than 18
  if (!age || age < 18) {
    return res.status(400).json({ message: "Must be older than 18" });
  }
  // check is user provided city
  if (!city || city.trim().length < 2) {
    return res
      .status(400)
      .json({ message: "Please Provide a valid City Name" });
  }
  // check is user provided hobbies
  if (hobbies && hobbies.length === 0) {
    return res.status(400).json({ message: "Please provide your hobbies" });
  }

  if (!email || validator.isEmail(email) === false) {
    return res.status(400).json({ message: "Provide a valid Email" });
  }
  // check if an account with the userId already exists
  const checkIfAccountExists = await Students.findById(userId);
  if (checkIfAccountExists === null) {
    return res.status(400).json({
      message: `Update Failed, An Account With ${userId} Does Not Exists`,
    });
  }

  try {
    const studentProfileUpdated = await Students.findByIdAndUpdate(
      userId,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        hobbies: hobbies,
        age: age,
      },
      {
        new: true,
      }
    );
    console.log(studentProfileUpdated);
    res.status(200).json({ message: "Account Updated Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Sorry An error Occurred" });
  }
}

export default updateUserProfile;
