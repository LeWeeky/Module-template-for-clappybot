const { clappybot, Colors } = require("clappybot");
const { EmbedBuilder } = require("discord.js");

async function check(message)
{
	// Create your own conditions for use this handler
	return (message.content == `<@${clappybot.bot.user.id}>`);
}

async function parse(message)
{
	let guild_name = "Aucun";

	if (globalThis.guild_id && clappybot.bot.guilds.cache.has(globalThis.guild_id))
		guild_name = clappybot.bot.guilds.cache.get(globalThis.guild_id).name;
	
	let embed = new EmbedBuilder()
	.setAuthor({name: "🐧 ClappyBot ~ "+clappybot.bot.user.username})
	.setDescription(
        "▸ Serveur principal \n⇉ "+guild_name+" !\n\n"
		+"↬ Mon Prefix : **"+clappybot.prefix+"**\n"
		+"↬ Ma Version : **"+clappybot.version+"**\n"
		+"↬ Créateur : ["+process.env.AUTHOR+"]("+process.env.AUTHOR_URL+")"
		)
	.setFooter({text: "Plus d'infos via "+clappybot.prefix+process.env.MAIN_COMMAND})
	.setColor(Colors.none)

	message.channel.send({embeds:[embed]})
}

module.exports = {
	parse,
	conditions: [
		check
	],
	any_guild: true,
	dm: false,
	allow_bots: false
}