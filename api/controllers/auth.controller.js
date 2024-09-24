import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  res.send("Registered successfully");
};
export const login = (req, res) => {
  //db operation
  console.log("login");
  res.send("login");
};
export const logout = (req, res) => {
  //db operation
  console.log("logout");
  res.send("logout");
};
