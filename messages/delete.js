async function check(message)
{
	// Create your own conditions for use this handler
	return (message.author);
}

async function parse(message)
{
	console.log("a message from:", message.author.id, " has been deleted")
}

module.exports = {
	parse,
	conditions: [
		check
	],
	any_guild: false,
	dm: false,
	allow_bots: false
}