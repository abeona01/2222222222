const Discord = require("discord.js")     
const client = new Discord.Client();       
const config = require("./config.js")    
const fs = require("fs");            

require('./util/Loader.js')(client);     

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} komutu yüklendi.`);  
    console.log(`Ria Number One!`)     
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})

// <-> Error Handler <-> \\
process.on('uncaughtException', err => {
  const errEmbed = new Discord.MessageEmbed()  
    .setAuthor('HATA VAR GÖT ')
    .setDescription(`Hata;\n\`\`\`powershell\n${err.message}\`\`\``)
    .setTimestamp()
    .setFooter('Coded & Designed by RiaJS');
  client.channels.cache.get('1038239659412697109').send(errEmbed);
});

process.on('unhandledRejection', err => {
  const errEmbed = new Discord.MessageEmbed()  
    .setAuthor('HATA VAR GÖT ')
    .setDescription(`Hata;\n\`\`\`powershell\n${err.message}\`\`\``)
    .setTimestamp()
    .setFooter('Coded & Designed by RiaJS');
  client.channels.cache.get('1038239659412697109').send(errEmbed);
});
// <-> Error Handler <-> \\

client.login(config.token)
