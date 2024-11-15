async function getUserInfo(req, res) {
  console.log(req.query);

  const user = {
    name: "Protocol X",
    age: 28,
    city: "Ontario",
    country: "Canada",
  };
  res.status(200).json(user);
}

export default getUserInfo;
