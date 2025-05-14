const { ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require("discord.js");
const { User } = require("../models/User");
const { usersToOptions } = require("./userToOptions");

async function getModelsRows()
{
	const rows = [];

	rows.push(new ActionRowBuilder()
	.setComponents(
		new ButtonBuilder()
		.setLabel("Create a user")
		.setStyle(ButtonStyle.Primary)
		.setEmoji('🆕')
		.setCustomId("template-create-user"),
		new ButtonBuilder()
		.setLabel("Refresh users")
		.setStyle(ButtonStyle.Primary)
		.setEmoji('🔄')
		.setCustomId("template-refresh-users"),
	))

	const users = await User.all()
	
	if (users.length > 0)
	{
		rows.push(new ActionRowBuilder()
		.setComponents(
			new StringSelectMenuBuilder()
			.setCustomId("template-select-user")
			.setOptions(usersToOptions(users))
		))
	}
	return (rows);
}

module.exports = {
	getModelsRows
}