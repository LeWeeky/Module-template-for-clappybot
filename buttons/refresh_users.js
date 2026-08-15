import { getModelsRows } from "../utils/getModelsRows.js";

export async function parse(interaction) {
  const [wait, rows] = await Promise.all([
    interaction.deferUpdate(),
    getModelsRows()
  ]);

  await interaction.editReply({ components: rows });
}

export const customId = "template-refresh-users";
export const permissions = [];
export const any_guild = false;
export const dm = false;