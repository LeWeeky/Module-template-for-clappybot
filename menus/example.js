import { MessageFlags } from "discord.js";

export async function parse(interaction) {
  const selection = interaction.values[0];

  await interaction.reply({
    content: `Thank you for selecting the option **${selection}**!`,
    flags: [MessageFlags.Ephemeral],
  });
}

export const customId = "template-example";
export const permissions = [];
export const any_guild = false;
export const dm = false;