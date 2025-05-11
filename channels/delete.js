async function parse(channel)
{
	console.log("a channel has been deleted:", channel.name)
}

module.exports = {
	parse,
	any_guild: false
}