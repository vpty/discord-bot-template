const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Bot is ready!"); //Here you can customize the console log when the bot is Online
 });
 
client.user.setPresence( {
  
    activity: {name: "BotTemplatesOnGithub", //Here you can change the name of the activity
    type: "WATCHING"}, //Here you can change the status (PLAYING,LISTENING,WATCHING)
    status:"online"}); //Here is the status, better dont change it


client.login("SecretToken");  //Here goes the Secret Token