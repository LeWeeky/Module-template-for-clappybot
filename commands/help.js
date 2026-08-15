import { EmbedBuilder } from "@discordjs/builders";
import { Colors } from "clappybot";
import {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} from "discord.js";

export async function parse(interaction, cmd, args) {
  const embed = new EmbedBuilder()
    .setDescription(
      "# 🛟 Help & Informations\n" +
        "ClappyBot was created by [LeWeeky](https://fr.tipeee.com/leweeky), " +
        "you can use, modify, share it for free as long as you comply with the terms " +
        "of the [license](https://github.com/LeWeeky/clappybot/blob/main/LICENSE).\n" +
        "## 📝 Documentation\n" +
        "A great page of documentations will be available soon! In the meantime, " +
        "feel free to join the discord at the bottom of this message for help.\n" +
        "## 👔 Contribution\n" +
        "Thank's a lot if you'd like to contribute to this project, you can do so by " +
        "sending [pull requests](https://github.com/LeWeeky/clappybot/pulls), creating " +
        "tutorials, modules or helping new developers on our discord (see below).\n" +
        "## 👀 Usefull\n" +
        'You can set a channel as "support channel" via the command `/setsupport`, ' +
        "this will allow the bot to keep you informed of changes and updates.",
    )
    .setColor(Colors.pink);

  const row = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setLabel("Join: 🏝️ L'île Technologique 📡")
      .setStyle(ButtonStyle.Link)
      .setURL("https://discord.gg/UvQfUbk"),
    new ButtonBuilder()
      .setLabel("☕️ Buy me a coffee")
      .setStyle(ButtonStyle.Link)
      .setURL("https://fr.tipeee.com/leweeky"),
  );

  if (interaction.options) {
    // Commande slash (/command)
    await interaction.reply({ embeds: [embed], components: [row] });
  } else {
    // Commande classique (+command)
    await interaction.channel.send({ embeds: [embed], components: [row] });
  }
}

export const name = "help";
export const builder = new SlashCommandBuilder()
  .setName("help")
  .setDescription("Help with using this pretty robot.");
export const any_guild = false;
export const dm = false;