const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('dotenv').config();
//pererathilina2001
//Notenest123
const PORT = process.env.PORT || 8070;

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with the actual origin of your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));

app.use(cors());
app.use(bodyParser.json());

dotenv.config();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongoose Connection Success!!');
});

const MeetingRoute = require('./routes/meetingRouts')
// Use the listingRoutes for routes related to listings
app.use('/Meeting', MeetingRoute);

const LeaveRoute = require('./routes/leavesRoute')
// Use the listingRoutes for routes related to listings
app.use('/Sickleave', LeaveRoute);

const HalfdayLeave = require('./routes/leavesRoute')
// Use the listingRoutes for routes related to listings
app.use('/Halfday', HalfdayLeave);

const FulldayLeave = require('./routes/leavesRoute')
// Use the listingRoutes for routes related to listings
app.use('/Fullday', FulldayLeave);


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});
