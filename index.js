import express from "express";

const app = express();
const port = 4000;

// used to extract values sent from the front-end
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// setting up a post route

app.post("/register", (req, res) => {
  console.log(req.body);

  res.status(201).json({ message: "User registration Successful" });
});

// setting up a put route

app.put("/update-profile", (req, res) => {
  res.status(200).json({ message: "Account updated Successfully" });
});

// setting up a patch route

app.patch("/update-email", (req, res) => {
  res.status(200).json({ message: "Updated Email Address" });
});

// setting up a delete route

app.delete("/delete-account", (req, res) => {
  res.status(200).json({ message: "Account deleted successfully" });
});

// setting up a route to retrieve user information
app.get("/get-info", (req, res) => {
  console.log(req.query);

  const user = {
    name: "Protocol X",
    age: 28,
    city: "Ontario",
    country: "Canada",
  };
  res.status(200).json(user);
});

// get single post

app.get("/post/:postId", (req, res) => {
  console.log(req.params);
  res.status(200).json({ post: "Today is an amazing Day" });
});

// listen for server request
app.listen(port, () => {
  console.log("Server Running");
});
