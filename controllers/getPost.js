async function getUserPost(req, res) {
  console.log(req.params);
  res.status(200).json({ post: "Today is an amazing Day" });
}

export default getUserPost;
