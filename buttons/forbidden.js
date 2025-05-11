const { MessageFlags } = require("discord.js");

async function hasPermission(member)
{
	return (member.roles.cache.has("YOUR ADMIN ROLE HERE"))
}

async function parse(interaction)
{
	interaction.reply({content: "Yes, you have the permission!", flags: [MessageFlags.Ephemeral]})
}

module.exports = {
	parse,
	customId: "template-forbidden",
	permissions: [hasPermission],
	any_guild: false,
	dm: false
}