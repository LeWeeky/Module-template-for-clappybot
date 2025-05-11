async function check(member)
{
	return (!member.bot)
}

async function parse(member)
{
	console.log("new member:", member.user.username)
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