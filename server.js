const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

var bodyParser = require('body-parser');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  });
  // app.get('/^\/(?!api.*/', (req, res) => {
  //   res.sendFile(path.join(__dirname, './client/public/index.html'));
  // });
}
// Add routes, both API and view
app.use(routes);

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/restaurantExample");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
