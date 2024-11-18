import Students from "../models/userModel.js";
import validator from "validator";

async function getUserInfo(req, res) {
  const { email } = req.query;

  // check if valid email address was sent
  if (!email || !validator.isEmail(email)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid email address" });
  }

  // check is user was not found
  const user = await Students.findOne({ email: email });
  if (user === null) {
    return res
      .status(400)
      .json({ message: `No record found with this email: ${email}` });
  }

  res.status(200).json({ message: "Success", studentRecord: user });
}

export default getUserInfo;
