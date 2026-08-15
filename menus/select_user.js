import {
  MessageFlags,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} from "discord.js";
import User from "../models/User.js";
import { Colors } from "clappybot";

export async function parse(interaction) {
  const wait = interaction.deferReply({ flags: MessageFlags.Ephemeral });
  const user_id = interaction.values[0];
  const user = await User.firstBy({ id: user_id });

  await wait;
  if (!user) {
    interaction.editReply({
      content: `I'm sorry but, this user has been deleted :(`,
      flags: [MessageFlags.Ephemeral],
    });
  } else {
    const embed = new EmbedBuilder().setColor(Colors.light_blue).setFields([
      {
        name: "🆔 ID",
        value: String(user.id),
        inline: true,
      },
      {
        name: "📝 Name",
        value: user.username ?? "No name",
        inline: true,
      },
      {
        name: "📮 EMail",
        value: "```" + (user.email ?? "No email") + "```",
      },
      {
        name: "📆 Created at",
        value: new Date(user.created_at).toUTCString(),
      },
    ]);

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId(`template-delete-user-${user.id}`)
        .setEmoji("🗑️")
        .setLabel("Delete user")
        .setStyle(ButtonStyle.Danger),
    );

    interaction.editReply({
      embeds: [embed],
      components: [row],
      flags: [MessageFlags.Ephemeral],
    });
  }
}

export const customId = "template-select-user";
export const permissions = [];
export const any_guild = false;
export const dm = false;