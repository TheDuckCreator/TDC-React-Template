import express from "express";

import authRoute from "./Auth";
import userRouter from "./user";

const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("World");
});

// router.use("/auth", authRoute);
router.use("/user", userRouter);

export default router;
