import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const userSchema = new Schema({
  id: String,
  lineUUID: String,
  name: String,
  profile: String,
  allow: { type: Boolean, default: false },
  role: { type: String, default: "USER" },
});

const userModel = Mongoose.model("User", userSchema);
export default userModel;
