async function parse(old_channel, new_channel)
{
	console.log("a channel has been updated:", old_channel.name)
}

module.exports = {
	parse,
	any_guild: false
}