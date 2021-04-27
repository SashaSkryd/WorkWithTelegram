const { default: axios } = require('axios');
const TelegramBot = require('node-telegram-bot-api');
// replace the value below with the Telegram token you receive from @BotFather
const token = '1735928042:AAE6gt6oc_Ml-891vGjZ9FymQT3WsdaEv3M';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/list/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  // const resp = axios.get('api.exchangeratesapi.io/latest?base=USD')
  //   .then(function (res) {
  //     console.log(res);
  //   });

  const resp = axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=1739c3999f5cc119f517a4aada0f8151')
    // https://api.exchangeratesapi.io/v1/latest? access_key = API_KEY & base = USD
  // api.exchangeratesapi.io/latest?base=USD
    .then(res => console.log(res))
    // .catch(error => console.log(error))

  // console.log(resp);
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, 'res.data.base');
});
('Hello', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});