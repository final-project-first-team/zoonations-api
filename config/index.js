const { PORT, DATABASE, SECRET_KEY, REFRESH_KEY } = require('./environment');
const db = require('./connection');

module.exports = {
	PORT,
	DATABASE,
	SECRET_KEY,
	REFRESH_KEY,
	db
};
