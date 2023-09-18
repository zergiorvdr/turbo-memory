const https = require('https');
const TelegramBotAPI = require("telegram-bot-api");
const bodyParser = require('body-parser')
const fs = require('fs');
const { Telegraf } = require('telegraf');
const express = require('express');
const port = 3000;
const app = express();

app.use(bodyParser.json());
const token = process.env.BOTTOKEN;
//bot.telegram.setWebhook('https://da27-114-122-74-174.ngrok-free.app/bot' + token);

//app.use(bot.webhookCallback('/bot' + token));

//app.post('/6584784094:AAGyHUp3XeVB5lOY0vk-RpahxJRI43RsdTU', (req, res) => {
//  const data = req.body;
//  console.log(data);
//  res.sendStatus(200);
//})
const bot = new Telegraf(token);


 bot.command('start', ctx => {
   const user = ctx.from;
   console.log(user)
   const greating = ctx.from.username;
   bot.telegram.sendMessage(ctx.chat.id,  `hi @${greating} silahkan klik tombil dibawah untuk melihat list cewe yang akan nemenin kamu aht!`, {
     reply_markup : {
       keyboard : [
         [
           {
             text : 'List Talent',
             web_app : { url : 'https://turbo-memory.vercel.app/'}
           }]],
         resize_keyboard: true
     }
   })
 })


 bot.command('order', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Click Tombol di bawah untuk order! ', 
  {
    reply_markup : {
       keyboard : [
         [
           { text : 'order' }
         ]
         ], 
      resize_keyboard : true,
        one_time_keyboard: false,
     input_field_placeholder : "Pencet Tombol Di Bawah ya" 
  
    }
  })
});
bot.on("web_app_data", (ctx) => {
    try {
        if (ctx.message != null) {
            if (ctx.message.web_app_data != null) {
                console.log("Yep. Theres an update: " + ctx.message.web_app_data.data);
                var data = ctx.message.web_app_data.data;
                var from = ctx.message.from.id;
                var selected = data.split("msgToSend=")[1];
                if(selected==null) selected = "Wrong data";
                bot.telegram.sendMessage(from, "You have selected: " + selected + ".");
            }
        }
    } catch (e) {
        console.log(e);
    }
});
bot.on('text', (ctx) => {
  console.log(ctx)
  const user = ctx.from;
  console.log(user)
  if (user) {
    const userId = user.id;
    const firstName = user.first_name;
    const isBot = user.is_bot;
    const languageCode = user.language_code;
console.log(`ID Pengguna: ${userId}`);
    console.log(`Nama Depan: ${firstName}`);
    console.log(`Bot: ${isBot}`);
    console.log(`Kode Bahasa: ${languageCode}`);
  } else {
    console.log("Data WebAppUser tidak tersedia dalam pesan.");
  }
});


//app.listen(port)
bot.launch()
