const express = require('express');
const router = express.Router();

// get request

// @route			GET api/users
// @description 	Get a logged in user
// @access 			Private

router.get('/', (req, res) => {
	res.send('Register a user')
})

// @route			POST api/users
// @description 	Auth user & get token
// @access 			Public

router.post('/', (req, res) => {
	res.send('Log in user')
})

module.exports = router;