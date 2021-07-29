const cfg = require("./src/configs/config.json");
const Tokens = cfg.Bot.Token;
const Channels = cfg.Channels.BotVoice;
const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const moment = require("moment");
const mongo = require("mongoose");
const { CronJob } = require("cron");
const Database = require("./src/schemas/WelcomeMode"); 
const request = require("request");
const fs = require("fs");
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/events/functions.js")(client, cfg, moment, request, fs); 
client.commands = global.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Map();


for (let index = 0; index < 1; index++) {
const token = Tokens[index];
client.login(token)
}

for (let index = 0; index < Tokens.length; index++) {
let bot = new Client();
const token = Tokens[index];
bot.login(token).catch(err => console.error(`${bot.user.tag} Adlı bota giriş yapılırken başarısız olundu!`));
let keixd;
bot.on("ready", async () => {
try{keixd = await bot.channels.cache.get(Channels[index]).join()}catch{{}}
bot.user.setPresence({ activity: { name: cfg.Bot.Durum }, status: cfg.Bot.Status });
console.log(`(${bot.user.username}) adlı hesapta giriş yapıldı.`)
});
let ses;
  
client.on('voiceStateUpdate', async (old, nev) => {
const data = await Database.findOne({ guildID: cfg.Server.GuildID});
let Mode = data && data.SesMod ? data.SesMod : "./src/sesler/hosgeldin.mp3"
let Staff = data && data.YetkiliSesMod ? data.YetkiliSesMod : "./src/sesler/yetkili.mp3"
if (nev.member && nev.member.user.bot) return;
if (nev.channel && (nev.channel.id === Channels[index])) {
if (nev.channelID === old.channelID) return;
if ((nev.member.roles.highest.rawPosition < nev.guild.roles.cache.get(cfg.Roles.EnAltYetkiliRolü).rawPosition)) { 
ses = await keixd.play(Mode);
} else if (nev.member.roles.highest.rawPosition > nev.guild.roles.cache.get(cfg.Roles.EnAltYetkiliRolü).rawPosition) {
ses = await keixd.play(Staff);
}
}
if (old.channel && (old.channel.id === Channels[index]) && (old.channel.members.size === 1) && ses) ses.end();
});
  
const Reset = new CronJob("00 00 00 * * *", async function() {
bot.login(token).catch(err => console.error(`${bot.user.tag} Adlı bota giriş yapılırken başarısız olundu!`));
try{keixd = await bot.channels.cache.get(Channels[index]).join()}catch{{}}
bot.user.setPresence({ activity: { name: cfg.Bot.Durum }, status: cfg.Bot.Status });
console.log(`Bot kontrolleri yapıldı ve tekrardan botlara giriş yapılıp sese sokuldu! 00:00`)
}, null, true, "Europe/Istanbul");
Reset.start();
} 
