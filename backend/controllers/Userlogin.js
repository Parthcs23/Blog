import User from "../models/User.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const existingUser = await User.findOne({ email });
    
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (existingUser.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }


    return res.status(200).json({ message: "Login successful", user: existingUser });

  } catch (error) {
    console.log("Login error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
