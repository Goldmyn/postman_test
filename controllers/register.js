import Students from "../models/userModel.js";
import validator from "validator";

async function registerUser(req, res) {
  const { firstName, lastName, email, age, city, hobbies } = req.body;
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
  // check if an account with the email already exists
  const checkEmailInUse = await Students.findOne({ email: email });
  if (checkEmailInUse !== null) {
    return res
      .status(400)
      .json({ message: `An account with ${email} already exists` });
  }

  try {
    // create a record
    const createdStudent = await Students.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      city: city,
      hobbies: hobbies,
    });
    console.log(createdStudent);

    res.status(201).json({ message: "Student Registration Successful" });
  } catch (error) {
    // throw an error if any
    console.log(error);

    res
      .status(500)
      .json({ message: "Sorry An Error Occurred: User registration Failed" });
  }
}

export default registerUser;
