const {
    SlashCommandBuilder
} = require('discord.js');
const {
    notConnectedToRcon
} = require('../helper');

const cmd = require('../pzcommands');

module.exports = {
    data: new SlashCommandBuilder()
            .setName("setaccesslevel")
            .setDescription("Set access level of a player. Current levels: Admin, Moderator, Overseer, GM, Observer.")
            .addStringOption(option => option.setName("player").setDescription("Enter player name").setRequired(true))
            .addStringOption(option => 
                option.setName("level")
                .setDescription("Select access level")
                .setRequired(true)
                .addChoices(
                    { name: 'Admin', value: 'Admin' },
                    { name: 'Moderator', value: 'Moderator' },
                    { name: 'Overseer', value: 'Overseer' },
                    { name: 'GM', value: 'GM' },
                    { name: 'Observer', value: 'Observer' },
                    { name: 'Player', value: 'Player' }
                )
            )
            .setDefaultMemberPermissions(0),
    async execute(interaction, ConnectedToRconServer, rconConnection, setLastInteraction) {
        if (!ConnectedToRconServer) {
            notConnectedToRcon(interaction);
        } else {
            setLastInteraction(interaction);
            await interaction.deferReply({
                ephemeral: false
            });

            const user = interaction.options.getString('player');
            const level = interaction.options.getString('level');

            cmd.setaccesslevel(rconConnection, user, level);

        }
    },
};