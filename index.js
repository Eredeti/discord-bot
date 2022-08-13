const { Client, GatewayIntentBits } = require("discord.js");
const { write } = require("fs");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, //permet d'accéder évènements globaux serveurs
        GatewayIntentBits.GuildMessages, //pour détecter les messages 
        GatewayIntentBits.MessageContent 
    ]
});

client.on("ready", () => {
    console.log("bot connecté"); // écrit dans la console pour valider le fonctionnement
}); 

client.on("messageCreate", message => {
    if(message.author.bot) return;

    console.log("message reçu !"); // envoie un message dans les logs
    if(message.content === "ping"){ // si le message est ping
        message.reply("pong"); // répond au message AVEC ping
        message.channel.send("pong"); // répond au message SANS ping
        message.author.send("pong"); // envoie un message mp
    }
    else if(message.content === "help"){
        message.reply("les commandes du bot sont : \n test 1 \n test 2") // \n permet d'aller à la ligne
    }
    else if(message.content === "mention"){
        message.reply("Mention utilisateur : <@" + message.author.id + "> \n Mention d'un salon : <#" + message.channel.id + ">") // mention utilisateur + mention salon
    }
});

client.login(process.env.TOKEN); //la token du bot
