const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");
const { clappybot } = require("../../../main");

async function parse(interaction, cmd, args)
{
	let userId;
	let reason;

	if (interaction.options)
	{
		// slashcmd
		userId = interaction.options.getString("userid");
		reason = interaction.options.getString("reason") || "No reason provided";
	}
	else
	{
		// prefix
		const split = interaction.content
			.substring(clappybot.prefix.length + cmd.length)
			.trimStart()
			.split(" ");
		if (split.length === 0 || !split[0]) return interaction.channel.send("Please provide a user ID to unban.");
		userId = split[0];
		reason = split.slice(1).join(" ") || "No reason provided";
	}

	if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
		return interaction.reply({ content: "❌ You don't have permission to unban members. (Check my roles/permissions)", ephemeral: true });
	}

	try {
		const bannedUser = await interaction.guild.bans.fetch(userId);
		if (!bannedUser) {
			return interaction.reply({ content: "❌ This user is not banned.", ephemeral: true });
		}

		await interaction.guild.members.unban(userId, reason);
		await interaction.reply({ content: `✅ Successfully unbanned **${bannedUser.user.tag}**. Reason: ${reason}` });
	} catch (err) {
		console.error(err);
		return interaction.reply({ content: "❌ Failed to unban. Make sure the ID is correct and the user is banned.", ephemeral: true });
	}
}

module.exports = {
	parse,
	name: "unban",
	permissions: [],
	builder: new SlashCommandBuilder()
		.setName("unban")
		.setDescription("Unban a user.")
		.addStringOption(option =>
			option.setName("userid")
				.setDescription("The ID of the user to unban")
				.setRequired(true)
		)
		.addStringOption(option =>
			option.setName("reason")
				.setDescription("The reason for the unban")
				.setRequired(false)
		),
	any_guild: false,
	dm: false
};
