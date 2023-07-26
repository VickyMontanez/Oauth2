import passport from "passport";
import {Strategy as DiscordStrategy} from "passport-discord";
import {Strategy as GoogleStrategy} from "passport-google-oauth2";
import {Strategy as FacebookStrategy} from "passport-facebook";
import {Strategy as TwitterStrategy} from "passport-twitter";

const authUser = (accessToken, refreshToken, profile, done)=>{
    console.log("accessToken", accessToken)
    console.log("refreshToken", refreshToken);
    console.log("profile", profile);
    done(null, profile);
};

passport.use(
    new DiscordStrategy(
        {
            clientID:"1133681110937767947",
            clientSecret: "5Tw1yjBP97OPhnK8FhIzZLAZvQgPmAe8",
            callbackURL:"http://localhost:3000/login/discord/callback"
        },
        authUser
    )
);

passport.use(
    new GoogleStrategy(
        {
            clientID:"1058271595537-cmpibelf3q5tldhj0d664hjhkat36av9.apps.googleusercontent.com",
            clientSecret:"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",
            callbackURL:"http://localhost:3000/login/google/callback"
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

passport.serializeUser((user, done) => {
    console.log("serializeUser");
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log("deserializeUser");
    done(null, user);
});

export default passport;