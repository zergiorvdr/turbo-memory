const { Telegraf } = require('telegraf');
const bot = new Telegraf("6197018168:AAHVqltICS3cVK3RaLt0_XqQ6IkSuDEswYI");



 bot.command('start', ctx => {
   const greating = ctx.from.username;
   bot.telegram.sendMessage(ctx.chat.id,  `hi @${greating} silahkan klik tombil dibawah untuk melihat list cewe yang akan nemenin kamu aht!`, {
     reply_markup : {
       inline_keyboard : [
         [
           {
             text : 'List Talent', web_app : { url : 'https://turbo-memory.vercel.app/'}
           }]]
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
      resize_keyboard : true , 
     input_field_placeholder : "Pencet Tombol Di Bawah ya" 
  
    }
  })
})

bot.launch()