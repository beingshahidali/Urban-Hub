import jwt from "jsonwebtoken";
export const shouldBeLoggedIn = async (req, res) => {
  console.log(req.userId);
  return res.status(200).json({ message: "You are authenticated" });
};
export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "not authorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is invalid" });
    if (!payload.isAdmin)
      return res.status(403).json({ message: "Not an Admin" });
  });
  return res.status(200).json({ message: "You are authenticated" });
};
