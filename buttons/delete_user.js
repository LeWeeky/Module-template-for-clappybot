import { MessageFlags } from "discord.js";
import User from "../models/User.js";

/*
 * Instead of checking an exact customId, here
 * we accept all buttons whose customId starts with "startOfCustomId" thank's to
 * "conditions" option
 */
const startOfCustomId = "template-delete-user-";

function check(interaction) {
  return interaction.customId.startsWith(startOfCustomId);
}

export async function parse(interaction) {
  const wait = await interaction.deferUpdate();
  const user_id = interaction.customId.substring(startOfCustomId.length);
  const user = await User.firstBy({ id: user_id });

  if (!user) {
    await wait;
    await interaction.editReply({
      content: `I'm sorry but, this user has already been deleted!`,
      embeds: [],
      components: [],
      flags: [MessageFlags.Ephemeral],
    });
  } else {
    await user.delete();
    await wait;
    await interaction.editReply({
      content: `*${user.username ?? "No name"}* has been successfully deleted!`,
      embeds: [],
      components: [],
      flags: [MessageFlags.Ephemeral],
    });
  }
}

export const customId = startOfCustomId;
export const conditions = [check];
export const permissions = [];
export const any_guild = false;
export const dm = false;
