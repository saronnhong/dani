require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const db = require('./models');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");

// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


mongoose
   // for the app to work as a deployed app with mLAB MongoDB provision on Heroku, use:
   .connect(process.env.MONGODB_URI || "mongodb://user:password123@ds127958.mlab.com:27958/heroku_wb6nc7kg", { useNewUrlParser: true, useCreateIndex: true })

   //mongodb://user:password123@ds127958.mlab.com:27958/heroku_wb6nc7kg
   // for LOCAL Testing, use:
  //  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/appDB', { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));


// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});


//attempt at getting the drawings to save to mongoDB
app.post('/api/savedrawing/:id', (req, res) => {
  db.Drawings.create(req.body)
    .then(newDrawing => {
      return db.User.findOneAndUpdate({_id:req.params.id}, { $push: { drawings: newDrawing._id } }, { new: true })
    })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));

});

//currently finding all drawings, methods in component grab the most recent one... isn't user specific yet even though they have an id ref'd by user. To fix need to add to find search object so it finds based on user's saved collection reference ID's. This means adding to didmount/willmount in each page? Or does the isauth pass that along?
app.get('/api/loaddrawing/:id', (req, res) => {
  db.Drawings.find({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

app.post('/api/savecoloring/:id', (req, res) => {
  db.Colorings.create(req.body)
    .then(newColoring => {
      return db.User.findOneAndUpdate({_id:req.params.id}, { $push: { colorings: newColoring._id } }, { new: true })
    })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));

});

app.get('/api/loadcoloring/:id', (req, res) => {
  db.Colorings.find({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

//route for when metric add happens... puzzling it out still but atm im thinking it may start as a get? and in the .then it can do a post/put with an update to increase the value by one of the field corresponding to the metric being updated.
app.post('/api/startmetrics/:id', (req, res) => {
  db.Metric.create({})
    .then(newMetric => {
      return db.User.findOneAndUpdate({_id:req.params.id}, { $set: { metric: newMetric._id } }, { new: true })
    })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

app.put('/api/addMetrics/:userID/:key', (req, res) => {
  db.Metric.find({ _id: req.params.userID })
    .then(data => {
      let query = {};
      let queryKey = req.params.key;
      let queryValue = 0;
      let dataObject = data[0].toObject();
      var dataLength = Object.keys(dataObject).length - 2;
      for (let i = 0; i < dataLength; i++){
        // console.log("debugging " + i + " " + Object.keys(dataObject)[i] + " is a " + typeof Object.keys(dataObject)[i])
        if (Object.keys(dataObject)[i] == queryKey) {
          queryValue = parseInt(Object.values(dataObject)[i]) + 1
        } 
      }
      query[queryKey] = queryValue
      // console.log(query)
      db.Metric.findOneAndUpdate({ _id: req.params.userID }, { $set: query }, { new: true })
        .then(data => {
          res.status(200).json(data)
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
});

app.get('/api/getMetrics/:id', (req, res) => {
  db.Metric.find({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
