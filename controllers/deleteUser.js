import Students from "../models/userModel.js";
import validator from "validator";

async function deleteUserAccount(req, res) {
  const { email } = req.query;

  // check if email is provided

  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ message: "Provide email address" });
  }

  try {
    const deletedUser = await Students.deleteOne({ email: email });
    console.log(deletedUser);

    res.status(201).json({ message: "User Account Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error Occurred" });
  }
}

export default deleteUserAccount;
