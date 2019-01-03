const router = require('express').Router();
const {User} = require('./db');
const passport = require('passport');
// don't forget to install passport-google-oauth
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const googleCredentials = require('./localsecrets');
//Normally I was putting credentails in a seperate folder and gitignore that file, but only for this projet it is open.
module.exports = router;

// Google authentication and login (GET /auth/google)
router.get('/', passport.authenticate('google', {scope: 'email'}));

// handles the callback after Google has authenticated the user (GET /auth/google/callback)
router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: '/home', // or wherever
    failureRedirect: '/' // or wherever
  })
);

const googleCredentials = {
  clientID:
    '1005212539763-lsosv3s7h1uvc2g3e44umtinevrp3uvi.apps.googleusercontent.com',
  clientSecret: 'xK_p_GRDNK_MJxu_Nio0fFG2',
  callbackURL: '/auth/google/callback'
  // Google will send back the token and profile
};

const verificationCallback = async (token, refreshToken, profile, done) => {
  // the callback will pass back user profile information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
  const info = {
    email: profile.emails[0].value,
    imageUrl: profile.photos ? profile.photos[0].value : undefined
  };
  try {
    const [user] = await User.findOrCreate({
      where: {googleId: profile.id},
      defaults: info
    });
    done(null, user); // the user we pass to done here is piped through passport.serializeUser
  } catch (err) {
    done(err);
  }
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err);
    });
});

const strategy = new GoogleStrategy(googleCredentials, verificationCallback);

// configuring the strategy (credentials + verification callback)
// this is used by 'passport.authenticate'
passport.use(strategy);
