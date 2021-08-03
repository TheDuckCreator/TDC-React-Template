import mongoose from "mongoose";
import config from "./app";
// Database
mongoose.connect(config.dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Connect to MongoDB have some error :( ");
  console.error(err);
});
db.on("open", () => {
  console.log("Connect to Mongodb Success");
});
