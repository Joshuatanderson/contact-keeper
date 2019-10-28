const express = require('express');
const router = express.Router();

// post request

// @route			GET api/auth
// @description 	Get logged in user
// @access 			Private

router.post('/', (req, res) => {
	res.send('Get a logged in user')
})

module.exports = router;