var express = require('express');
var router = express.Router();

// connect to mongodb
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/chat');


// Schema
var personSchema = {
  firstName: String,
  lastName: String,
  email: String
}

var Person = mongoose.model('person', personSchema, 'people')

/* GET home page. */
router.get('/', function(req, res, next) {
  Person.find(function (err, doc) {
    res.send(doc);
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
