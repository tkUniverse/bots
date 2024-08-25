const path = require('path');
const Telegram = require('@yuva1422/telegram.js');
const { hyperlink } = require('discord.js');
const client = new Telegram.Client();
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const imgLink = `https://twokinds.gallery/download/art/${getRandomInt(1, 5835)}`
  if (msg.content === 'randompic') {
    msg.reply(imgLink);
  }
});

client.login(process.env.TELEGRAM_BOT_TOKEN);

client.startPolling();