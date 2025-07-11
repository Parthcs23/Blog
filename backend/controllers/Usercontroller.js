import User from "../models/User.js"

export const usersignup = async (req, res) => {
  const { name, email, password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({ message: "min. length for password is 6" });
  }

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "User already exists" });
    }

    const Newuser = new User({ name, email, password });
    await Newuser.save();
    return res.status(201).json({ message: "user created successfully", user: Newuser });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
