const { Client, GatewayIntentBits, Collection } = require('discord.js');
const config = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.comandos = new Collection();


// Carregar comandos do comandos.js
const comandos = require('./comandos.js');

for (const nome in comandos) {
    client.comandos.set(nome, comandos[nome]);
}


client.once('clientReady', () => {
    console.log(`🤖 Online: ${client.user.tag}`);
});


client.on('messageCreate', async (msg) => {

    if (msg.author.bot) return;

    if (!msg.content.startsWith(config.prefixo)) return;


    const args = msg.content
        .slice(config.prefixo.length)
        .trim()
        .split(/ +/);


    const nome = args.shift().toLowerCase();


    const comando = client.comandos.get(nome);

    if (!comando) return;


    try {
        await comando.execute(msg, args);
    } catch (err) {
        console.log(err);
        msg.reply("❌ Erro ao executar comando.");
    }

});


client.login(config.token);
