import { SlashCommandBuilder } from "discord.js";

export async function parse(interaction, cmd, args) {
  if (interaction.options) {
    // Commande slash (/ping)
    const response = await interaction.reply({
      content: "Pong !",
      withResponse: true,
    });
    const { message } = response.resource;
    const latency = message.createdTimestamp - interaction.createdTimestamp;
    const apiPing = Math.round(interaction.client.ws.ping);

    await interaction.editReply(
      `🏓 Latency : ${latency}ms\n📡 Ping API : ${apiPing}ms`,
    );
  } else {
    // Commande classique (+ping)
    const message = await interaction.channel.send({ content: "Pong !" });
    const latency = message.createdTimestamp - Date.now();
    const apiPing = Math.round(interaction.client.ws.ping);

    message.edit(`🏓 Latency : ${-latency}ms\n📡 Ping API : ${apiPing}ms`);
  }
}

export const name = "ping";
export const permissions = [];
export const builder = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Display reply and api latency.");
export const any_guild = false;
export const dm = false;