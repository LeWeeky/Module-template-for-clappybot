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
		const userId = interaction.options.getString("user_id");
		target = await new User().get(userId);
		if (!target)
			return interaction.reply({content: `❌ \`${userId}\` is not a valid user.`, flags: [MessageFlags.Ephemeral]});
		reason = interaction.options.getString("reason") || "No reason provided";
	}
	else
	{
		// prefix
		if (args.length == 0)
			return interaction.channel.send("Please mention a user to unban.");
		target = await new User().get(args[0]);
		if (!target)
			return interaction.channel.send(`❌ \`${args[0]}\` is not a valid user.`);
		const split = interaction.content
			.substring(clappybot.prefix.length + cmd.length)
			.trimStart()
			.split(" ");
		reason = split.slice(1).join(" ") || "No reason provided";
	}

	if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
		return interaction.reply({ content: "❌ You don't have permission to unban members. (Check my roles/permissions)", ephemeral: true });
	}

	try {
		if (!await interaction.guild.bans.fetch(target.id)) {
			return interaction.reply({ content: "❌ This user is not banned.", ephemeral: true });
		}

		await interaction.guild.members.unban(target.id, reason);
		await interaction.reply({ content: `✅ Successfully unbanned **${target.name}**. Reason: ${reason}` });
		new History(target).add("unban", reason, interaction.member.user);
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
			option.setName("user_id")
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
