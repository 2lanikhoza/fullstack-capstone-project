const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { connectToDatabase } = require("../models/db");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const users = db.collection("users");

    const { fullName, email, password } = req.body;

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await users.insertOne({
      fullName,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User registered successfully",
      userId: result.insertedId
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const users = db.collection("users");

    const { email, password } = req.body;

    const user = await users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      "secretKey",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
});

router.put("/user/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const users = db.collection("users");

    const { id } = req.params;
    const { fullName, email } = req.body;

    const result = await users.updateOne(
      { _id: id },
      { $set: { fullName, email } }
    );

    res.json({
      message: "User information updated successfully",
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error });
  }
});

module.exports = router;