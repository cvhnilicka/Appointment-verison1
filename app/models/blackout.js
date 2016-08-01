var mongoose = require('mongoose');

module.exports = mongoose.model('Blackout', {
	date : {
		type : Date
	},
	times : {
		type: String,
		default: ''
	}
});
