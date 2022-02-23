import passport from "passport";
import GitHubStrategy from "passport-github2"
import User from "../db/User";
import { Stragety: GitHubStrategy }


const GITHUB_CLIENT_ID = '9f08ac674bbd0e523d30';
const GITHUB_CLIENT_SECRET = 'cbeabf16c8129929811b43d3348a82b6a9c8a52d';


passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

