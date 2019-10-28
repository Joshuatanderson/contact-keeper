const mongoose = require('mongoose');
// imports config package
const config = require('config');

// config package gets connection string from config.json
const db = config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			// these just remove console warnings
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
		console.log('MongoDB Connected')
	} catch (error) {
		console.error(err.message)
	}
}

module.exports = connectDB