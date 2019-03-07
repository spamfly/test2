const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("553280465277026314")
setInterval(function() {
channel.send(`spam cridit spam criditspam criditspam criditspam criditspam criditspam criditspam cridit`);
}, 30)
})

client.login(process.env.BOT_TOKEN);