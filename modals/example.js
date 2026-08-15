import { MessageFlags } from "discord.js";

export async function parse(interaction) {
  const favoriteColor =
    interaction.fields.getTextInputValue("favoriteColorInput");
  const hobbies = interaction.fields.getTextInputValue("hobbiesInput");

  await interaction.reply({
    content: `I'm happy to know that your favorite color is **${favoriteColor}** and your hobbies are **${hobbies}**!`,
    flags: [MessageFlags.Ephemeral],
  });
}

export const customId = "template-example";
export const permissions = [];
export const any_guild = false;
export const dm = false;