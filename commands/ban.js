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
		if (!mention) return interaction.channel.send("Please mention a user to ban.");
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
	if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
		return interaction.reply({ content: "❌ You don't have permission to ban members.", ephemeral: true });
	}
	if (!target.bannable) {
		return interaction.reply({ content: "❌ I can't ban this user.", ephemeral: true });
	}

	await target.ban({ reason });
	await interaction.reply({ content: `✅ **${target.user.tag}** has been banned. Reason: ${reason}` });
}

module.exports = {
	parse,
	name: "ban",
	permissions: [],
	builder: new SlashCommandBuilder()
		.setName("ban")
		.setDescription("Ban a user from the server.")
		.addUserOption(option =>
			option.setName("user")
				.setDescription("The user to ban")
				.setRequired(true)
		)
		.addStringOption(option =>
			option.setName("reason")
				.setDescription("The reason for the ban")
				.setRequired(false)
		),
	any_guild: false,
	dm: false
};
