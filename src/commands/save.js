const {
    SlashCommandBuilder
} = require('discord.js');
const { notConnectedToRcon } = require('../helper');
const cmd = require('../pzcommands');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("save")
        .setDescription("Save the current world.")
        .setDefaultMemberPermissions(0),
    async execute(interaction, rconConnection, timers, log) {

            cmd.save(rconConnection);
    },
};