const { getModelsRows } = require("../utils/getModelsRows");

async function parse(interaction)
{
	const wait = interaction.deferUpdate();
	const rows = await getModelsRows();

	await wait;
	interaction.editReply({components: rows})
}

module.exports = {
	parse,
	customId: "template-refresh-users",
	any_guild: false,
	dm: false
}