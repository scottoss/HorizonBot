const Discord = require('discord.js');
const DIG = require("discord-image-generation");

module.exports.run = (client, message, args) => {
    message.delete();
    const cible = message.mentions.users.first() || message.author;
    let avatar = cible.displayAvatarURL({ dynamic: false, format: 'png' });

    let img = await new DIG.Triggered().getImage(avatar)

    let image = new Discord.MessageAttachment(img, "delete.gif");;
    message.channel.send(image)
};

module.exports.help = {
  name: "triggered",
  aliases: [],
  category: 'fun',
  description: "š«š· PLACEHOLDER. \nš¬š§ PLACEHOLER",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: true
}
