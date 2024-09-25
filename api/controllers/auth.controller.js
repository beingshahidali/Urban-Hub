import bcrypt, { hash } from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).send("Registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .send("An error occurred while registering user: " + error.message);
  }
};
export const login = (req, res) => {
  console.log("login");
  res.send("login");
};
export const logout = (req, res) => {
  console.log("logout");
  res.send("logout");
};
