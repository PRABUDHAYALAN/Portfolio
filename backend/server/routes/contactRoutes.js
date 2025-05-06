const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/contact.js");

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1. Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2. Send email to your inbox
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP config
      auth: {
        user: "prabuhacker0@gmail.com",
        pass: "cfit faqs zjfx jfmx" // Use App Password if 2FA is enabled
      }
    });

    const mailOptions = {
      from: email,
      to: "your.email@gmail.com", // your inbox
      subject: `New Contact from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;
