const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590160698370293760")
setInterval(function() {
channel.send(`شكرا على الاستراحة 3> شكرااااااااااا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
