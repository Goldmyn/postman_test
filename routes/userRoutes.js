import express from "express";
const router = express.Router();
import registerUser from "../controllers/register.js";
import updateUserProfile from "../controllers/updateProfile.js";
import updateUserEmail from "../controllers/updateEmail.js";
import deleteUserAccount from "../controllers/deleteUser.js";
import getUserInfo from "../controllers/getUser.js";
import getUserPost from "../controllers/getPost.js";

router.post("/register", registerUser);
router.put("/update-profile/:userId", updateUserProfile);
router.patch("/update-email/:userId", updateUserEmail);
router.delete("/delete-account", deleteUserAccount);
router.get("/get-info", getUserInfo);
router.get("/post/:postId", getUserPost);

export default router;
