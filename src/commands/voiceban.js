const {
    SlashCommandBuilder
} = require('discord.js');
const cmd = require('../pzcommands');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("voiceban")
        .setDescription("Block or Unblock voice from a user")
        .addStringOption(option => option.setName("player").setDescription("Player to enable/disable").setRequired(true))
        .addBooleanOption(option => option.setName("enabled").setDescription("Enable or Disable").setRequired(true))
        .setDefaultMemberPermissions(0),
    async execute(interaction, rconConnection, timers, log) {
        const player = interaction.options.getString("player");
        const enabled = interaction.options.getBoolean("enabled");
        cmd.voiceban(rconConnection, player, enabled);
    },
};