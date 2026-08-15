import {
  SlashCommandBuilder,
  PermissionsBitField,
  MessageFlags,
} from "discord.js";
import { clappybot, History, UserPermissions, PermissionsBits, User } from "clappybot";

export async function parse(interaction, cmd, args) {
  /**
   * @type {User}
   */
  let target;
  let reason;

  if (interaction.options) {
    // slashcmd
    target = interaction.options.getUser("user");
    reason = interaction.options.getString("reason") || "No reason provided";
  } else {
    // prefix
    if (args.length == 0)
      return interaction.channel.send("Please mention a user to ban.");
    target = new User();
    await target.get(args[0]);
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
    !interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers) &&
    !permissions.has(PermissionsBits.Ban) &&
    !permissions.has(PermissionsBits.Admin)
  ) {
    return interaction.reply({
      content: "❌ You don't have permission to ban members.",
      flags: [MessageFlags.Ephemeral],
    });
  }
  const member = interaction.guild.members.cache.get(target.id);
  if (member && !member.bannable)
    return interaction.reply({
      content: "❌ I can't ban this user.",
      flags: [MessageFlags.Ephemeral],
    });
  await interaction.guild.members.ban(target.id, { reason: reason });
  new History(target).add("ban", reason, interaction.member.user);
  await interaction.reply({
    content: `✅ **${target.username}** has been banned. Reason: ${reason}`,
  });
}

export const name = "ban";
export const permissions = [];
export const builder = new SlashCommandBuilder()
  .setName("ban")
  .setDescription("Ban a user from the server.")
  .addUserOption((option) =>
    option
      .setName("user")
      .setDescription("The user to ban")
      .setRequired(true),
  )
  .addStringOption((option) =>
    option
      .setName("reason")
      .setDescription("The reason for the ban")
      .setRequired(false),
  );
export const any_guild = false;
export const dm = false;