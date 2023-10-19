
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '6396653187:AAFNa1GonzGfh2CsYwMx8ycWZqPYPV594vc';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text.toLowerCase().includes('eco')) {
    // Respond to messages related to eco
    bot.sendMessage(chatId, 'This is an eco-friendly bot response.');
  } else {
    // Respond to other messages
    bot.sendMessage(chatId, 'I am an eco bot. Please ask me eco-related questions.');
  }
});

console.log('Eco Telegram Bot is running.');
