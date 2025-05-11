async function parse(old_presence, new_presence)
{
	console.log(`${new_presence.member.user.username}'s status changed`)
}

module.exports = {
	parse
}