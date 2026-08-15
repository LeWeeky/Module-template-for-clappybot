import { clappybot, Colors } from "clappybot";
import { EmbedBuilder } from "discord.js";

async function check(message) {
  // Create your own conditions for use this handler
  return message.content == `<@${clappybot.bot.user.id}>`;
}

export async function parse(message) {
  let guild_name = "Aucun";

  if (
    globalThis.guild_id &&
    clappybot.bot.guilds.cache.has(globalThis.guild_id)
  )
    guild_name = clappybot.bot.guilds.cache.get(globalThis.guild_id).name;

  const embed = new EmbedBuilder()
    .setAuthor({ name: "🐧 ClappyBot ~ " + clappybot.bot.user.username })
    .setDescription(
      "▸ Serveur principal \n⇉ " +
        guild_name +
        " !\n\n" +
        "↬ Mon Prefix : **" +
        clappybot.prefix +
        "**\n" +
        "↬ Ma Version : **" +
        clappybot.version +
        "**\n" +
        "↬ Créateur : [" +
        process.env.AUTHOR +
        "](" +
        process.env.AUTHOR_URL +
        ")",
    )
    .setFooter({
      text: "Plus d'infos via " + clappybot.prefix + process.env.MAIN_COMMAND,
    })
    .setColor(Colors.none);

  message.channel.send({ embeds: [embed] });
}

export const name = "mention_create";
export const conditions = [check];
export const any_guild = true;
export const dm = false;
export const allow_bots = false;