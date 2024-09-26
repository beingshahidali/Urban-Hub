import bcrypt, { hash } from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .send("An error occurred while registering user: " + error.message);
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    if (!user) return res.status(401).send({ message: "Invalid credentials" });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).send({ message: "Invalid password" });
    // res.setHeader("Set-cookie", "test=" + "myValue").send("Successfully ");
    const age = 1000 * 60 * 7;
    const { password: userPassword, ...userInfo } = user;
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );
    res
      .cookie("token", token, {
        httpOnly: true,
        //  secure: true,
        maxAge: age,
      })
      .status(200)
      .send(userInfo);
  } catch (e) {
    res.status(500).send("An error occurred while logging in: " + e.message);
  }
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).send({ message: "Logout successfull" });
};
