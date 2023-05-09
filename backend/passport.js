const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "808958480008-h914kh5u2fli2f9qbvol1f99dvdf9hnd.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);




passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});