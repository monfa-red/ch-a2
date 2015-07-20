/**
 * Module dependencie
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');




 /**
  * CRUD 
  */

// create

// read

// update

// delete

/**
 * List users
 * Just a test!
 */
 module.exports.list = function(req, res) {
 	User.find(function(err, users) {
 		if (err) {
 			console.log(err);
 			res.redirect('/');
 		}
 		res.json(users);
 	})
 };