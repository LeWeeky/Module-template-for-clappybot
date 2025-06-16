const { SlashCommandBuilder, PermissionsBitField, MessageFlags } = require("discord.js");
const { clappybot } = require("../../../main");
const { History } = require("../../../libraries/sanctions/history");
const { User } = require("../../../libraries/fetching/users");

async function parse(interaction, cmd, args)
{
	let target;
	let reason;

	if (interaction.options)
	{
		// slashcmd
		target = interaction.options.getMember("user");
		reason = interaction.options.getString("reason") || "No reason provided";
	}
	else
	{
		// prefix
		if (args.length == 0)
			return interaction.channel.send("Please mention a user to kick.");
		target = await new User().get(args[0]);
		if (!target)
			return interaction.channel.send(`❌ \`${args[0]}\` is not a valid user.`);
		reason = interaction.content
			.substring(clappybot.prefix.length + cmd.length)
			.trimStart()
			.split(" ")
			.slice(1)
			.join(" ")
			|| "No reason provided";
	}

	if (!target)
		return interaction.reply({ content: "❌ User not found.", flags: [MessageFlags.Ephemeral]});
	if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) 
		return interaction.reply({ content: "❌ You don't have permission to kick members.", flags: [MessageFlags.Ephemeral] });
	const member = interaction.guild.members.cache.get(target.id);
	if (!member)
		return interaction.reply({ content: "❌ I cannot kick this user (this user is not part of the guild).",  flags: [MessageFlags.Ephemeral] });
	if (!member.kickable)
		return interaction.reply({ content: "❌ I cannot kick this user (The role of the target is higer, or i don't have the permission de kick members).",  flags: [MessageFlags.Ephemeral] });

	await member.kick(reason);
	await interaction.reply({ content: `✅ **${target.name}** has been kicked. Reason: ${reason}` });
	new History(target).add("kick", reason, interaction.member.user);
}

module.exports = {
	parse,
	name: "kick",
	permissions: [],
	builder: new SlashCommandBuilder()
		.setName("kick")
		.setDescription("Kick a user from the server.")
		.addUserOption(option =>
			option.setName("user")
				.setDescription("The user to kick")
				.setRequired(true)
		)
		.addStringOption(option =>
			option.setName("reason")
				.setDescription("The reason for the kick")
				.setRequired(false)
		),
	any_guild: false,
	dm: false
};
