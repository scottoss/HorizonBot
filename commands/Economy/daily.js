const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete();
};

module.exports.help = {
  name: "daily",
  aliases: ['da'],
  category: 'economy',
  description: "š«š· PLACEHOLDER. \nš¬š§ PLACEHOLER",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: true
}