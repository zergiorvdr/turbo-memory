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
   bot.telegram.sendMessage(ctx.chat.id,  `Hi @${greating}, Klik List Tombol Talent dibawah keyboard untuk melihat list talent.`,
   { 
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

bot.on("web_app_data", (ctx) => {
    try {
        if (ctx.message != null) {
            if (ctx.message.web_app_data != null) {
                console.log("Yep. Theres an update: " + ctx.message.web_app_data.data);
                var data = ctx.message.web_app_data.data;
                var from = ctx.message.from.id;
                var selected = data.split("msgToSend=")[1];
                if(selected==null) selected = "Wrong data";
                bot.telegram.sendMessage(from, "Pilihan Talent Nomor : " + selected + ", Silahkan lakukan pembayaran dengan metode pemabayaran yang tersedia dibawah ini", {
                  reply_markup : {
                  inline_keyboard :  [
                      [
     { text: "DANA", callback_data : "DANA" },
     { text: "OVO", callback_data : "OVO" },
                        ],
                        [
     { text: "GOPAY" , callback_data: "GOPAY"},
     { text: "SHOPEEPAY", callback_data: "SHOPEEPAY" }
                      ]
                     ]
                  }
                });
            }
        }
    } catch (e) {
        console.log(e);
    }
ctx.deleteMessage()});
bot.action('DANA', ctx => {
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, "Silahkan melakukan transfer ke Nomor DANA dibawah ini \n- 085220601095 \n\n Tolong kirimkan bukti transfer ", {
    reply_markup : {
      inline_keyboard : [
        [
          { text: "Kembali", callback_data : "KEMBALI" }
          ]
        ]
    }
  })
})

bot.action('OVO', ctx => {
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, "Silahkan melakukan transfer ke Nomor OVO dibawah ini \n- 085220601095 \n\n Tolong kirimkan bukti transfer ", {
    reply_markup : {
      inline_keyboard : [
        [
          { text: "Kembali", callback_data : "KEMBALI" }
          ]
        ]
    }
  })
})

bot.action('GOPAY', ctx => {
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, "Silahkan melakukan transfer ke Nomor GOPAY dibawah ini \n- 085220601095 \n\n Tolong kirimkan bukti transfer ", {
    reply_markup : {
      inline_keyboard : [
        [
          { text: "Kembali", callback_data : "KEMBALI" }
          ]
        ]
    }
  })
})

bot.action('SHOPEEPAY', ctx => {
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, "Silahkan melakukan transfer ke Nomor SHOPEEPAY dibawah ini \n- 085220601095 \n\n Tolong kirimkan bukti transfer ", {
    reply_markup : {
      inline_keyboard : [
        [
          { text: "Kembali", callback_data : "KEMBALI" }
          ]
        ]
    }
  })
})

bot.action('KEMBALI', ctx => {
ctx.deleteMessage();
bot.telegram.sendMessage(ctx.chat.id, " Silahkan lakukan pembayaran dengan metode pemabayaran yang tersedia dibawah ini", {
                  reply_markup : {
                  inline_keyboard :  [
                      [
     { text: "DANA", callback_data : "DANA" },
     { text: "OVO", callback_data : "OVO" },
                        ],
                        [
     { text: "GOPAY" , callback_data: "GOPAY"},
     { text: "SHOPEEPAY", callback_data: "SHOPEEPAY" }
                      ]
                     ]
                  }
                });
})


//app.listen(port)
bot.launch()
