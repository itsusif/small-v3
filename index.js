const { Client, GatewayIntentBits } = require('discord.js');
const { prefix, token } = require('./container/config.json');

const client = new Client({
    intents: Object.values(GatewayIntentBits)
});

client.login(token);

client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const command = message.content.slice(prefix.length).split(' ')[0];

    switch (command) {
        case 'ping': {
            message.reply({
                content: `Pong! ${client.ws.ping}`,
            });
        };
    };
});