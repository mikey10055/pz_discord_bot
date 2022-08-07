# PZ RCON Discord Bot

### Getting started

Requires [Nodejs](https://nodejs.org/)

Once you have nodejs, open a terminal and type
```
npm install
```

Inside the `.env` file you will find the following variables.

```
RCON_HOST="127.0.0.1"
RCON_PORT="27015"
RCON_PASS=""

# Discord bot client id
DISCORD_CLIENT_ID=""

# Discord bot token
DISCORD_TOKEN=""

# Used for registering slash commands to the specified guild
DISCORD_GUILDID=""

#### COMMANDS
# values: true || false
# if "false" commands won't be registered at all on discord.

COMMAND_SAVE_ENABLED="true"
COMMAND_QUIT_ENABLED="true"
COMMAND_SERVERMSG_ENABLED="true"
COMMAND_TELEPORT_ENABLED="true"
COMMAND_TELEPORTTO_ENABLED="true"
COMMAND_PLAYERS_ENABLED="true"

COMMAND_SETACCESSLEVEL_ENABLED="true"
COMMAND_ADDITEM_ENABLED="true"
COMMAND_ADDUSER_ENABLED="true"
COMMAND_ADDVEHICLE_ENABLED="true"
COMMAND_ADDXP_ENABLED="true"
COMMAND_BANID_ENABLED="true"
COMMAND_BANUSER_ENABLED="true"
COMMAND_CHANGEOPTION_ENABLED="true"
COMMAND_CHOPPER_ENABLED="true"
COMMAND_CREATEHORDE_ENABLED="true"
COMMAND_GODMOD_ENABLED="true"
COMMAND_GUNSHOT_ENABLED="true"
COMMAND_KICK_ENABLED="true"
COMMAND_LIGHTNING_ENABLED="true"
COMMAND_REMOVEUSERFROMWHITELIST_ENABLED="true"
COMMAND_STARTRAIN_ENABLED="true"
COMMAND_STARTSTORM_ENABLED="true"
COMMAND_STOPRAIN_ENABLED="true"
COMMAND_STOPWEATHER_ENABLED="true"
COMMAND_UNBANID_ENABLED="true"
COMMAND_UNBANUSER_ENABLED="true"
COMMAND_VOICEBAN_ENABLED="true"


# Extra commands not rcon commands
COMMAND_HEAL_ENABLED="true"

```
`DISCORD_CLIENT_ID` and `DISCORD_TOKEN` can be found after creating a bot [here](https://discord.com/developers/applications)

`DISCORD_GUILDID` is the Id for the server that can be optained once you enable Developer mode for your discord user account. Can be found at `User Settings -> Advanced -> Developer Mode`. Once enabled you can get the `DISCORD_GUILDID` by right clicking on your servers name or image, and clicking `Copy ID`.

Once all variables are set in the .env, inside a terminal type the following
```
npm start
```

## Managing permissions

All permissions for the commands are handled by Discord, under the interactions tab in server settings. By default all commands require the user to have `Administrator` permission.

The interactions for the bot will be under tha name of the bot you created.


![interactions image](https://github.com/mikey10055/pz_rcon_discord_bot/blob/main/interactions.jpg?raw=true)

All of the commands will appear once you have run `npm start`

![slashcommands image](https://github.com/mikey10055/pz_rcon_discord_bot/blob/main/slashcommands.jpg?raw=true)