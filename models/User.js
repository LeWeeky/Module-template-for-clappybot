const { AModel } = require("../../../libraries/models/AModel");

class User extends AModel
{
	static table = 'users';
	static fields = {
		username: 'string',
		email: 'string',
		created_at: 'datetime'
	};
}

module.exports = {
	User
}