const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");
const { clappybot } = require("../../../main");

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
		const mention = interaction.mentions.members.first();
		if (!mention) return interaction.channel.send("Please mention a user to kick.");
		target = mention;
		reason = interaction.content
			.substring(clappybot.prefix.length + cmd.length)
			.trimStart()
			.split(" ")
			.slice(1)
			.join(" ")
			|| "No reason provided";
	}

	if (!target) return interaction.reply({ content: "❌ User not found.", ephemeral: true });
	if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
		return interaction.reply({ content: "❌ You don't have permission to kick members.", ephemeral: true });
	}
	if (!target.kickable) {
		return interaction.reply({ content: "❌ I cannot kick this user. (The role of the target is higer, or i don't have the permission de kick members)", ephemeral: true });
	}

	await target.kick(reason);
	await interaction.reply({ content: `✅ **${target.user.tag}** has been kicked. Reason: ${reason}` });
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
