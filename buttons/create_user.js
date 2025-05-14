const {  ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

async function parse(interaction)
{
	const modal = new ModalBuilder()
		.setCustomId('template-new-user')
		.setTitle('Create a new user');

	const username_input = new TextInputBuilder()
		.setCustomId('username')
		.setLabel("What's its name?")
		.setStyle(TextInputStyle.Short);

	const email_input = new TextInputBuilder()
		.setCustomId('email')
		.setLabel("What's its email?")
		.setStyle(TextInputStyle.Short);

	const firstActionRow = new ActionRowBuilder().addComponents(username_input);
	const secondActionRow = new ActionRowBuilder().addComponents(email_input);

	modal.addComponents(firstActionRow, secondActionRow);

	await interaction.showModal(modal);
}

module.exports = {
	parse,
	customId: "template-create-user",
	permissions: [],
	any_guild: false,
	dm: false
}