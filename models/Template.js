const { AModel } = require("../../../libraries/models/AModel");

class Template extends AModel
{
	static table = 'templates';
	static fields = {
		title: 'string',
		description: 'text',
	};
}

module.exports = {
	Template
}