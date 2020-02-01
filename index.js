var express = require('express');
var app = express();

// Config
const config = require('./config.json');
const hash = config.hash;

// Calculate a rolling hash.
var crypto = require('crypto');


var bodyParser = require("body-parser");

var path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile( path.join(__dirname + "/" + "index.html"));
});

app.get('/*', function (req, res) {
res.sendFile( __dirname + "/" + "index.html" );
  //res.send('Tentative de hacking. Votre ip a été transmise...');
});

app.post('/submit-student-data', function (req, res) {
    var toHash = req.body.zipcode + '-' + req.body.town;
    
    if (computeHash(toHash) == hash) {
      res.send('<h3>Bingo! \\o/</h3> <p>Vous êtes parmi les meilleur.e.s!!!</p><p> Grâce à vous notre mascotte va être sauvée et nous allons faire interpeller les malfaiteurs...</p><p>Ah oui... Il vous reste quelques formalités à remplir. Nous attendons votre rapport. </p><p> Le flag est: <b>' + process.env.FLAG +  '</b></p><p>Envoyez un courriel à mirza-ctf@mutu.local contenant ce flag et votre compte-rendu d\'enquête complet au format qui vous convient.</p>');
    }
    else
    {
      res.send('<h3>Perdu!</h3> <p>Essayez <a href="/" > encore </a>...</p>'); 
    }
    
});

var server = app.listen(8080, function () {
    console.log('Node server is running..');
});


var computeHash = function (textToHash) {
  var result = crypto.createHash('sha256').update(textToHash).digest('hex');
  return (result);
}























































//const pwd = "08510-Melfrantzkirch"
