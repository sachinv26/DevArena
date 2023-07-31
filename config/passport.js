const mongoose = require('mongoose');
const User = mongoose.model('users');
const LocalStrategy = require('passport-local').Strategy;

module.exports = passport => {
    passport.use(
        new LocalStrategy((req, userId, done) => {
            User.findById(userId)
                .then(user => {
                    if (user) {
                        // If the user is found, authenticate the user and pass it to the next middleware
                        return done(null, user);
                    } else {
                        // If the user is not found, return false to indicate authentication failure
                        return done(null, false);
                    }
                })
                .catch(err => done(err, false)); // In case of any errors, return false for authentication failure
        })
    );
};