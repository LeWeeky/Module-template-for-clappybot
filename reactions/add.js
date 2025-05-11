async function check(reaction, user)
{
	// Create your own conditions for use this handler
	return (reaction && user);
}

async function parse(reaction, user)
{
	console.log("new reaction:", reaction)
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