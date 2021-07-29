const cfg = require("../configs/config.json");
const Database = require("../schemas/WelcomeMode");
const { MessageEmbed } = require("discord.js");
const client = global.client;
const Discord = require("discord.js");

module.exports = async (msg) => {
  let prefix = cfg.Bot.Prefix.find((x) => msg.content.toLowerCase().startsWith(x));
  if (msg.author.bot || !msg.guild || !prefix) return;
  let args = msg.content.substring(prefix.length).trim().split(" ");
  let commandName = args[0].toLowerCase();
  const embed = new MessageEmbed().setColor(client.Renk[Math.floor(Math.random() * client.Renk.length)]).setAuthor(msg.member.displayName, msg.author.avatarURL({ dynamic: true, size: 2048 }));
  args = args.splice(1);
  let cmd = client.commands.has(commandName) ? client.commands.get(commandName) : client.commands.get(client.aliases.get(commandName));
  
  let author = msg.guild.member(msg.author);
  let uye = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.cache.get(args[0]);
  const guild = msg.guild.id
  if (cmd) {
    cmd.run({client: client, msg: msg, args: args, embed: embed, prefix: prefix, uye: uye, author: author, Database: Database, guild: guild, cfg: cfg, MessageEmbed: MessageEmbed, Discord: Discord});
  }
};

module.exports.conf = {
  name: "message",
};
