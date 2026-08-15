import { MessageFlags } from "discord.js";

async function hasPermission(member) {
  return member.roles.cache.has("YOUR ADMIN ROLE HERE");
}

export async function parse(interaction) {
  interaction.reply({
    content: "Yes, you have the permission!",
    flags: [MessageFlags.Ephemeral],
  });
}

export const customId = "template-forbidden";
export const permissions = [hasPermission];
export const any_guild = false;
export const dm = false;