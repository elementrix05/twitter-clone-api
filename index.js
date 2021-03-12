const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const passport = require('passport');



dotenv.config();


const port = process.env.PORT || 5050;

//Connect To DB 
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true }, () => console.log(`DB CONNECTED !!`));

const users = require("./Routes/api/users");
const tweets = require("./Routes/api/tweets");

//Routes
app.use("/api/users", users);
app.use("/api/tweets", tweets);

//BodyParser Middlewares 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport Middleware 
app.use(passport.initialize());
require('./config/passport')(passport);



app.listen(port, console.log(`Server Started at ${PORT}!!`));
