import express from "express";
import path from "path";

const app = express.Router();
const staticPath = express.static(path.join(__dirname, "../www"));

app.use("/", staticPath);
app.use("/daily-booking", staticPath);
app.use("/room-booking", staticPath);
app.use("/create-booking", staticPath);
app.use("/management", staticPath);
app.use("/management/*", staticPath);

export default app;
