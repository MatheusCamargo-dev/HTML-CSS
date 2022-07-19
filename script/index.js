const Discord = require('discord.js');
const client = new Discord.Client();
const token = "";

client.login(token);

client.once('ready', () =>{
    console.log('Ready!');
});