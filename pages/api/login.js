import connectDb from "../../utils/connectDb";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists with the provided email
    const user = await User.findOne({ email }).select("+password");
    // If not return error
    if (!user) {
      return res.status(404).send(`No user exists with that email`);
    }
    // Check to see if the user password matches the on in db
    const passwordsMatch = await bcrypt.compare(password, user.password);
    // If so, generate a token
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      // Send that token to the client
      return res.status(200).json(token);
    } else {
      return res.status(401).send("Password does not match");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error logging in user");
  }
};
