module.exports = {
    name: 'kick',
    execute(message, args) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Optional reason').then(() => {
            message.reply(`${user.tag} was kicked from the server.`);
          }).catch((error) => {
            console.error(error);
            message.reply('ERROR.');
          });
        } else {
          message.reply('NOT IN SERVER.');
        }
      } else {
        message.reply('USERNAME NOT CORRECT.');
      }
    },
  };
  