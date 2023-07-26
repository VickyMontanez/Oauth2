import express from "express";
import session from "express-session";
import passportHelper from './helpers/passportHelper.js';
import authRouter from './routers/authRouter.js';
import checkAuthentication from './helpers/authentication.js';

const app = express();

app.use(express.json());
app.use(session({
    secret: 'vicky',
    resave: false,
    saveUninitialized: false
}));

app.use(passportHelper.initialize());
app.use(passportHelper.session());

app.use(express.static('public'))


app.get('/', (req, res) => res.redirect('/login'));
app.use('/login', authRouter);
app.get('/dashboard', checkAuthentication,  (req, res) => {res.sendFile('dashboard.html', { root: './public' })});


app.listen(3000, () => {
    console.log('Example app listening on http://localhost:3000');
});