import jwt from "jsonwebtoken";
import _ from "lodash";

import config from "../configs/app";
const secret = config.secret;

const generateToken = (payload) => {
  try {
    const token = jwt.sign(payload, secret);
    return token;
  } catch (error) {
    throw new Error("Token cannot generate", error);
  }
};

const verifyToken = (token) => {
  try {
    const decode = jwt.verify(token, secret);

    // Add Another to more step check
    if (decode) {
      return true;
    }

    return false;
  } catch (error) {
    throw new Error("Cannot Verify your token", error);
  }
};

const verifyRequest = (req, res, next) => {
  const bearerToken = req.headers.Authorization;
  const token = _.last(_.split(bearerToken, ""));
  try {
    if (verifyToken(token) === true) {
      next();
    } else {
      res.status(403);
    }
  } catch (error) {}
};

export default { generateToken, verifyToken, verifyRequest };
