const { MessageFlags } = require("discord.js");
const { User } = require("../models/User");
const { getModelsRows } = require("../utils/getModelsRows");

async function parse(interaction)
{
	const wait = interaction.deferUpdate();
	const username = interaction.fields.getTextInputValue('username');
	const email = interaction.fields.getTextInputValue('email');

	const user = await User.create({username: username, email: email})

	if (!user)
	{
		await wait;
		interaction.followUp({content: "Oups something bad happend! Pleaze check the console!", flags: [MessageFlags.Ephemeral]})
	}
	else
	{
		console.log("new user:", user)
		const rows = await getModelsRows();
		await wait;
		interaction.editReply({components: rows})
	}
}

module.exports = {
	parse,
	customId: "template-new-user",
	permissions: [],
	any_guild: false,
	dm: false
}