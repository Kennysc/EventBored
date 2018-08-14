const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
	name: {
		type: String,
	},
	title: {
		type: String,
	},
	description: {
		type: String,
	}
})

module.exports = mongoose.model('comment', commentSchema)