async function check(old_member, new_member)
{
	return (!new_member.bot)
}

async function parse(old_member, new_member)
{
	console.log("member: ", old_member.user.username, " has been updated")
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