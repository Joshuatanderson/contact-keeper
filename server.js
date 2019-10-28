// can't use import without babel or TS
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect db
connectDB()

// sends data from express to the requester when endpoint is hit
app.get('/', (req, res) =>
	res.json({ msg: 'Welcome to the contactKeeper API' })
);

// Defining Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));