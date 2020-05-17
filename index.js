const express = require('express');
const app = express();
const cors = require('cors');
const expressJWT = require('express-jwt');
const { PORT, db, SECRET_KEY } = require('./config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(
// 	expressJWT({ secret: SECRET_KEY }).unless({
// 		path: [
// 			{
// 				url: '/',
// 				methods: [ 'GET' ]
// 			},
// 			{
// 				url: '/users/login',
// 				methods: [ 'POST' ]
// 			},
// 			{
// 				url: '/users',
// 				methods: [ 'POST' ]
// 			},
// 			{
// 				url: '/users',
// 				methods: [ 'GET' ]
// 			},
// 		]
// 	})
// );

app.use((err, req, res, next) => {
	if (err.code === 'credentials_required') {
		return res.status(401).json({ message: 'Access Denied for you' });
	} else if (err.code === 'invalid_token') {
		return res.status(401).json({ message: 'Invalid Credentials' });
	} else {
		return next();
	}
});

app.get('/', (req, res) => {
	res.status(200).json({ messege: 'hello to nosql api' });
});

app.use('/users', require('./routes/users'));
app.use('/animals', require('./routes/animals'));
app.use('/zoos', require('./routes/zoosconservations'));
app.use('/foodStorage', require('./routes/foodStorage'));
app.use('/feeds', require('./routes/feeds'));
app.use('/feedTransaction', require('./routes/feedTransaction'));

if (db) {
	app.listen(PORT, () => {
		console.log(`this app listen to port ${PORT}`);
	});
}
