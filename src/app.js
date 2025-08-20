"use strict";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mainRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors({
  origin: [
    "http://localhost:4200",
    "http://localhost:3000",
    "https://jointome.netlify.app",
    "https://jtm-frontend.onrender.com",
    "https://jointome.com",
    "http://jtm-frontend.s3-website.ap-south-1.amazonaws.com",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(morgan("dev"));
app.use("/", mainRoutes);
app.get("/", (req, res) => res.send("Hello from AWS Lambda!"));
export default app;
