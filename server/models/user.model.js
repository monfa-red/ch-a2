// 'use strict';

/**
 * Module dependencie
 */
var mongoose = require('mongoose');
	Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	firstName: {
		type: String,
		trim: true,
		default: '',
		validate: 'Please fill in your first name'
	},
	lastName: {
		type: String,
		trim: true,
		default: '',
		validate: 'Please fill in your last name'
	},
	email: {
		type: String,
		trim: true,
		default: '',
		validate: 'Please fill in your email address',
		match: [/.+\@.+\..+/, 'Please fill a valid email address']
	},
	password: {
		type: String,

		// TODO:
		// Password stuff!
		default: '0'

	}
});

mongoose.model('Article', ArticleSchema);