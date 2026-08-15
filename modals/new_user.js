import { MessageFlags } from "discord.js";
import User from "../models/Usergi.js";
import { getModelsRows } from "../utils/getModelsRows.js";

export async function parse(interaction) {
  const wait = interaction.deferUpdate();
  const username = interaction.fields.getTextInputValue("username");
  const email = interaction.fields.getTextInputValue("email");

  const user = await User.create({ username: username, email: email });

  if (!user) {
    await wait;
    interaction.followUp({
      content: "Oups something bad happened! Please check the console!",
      flags: [MessageFlags.Ephemeral],
    });
  } else {
    console.log("new user:", user);
    const rows = await getModelsRows();
    await wait;
    interaction.editReply({ components: rows });
  }
}

export const customId = "template-new-user";
export const permissions = [];
export const any_guild = false;
export const dm = false;