const Comments = require('../models/comments.js')

module.exports = {
	read(req, res, next) {
		Comments.find({})
			.then(result => {
				res.send(result)
			})
			.catch(next)
	},
	create(req, res, next) {
		const props = req.body
		Comments.create(props)
			.then((comment) => {
				res.send(comment)
			})
			.catch(next)
	}

}