const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

passport.serializeUser((user , done)=>{
    done(null , user);
});

passport.deserializeUser(function(user ,done){
    done(null , user)
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/v1/google/callback",
    passReqToCallback: true
},
async function(request, accessToken, refreshToken, profile, done) {
    try {
        const { id, displayName, emails, photos } = profile;
        let user = await User.findOne({ googleId: id });

        if (!user) {
            user = new User({
                googleId: id,
                name: displayName,
                email: emails[0].value,
                profileImage: photos[0].value,
                isVerified:1
            });
            await user.save();
        }
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));
