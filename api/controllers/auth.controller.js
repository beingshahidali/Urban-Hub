export const register = (req, res) => {
  //db operation
  console.log("register");
  console.log(req.body);
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
