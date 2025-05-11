const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require("discord.js");

async function parse(interaction, cmd, args)
{
	const embed = new EmbedBuilder()
	.setDescription(
		"# 🎉 Try some features here !\n"+
		"If you press the \"Doesn't exist\" button, the bot will respond "+
		"with an error message as it warns in the nodejs console.\n\n"+
		"As you can see, this system comes with protections against "+
		"interaction errors when a button, modal or menu no doen't exists."+
		""
	)

	const row1 = new ActionRowBuilder()
	.setComponents(
		new ButtonBuilder()
		.setLabel("A little button")
		.setStyle(ButtonStyle.Success)
		.setCustomId("template-simple"),
		new ButtonBuilder()
		.setLabel("Open modal")
		.setStyle(ButtonStyle.Primary)
		.setCustomId("template-modal"),
		new ButtonBuilder()
		.setLabel("Forbidden")
		.setStyle(ButtonStyle.Danger)
		.setCustomId("template-forbidden"),
		new ButtonBuilder()
		.setLabel("Doesn't exist")
		.setStyle(ButtonStyle.Secondary)
		.setCustomId("template-doenst-exist")
	)
	const row2 = new ActionRowBuilder()
	.setComponents(
		new StringSelectMenuBuilder()
		.setCustomId("template-test")
		.setOptions([
			{
				label:
					"option 1",
				value: "1"
			},
			{
				label:
					"option 2",
				value: "2"
			}
		])
	)

	if (interaction.options)
	{
		// Commande slash (/command)
		interaction.reply({embeds: [embed], components: [row1, row2]})
	}
	else
	{
		// Commande classique (+command)
		interaction.channel.send({embeds: [embed], components: [row1, row2]})
	}
}

module.exports = {
	parse,
	name: "test",
	builder: new SlashCommandBuilder()
	.setName("test")
	.setDescription("A simple test command with some components."),
	any_guild: false,
	dm: false
}