import express from "express";
const app = express();
const port = 4000;

import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";
import "dotenv/config";

// used to extract values sent from the front-end
app.use(express.json());

// app.use() is how you get the sub-route to connect from routes to index.js
// we use /api/v1 to define our route link when working with api's
// we only need to call imported sub-route once using app.use(), this will import
// al the routes created in the sub-route.
app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to mongoDB

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Server Running");
    console.log("Database connection successful");
  } catch (error) {
    console.log(error);
  }
}

// listen for server request
app.listen(port, () => {
  connectDB();
});
