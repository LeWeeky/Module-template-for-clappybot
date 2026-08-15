import { MessageFlags } from "discord.js";

export async function parse(interaction) {
  interaction.reply({
    content: "Yes, this simple button works!",
    flags: [MessageFlags.Ephemeral],
  });
}

export const customId = "template-simple";
export const permissions = [];
export const any_guild = false;
export const dm = false;