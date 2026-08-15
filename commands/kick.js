import {
  SlashCommandBuilder,
  PermissionsBitField,
  MessageFlags,
} from "discord.js";
import { clappybot, History, UserPermissions, PermissionsBits, User } from "clappybot";

export async function parse(interaction, cmd, args) {
  let target;
  let reason;

  if (interaction.options) {
    // slashcmd
    target = interaction.options.getMember("user");
    reason = interaction.options.getString("reason") || "No reason provided";
  } else {
    // prefix
    if (args.length == 0)
      return interaction.channel.send("Please mention a user to kick.");
    target = await new User().get(args[0]);
    if (!target)
      return interaction.channel.send(`❌ \`${args[0]}\` is not a valid user.`);
    reason =
      interaction.content
        .substring(clappybot.prefix.length + cmd.length)
        .trimStart()
        .split(" ")
        .slice(1)
        .join(" ") || "No reason provided";
  }

  if (!target)
    return interaction.reply({
      content: "❌ User not found.",
      flags: [MessageFlags.Ephemeral],
    });
  const permissions = new UserPermissions(
    interaction.member.id,
    interaction.guild.id,
  );
  await permissions.refresh();
  if (
    !interaction.member.permissions.has(
      PermissionsBitField.Flags.KickMembers,
    ) &&
    !permissions.has(PermissionsBits.Kick) &&
    !permissions.has(PermissionsBits.Admin)
  )
    return interaction.reply({
      content: "❌ You don't have permission to kick members.",
      flags: [MessageFlags.Ephemeral],
    });
  const member = interaction.guild.members.cache.get(target.id);
  if (!member)
    return interaction.reply({
      content:
        "❌ I cannot kick this user (this user is not part of the guild).",
      flags: [MessageFlags.Ephemeral],
    });
  if (!member.kickable)
    return interaction.reply({
      content:
        "❌ I cannot kick this user (The role of the target is higher, or I don't have the permission to kick members).",
      flags: [MessageFlags.Ephemeral],
    });

  await member.kick(reason);
  await interaction.reply({
    content: `✅ **${target.name}** has been kicked. Reason: ${reason}`,
  });
  new History(target).add("kick", reason, interaction.member.user);
}

export const name = "kick";
export const permissions = [];
export const builder = new SlashCommandBuilder()
  .setName("kick")
  .setDescription("Kick a user from the server.")
  .addUserOption((option) =>
    option
      .setName("user")
      .setDescription("The user to kick")
      .setRequired(true),
  )
  .addStringOption((option) =>
    option
      .setName("reason")
      .setDescription("The reason for the kick")
      .setRequired(false),
  );
export const any_guild = false;
export const dm = false;