async function check(old_message, new_message)
{
	// Create your own conditions for use this handler
	return (old_message.author);
}

async function parse(old_message, new_message)
{
	console.log("a message from:", old_message.author.id, " has been updated")
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