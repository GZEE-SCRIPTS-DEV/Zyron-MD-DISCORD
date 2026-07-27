const config = require('./config.json');

module.exports = {

    ping: {
        execute(msg) {
            msg.reply("🏓 Pong! Bot online!");
        }
    },


    info: {
        execute(msg) {
            msg.reply(
`🤖 **Informações do Bot**

👤 Usuário: ${msg.author.username}
🆔 ID: ${msg.author.id}`
            );
        }
    },


    ajuda: {
        execute(msg) {
            msg.reply(
`📚 **ZYRON-MD**

👑 Dono: ${config.bot.dono}
🛠️ Criador: ${config.bot.criador}
📱 Número: ${config.bot.numero}
🌐 Site: ${config.bot.site}
📦 Versão: ${config.bot.versao}`
            );
        }
    }

};

//segue nesse ritmo 
//NOME: {
//        execute(msg) {
//            msg.reply("MENSAGEM!");
//        }
//    },
//
//
//    info: {
//        execute(msg) {
//            msg.reply(
//`🤖 **Informações do Bot**
//
//👤 Usuário: ${msg.author.username}
//🆔 ID: ${msg.author.id}`
//            );
//       }
//    },