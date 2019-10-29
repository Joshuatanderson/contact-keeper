const express = require('express');
const router = express.Router();

// @route			GET api/users
// @description 	Get a logged in user
// @access 			Private

router.get('/', (req, res) => {
	res.send('Register a user')
})

// @route			POST api/users
// @description 	Auth user & get token
// @access 			Public

// router.post('/', [
// 	// property, message if fails check, rule
// 	check('name', 'Please add a name')
// 		.not()
// 		.isEmpty(),
// 	check('email', 'Please include a valid email').isEmail(),
// 	check('password', 'Please enter a password with 6 or more characters')
// 		.isLength({ min: 6 })
// ], async (req, res) => {
// 	// validates request using express-validator
// 	const errors = validationResult(req);
// 	if (!errors.isEmpty()) {
// 		// returns error message
// 		return res.status(400).json({ errors: errors.array() })
// 	}

// 	// deconstructing request
// 	const { name, email, password } = req.body;

// 	try {
// 		let user = await User.findOne({ email })
// 		if (user) {
// 			return res.status(400).json({ msg: 'User already exists' })
// 		}

// 		user = new User({
// 			name,
// 			email,
// 			password
// 		});

// 		const salt = await bcrypt.genSalt(10);
// 		// encrypts password
// 		user.password = await bcrypt.hash(password, salt)

// 		// mongoose function
// 		await user.save();

// 		const payload = {
// 			user: {
// 				id: user.id
// 			}
// 		}

// 		// JSON web token
// 		jwt.sign(payload, config.get('jwtSecret'), {
// 			expiresIn: 360000
// 		}, (err, token) => {
// 			if (err) throw err;
// 			res.json({ token })
// 		})

// 	} catch (error) {
// 		console.error(error.message)
// 		// 500 = server error
// 		res.status(500).send('server error')
// 	}
// })

module.exports = router;