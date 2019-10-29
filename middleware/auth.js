const jwt = require('jsonwebtoken');
const config = require('config')

// middleware needs to call the next piece of middleware
module.exports = function (req, res, next) {
	// get token from header
	const token = req.header('x-auth-token');
	console.log(token)
	// check if nott token
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		// extracts user info from the token, and assigns it to request
		req.user = decoded.user;
		next()
	} catch (err) {
		res.status(401).json({ msg: "token is not valid" });
	}
}