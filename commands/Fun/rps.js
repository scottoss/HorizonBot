const { MessageEmbed } = require("discord.js");
const { promptMessage } = require("../../util/resfunctions.js")
const chooseArr = ["š»", "š°", "ā"];

module.exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
  .setColor("#ffffff")
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setDescription(message.guild.language.ajouterReactionJouer)
  .setTimestamp()

  const m = await message.channel.send(embed)
  const reacted = await promptMessage(m, message.author, 30, chooseArr);

  const choixDuBot = chooseArr[Math.floor(Math.random() * chooseArr.length)];

  const result = await getResult(reacted, choixDuBot);

  embed
    .setDescription("")
    .addField(result, `${reacted} vs ${choixDuBot}`);
  
  m.edit(embed)

  function getResult(me, clientChosen) {
    if ((me === "š»" && clientChosen === "ā") ||
        (me === "š°" && clientChosen === "š»") ||
        (me === "ā" && clientChosen === "š°")) {
            return message.guild.language.uWin;
    } else if (me === clientChosen) {
        return message.guild.language.draw;
    } else {
        return message.guild.language.uLost;
    }
  }
};

module.exports.help = {
  name: "rps",
  aliases: [''],
  category: 'fun',
  description: "š«š· Piere, feuille, ciseaux ! \nš¬š§ Rock, paper, Scisors !",
  cooldown: 10,
  usage: "",
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: false
}