const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('Hey Sen ', 'Merhaba')
    return message.author.send(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

  client.guilds.cache.get('926107554327719996').members.cache.forEach(async(u) => {
    u.send({ content: ''+mesaj+'' });
  })

message.channel.send(`:white_check_mark: Mesaj basariyla **` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gonderildi.`);

};

exports.config = {
    name: "duyuru",
    guildOnly: true,
    aliases: ["duyuru"],
  };