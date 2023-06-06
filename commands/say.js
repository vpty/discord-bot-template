module.exports = {
    name: 'say',
    execute(message, args) {
      const text = args.join(' ');
      message.delete();
      message.channel.send(text);
    },
  };
  