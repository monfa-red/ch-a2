var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var users = require('../controllers/users.controller');

// var sampleUser = {
// 	firstName: "abbas",
// 	lastName: "Monfared",
// 	email: "a@monfa.red"
// }

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     User(sampleUser)
//     .save(function(err, msg) {
//       if (err) {
//         res.send(err)
//       } else {
//         res.send(msg)
//       }
//     })
// });

router.get('/list', users.list);

module.exports = router;
