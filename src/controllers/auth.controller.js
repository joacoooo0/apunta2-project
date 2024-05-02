import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const newUser = new User({
      email,
      password,
      username,
    });

    const userSaved = await newUser.save();
    res.json(userSaved);
  } catch (error) {
    console.error();
  }
};
export const login = (req, res) => res.send("Login");
