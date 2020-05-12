const bcrypt = require('bcryptjs');
const { User } = require('../../models');

module.exports = {
	getAll: async (req, res) => {
		try {
			const users = await User.find({});

			res.status(200).json({ message: 'Get All Users', data: users });
		} catch (error) {
			console.log(error);
		}
	},
	create: async (req, res) => {
		try {
			const { fullname, email, password, avatar } = req.body;
			bcrypt.genSalt(10, function(err, salt) {
				bcrypt.hash(password, salt, async function(err, hash) {
					const users = await User.create({
						fullname,
						email,
						password: hash,
						avatar
					});

					res.status(201).json({
						message: 'New user successfully created!',
						data: users
					});
				});
			});
		} catch (error) {
			console.log(error);
		}
	},
	login: async (req, res) => {
		const { email, password } = req.body;

		const result = await User.findOne({ email: email });

		bcrypt.compare(password, result.password).then((response) => {
			if (response === true) {
				res.status(200).send(result);
			} else {
				res.status(401).send({
					message: 'You are not allowed to enter this api'
				});
			}
		});
	}
};
