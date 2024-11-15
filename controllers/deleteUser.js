async function deleteUserAccount(req, res) {
  res.status(200).json({ message: "User Account Deleted Successfully" });
}

export default deleteUserAccount;
