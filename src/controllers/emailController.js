"use strict";
import { readFileSync } from "fs";
import Handlebars from "handlebars";
import nodemailer from "nodemailer";

// Email sending route
const sendEmail = async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info.jointome@gmail.com",
      pass: "xtmh ockt qtsl ghqf",
    },
  });

  const replaceMessage = message.replace(/\n/g, "<br>");
  const date = new Date().getFullYear();

  const contentEmail = readFileSync("./templates/contactEmail.html", "utf-8");
  const templateForEmail = Handlebars.compile(contentEmail);
  const htmlContent = templateForEmail({ name, email, phone, replaceMessage, date });

  const mailOptions = {
    from: email,
    to: "info.jointome@gmail.com",
    subject: `${name}`,
    html: htmlContent,
  };
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({
      statusCode: 200,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const emailController = { sendEmail };