const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt-nodejs");
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = require('knex')({
    client: 'pg', // Change to 'pg' for PostgreSQL
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {rejectUnauthorized: false},
      host : process.env.DATABASE_HOST,
      port : 5432,
      user : process.env.DATABASE_USER,
      password : process.env.DATABASE_PW,
      database : process.env.DATABASE_DB
    }
});

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', signin.handleSignin(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.get('/profile/:id', profile.handleProfile(db));
app.put('/image', image.handleImage(db));

app.listen(3000, () => {
    console.log('app is running on port 3000');
})

