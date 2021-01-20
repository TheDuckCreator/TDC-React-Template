import express from "express";
import passport from "passport";
import passportGithub from "passport-github";
import _ from "lodash";

import config from "../../config.json";
import UserModel from "../Model/User";

const router = express.Router();
const githubStrategy = passportGithub.Strategy;

passport.use(
  new githubStrategy(
    {
      clientID: config.clientId,
      clientSecret: config.clientSecret,
      callbackURL: config.callbackURL,
    },
    async (accessToken, refreshToken, profile, cb) => {
      let user;
      try {
        user = await UserModel.findOne({ githubId: profile.id });
        if (user && !_.isEmpty(user)) {
        } else {
          const newUser = await new UserModel({
            id: profile.id,
            name: profile.displayName,
            githubId: profile.id,
          });
          newUser.save();
        }
        return cb(undefined, user);
      } catch (error) {
        return cb(error, user);
      }
    }
  )
);

router.get("/github", passport.authenticate("github"));
router.get(
  "/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    console.log(res.data);
    res.send(res.data);
  }
);

export default router;
