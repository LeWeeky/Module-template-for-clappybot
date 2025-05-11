const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

async function parse(interaction, cmd, args)
{
	const embed = new EmbedBuilder()
	.setDescription(
		"# 🛟S Help & Informations\n"+
		"ClappyBot was created by [LeWeeky](https://fr.tipeee.com/leweeky),\n"+
		"you can use, modify, share it for free as long as you comply with the terms "+
		"of the [license](https://github.com/LeWeeky/clappybot/blob/main/LICENSE).\n"+
		"## 📝 Documentation\n"+
		"A great page of documentations will be available soon! in the meantime, "+
		"feel free to join the discord at the bottom of this message for help\n"+
		"## 👔 Contribution\n"+
		"Thank's a lot if you'd like to contribute to this project, you can do so by "+
		"sending [pull requests](https://github.com/LeWeeky/clappybot/pulls), creating "+
		"tutorials, modules or helping new developers on our discord (see below)"+
		"## 👀 Usefull\n"+
		"You can set a channel as \"support channel\" via the command \"/setsupport\", "+
		"this will allow the bot to keep you informed of changes and updates"
	)

	const row = new ActionRowBuilder()
	.setComponents(
		new ButtonBuilder()
		.setLabel("Join: 🏝️ \"L'île Technologique\" 📡")
		.setStyle(ButtonStyle.Link)
		.setURL("https://discord.gg/UvQfUbk")
	)

	if (interaction.options)
	{
		// Commande slash (/command)
		interaction.reply({embeds: [embed], components: [row]})
	}
	else
	{
		// Commande classique (+command)
		interaction.channel.send({embeds: [embed], components: [row]})
	}
}

module.exports = {
	parse,
	name: "help",
	builder: new SlashCommandBuilder()
	.setName("help")
	.setDescription("Help with using this pretty robot."),
	any_guild: false,
	dm: false
}