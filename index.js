const { Telegraf } = require('telegraf');
const bot = new Telegraf("6614590235:AAHg-R9LpZErwPF_I7MYUOvIsQzbKD9z3cQ");

 bot.command('start', ctx => {
   bot.telegram.sendMessage(ctx.chat.id, 'Welcome', {
     reply_markup : {
       inline_keyboard : [
         [
           {
             text : 'Order Here!', web_app : { url : 'https://web-app-w7ev.vercel.app/'}
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