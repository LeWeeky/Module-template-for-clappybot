const { SlashCommandBuilder } = require("discord.js");
const { clappybot } = require("../../../main");

function isCreator(member)
{
	return (member.id == process.env.AUTHOR_ID);
}

async function parse(interaction, cmd, args)
{
	// Défini le serveur actuel comme serveur "propriétaire" du bot
	// c'est ici que pourront être exécutées toutes les fonctionnalités
	// qui ont le paramètre "any_guild: false"
	clappybot.setGuild(interaction.guild.id)
	if (interaction.options)
	{
		// Commande slash (/command)
		interaction.reply({content: "Guild updated!"})
	}
	else
	{
		// Commande classique (+command)
		interaction.channel.send({content: "Guild updated!"})
	}
}

module.exports = {
	parse,
	name: "setguild",
	permissions: [
		isCreator
	],
	builder: new SlashCommandBuilder()
	.setName("setguild")
	.setDescription("Defines this server as the bot owner.")
	.setDefaultMemberPermissions(0),
	any_guild: true,
	dm: false
}