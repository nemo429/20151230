
var basicAuth = require('basic-auth');
var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 3000));

var appDir = "/src/client/app";

//For every new sub-directory created, you must make an express.static
app.use("/build", express.static(__dirname + "/build"));
app.use("/images", express.static(__dirname + "/src/client/assets/images"));
app.use("/navbar", express.static(__dirname + appDir + "/navbar"));
app.use("/guestsandrooms", express.static(__dirname + appDir + "/guestsandrooms"));
app.use("/datesofstay", express.static(__dirname + appDir + "/datesofstay"));
app.use("/accommodation", express.static(__dirname + appDir + "/accommodation"));
app.use("/confirmation", express.static(__dirname + appDir + "/confirmation"));
app.use("/home", express.static(__dirname +appDir+"/home"));
app.use("/international", express.static(__dirname + appDir + "/international"));
app.use("/total", express.static(__dirname + appDir + "/total"));
app.use("/api", express.static(__dirname + appDir + "/api"));
app.use("/partials", express.static(__dirname + "/src/client/partials"));

var auth = function(req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  }

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  }

  if (user.name === 'zen.digital' && user.pass === 'tcweb4.0') {
    return next();
  } else {
    return unauthorized(res);
  }
};

if (process.env.NODE_ENV === 'production') {
  app.use('/', auth);
}
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/src/client/index.html');
});

app.all("/*", function(req, res) {
  res.sendFile(__dirname + '/src/client/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
