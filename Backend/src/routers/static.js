import express from "express";
const app = express.Router();

app.get("/", (req, res) => {
  res.send("The Duck Creator Express Server");
});

export default app;
