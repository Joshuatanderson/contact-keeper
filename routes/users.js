const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// user schema
const User = require('../models/User')

// @route			GET api/users
// @description 	Get a logged in user
// @access 			Private

router.get('/', (req, res) => {
	res.send('Register a user')
})

// @route			POST api/users
// @description 	Auth user & get token
// @access 			Public

router.post('/', [
	// property, message if fails check, rule
	check('name', 'Please add a name')
		.not()
		.isEmpty(),
	check('email', 'Please include a valid email').isEmail(),
	check('password', 'Please enter a password with 6 or more characters')
		.isLength({ min: 6 })
], (req, res) => {
	// validates request using express-validator
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		// returns error message
		return res.status(400)
			.json({ errors: errors.array() })
	}
	res.send('passed user validation')
})

module.exports = router;