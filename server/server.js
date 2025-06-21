const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 4000;
const JWT_SECRET = "your_jwt_secret_key_here"; // Change this in production

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("YOUR_MONGODB_CONNECTION_STRING", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// User schema and model
const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  passwordHash: String,
  income: Number,
  age: Number,
  phone: String,
});

const User = mongoose.model("User", userSchema);

// Signup endpoint
app.post("/api/signup", async (req, res) => {
  const { fullName, email, password, income, age, phone } = req.body;

  if (!email || !password || !fullName) {
    return res.status(400).json({ message: "Name, email and password required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: "Email already registered" });

  const passwordHash = await bcrypt.hash(password, 10);

  const user = new User({
    fullName,
    email,
    passwordHash,
    income,
    age,
    phone,
  });

  await user.save();

  res.status(201).json({ message: "User created successfully" });
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: "Email and password required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid email or password" });

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) return res.status(401).json({ message: "Invalid email or password" });

  // Optional: generate JWT token
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1d" });

  res.json({
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      income: user.income,
      age: user.age,
      phone: user.phone,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
