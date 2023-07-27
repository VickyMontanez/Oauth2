import passport from "passport";
import {Strategy as DiscordStrategy} from "passport-discord";
import {Strategy as GoogleStrategy} from "passport-google-oauth2";
import {Strategy as FacebookStrategy} from "passport-facebook";
import {Strategy as TwitterStrategy} from "passport-twitter";
import dotenv from 'dotenv';

dotenv.config();
const keyDiscord = JSON.parse(process.env.MY_DISCORD_KEYS);
const keyGoogle = JSON.parse(process.env.MY_GOOGLE_KEYS)

const authUser = (accessToken, refreshToken, profile, cb)=>{
    process.nextTick(() => {
        return cb(null, profile)
    })
};

const scopes = ['identify', 'email', 'guilds', 'guilds.join'];
passport.use(
    new DiscordStrategy(
        {
            clientID: keyDiscord.clientID,
            clientSecret: keyDiscord.clientSecret,
            callbackURL: keyDiscord.callbackURL,
            scope: scopes
        },
        authUser
    ));

passport.use(
    new GoogleStrategy(
        {
            clientID: keyGoogle.clientID,
            clientSecret: keyGoogle.clientSecret,
            callbackURL: keyGoogle.callbackURL,
            scope: scopes
        },
        authUser
    )
);

/* passport.use(
    new FacebookStrategy(
        {
            clientID:,
            clientSecret:,
            callbackURL:
        },
        authUser
    )
);

passport.use(
    new TwitterStrategy(
        {
            consumerKey:,
            consumerSecretSecret:,
            callbackURL:
        },
        authUser
    )
); */

passport.serializeUser((user, cb) => {
    console.log("serializeUser");
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    console.log("deserializeUser");
    cb(null, user);
});

export default passport;