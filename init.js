const { clappybot } = require("../../main")
const { Template } = require("./models/Template")
const { User } = require("./models/User")

async function init_module(connection)
{
	Template.use(clappybot.database)
	Template.init()

	User.use(clappybot.database)
	User.init()
}

module.exports = {
	init_module
}