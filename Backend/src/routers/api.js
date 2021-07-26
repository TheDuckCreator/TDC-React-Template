import Express from "express";
import AuthRouter from "./Auth";
const app = Express.Router();

app.get("/hello", (req, res) => {
  res.send("World");
});

app.use("/auth", AuthRouter);

export default app;
