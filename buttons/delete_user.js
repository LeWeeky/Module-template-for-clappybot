const { MessageFlags } = require("discord.js");
const { User } = require("../models/User");

/*
* Instead of checking an exacte customId, here
* we accept all buttons whose customId
* starts with "startOfCustomId" thank's to
* "conditions" option
*/
const startOfCustomId = "template-delete-user-"

function check(interaction)
{
	return (interaction.customId.startsWith(startOfCustomId));
}

async function parse(interaction)
{
	const wait = interaction.deferUpdate();
	const user_id = interaction.customId.substring(startOfCustomId.length);
	const user = await User.firstBy({id: user_id});

	if (!user)
	{
		await wait;
		interaction.editReply({
			content: `I'm sorry but, this user has already been deleted!`,
			embeds:[],
			components: [],
			flags: [MessageFlags.Ephemeral]
		})
	}
	else
	{
		await user.delete();
		await wait;
		interaction.editReply({
			content: `*${user.username ?? "No name"}* has been successfully deleted!`,
			embeds:[],
			components: [],
			flags: [MessageFlags.Ephemeral]
		})
	}
}

module.exports = {
	parse,
	conditions: [check],
	permissions: [],
	any_guild: false,
	dm: false
}