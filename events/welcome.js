client.on('guildMemberAdd', member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome');
    if (welcomeChannel) {
      welcomeChannel.send(`Welcome, ${member.user.username}!`);
    }
  });