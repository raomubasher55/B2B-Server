const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const ApiError = require('./utils/ApiError');
const { default: status } = require("http-status");
const  defaultRouter  = require('./routes/defaultRouter');
const errorHandler = require('./middlewares/errorHandler');
const session = require('express-session');
const passport = require('passport');
const userRoutes = require('./routes/userRoute');
require('./config/passport')

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ 
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: true 
  }));
  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());

app.set('view engine' , 'ejs' );
app.set('views' , './views');
 
app.use( defaultRouter);
app.use('/api/v1/' , userRoutes);

// Routes 
app.get('/', (req, res) => {
    res.render('index');
});





// 404 Not Found error handler
app.use((req, res, next) => {
    next(new ApiError(status.NOT_FOUND, 'Route  Not found'));
});



app.use(errorHandler); 


module.exports = app;
