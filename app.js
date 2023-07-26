import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(session({
    secret: 'vicky',
    resave: false,
    saveUninitialized: false
}));



app.listen(3000, () => {
    console.log('Example app listening on http://localhost:3000');
});