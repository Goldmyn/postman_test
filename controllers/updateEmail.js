import Students from "../models/userModel.js";
import validator from "validator";

async function updateUserEmail(req, res) {
  const { userId } = req.params;
  const { email } = req.body;

  // check if userId is correct
  if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
    return res.status(400).json({ message: "Please provide the userId" });
  }

  if (!email || !validator.isEmail(email)) {
    return res
      .status(400)
      .json({ message: "Please Provide a valid email address" });
  }

  try {
    const updateStudentRecord = await Students.findByIdAndUpdate(
      userId,
      {
        email: email,
      },
      {
        new: true,
      }
    );
    console.log(updateStudentRecord);
    res
      .status(201)
      .json({ message: `Email address updates successfully to ${email}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sorry an error occurred" });
  }
}

export default updateUserEmail;
