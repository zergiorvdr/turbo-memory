import './App.css';
import React from 'react';
import Card from "./Components/Card";
const { getData } = require("./Database/Database")
const list = getData();

let tg = window.Telegram.WebApp;

tg.expand();
const initData = window.Telegram.WebApp.initData || '';
const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe || {};
console.log(initData)
console.log(initDataUnsafe)

 //Main Button
//tg.MainButton.textColor = "#FFFFFF";
//tg.MainButton.color = "#FF00FF";
 //Back Button
//tg.BackButton.isVisible = true
//tg.BackButton.color = "#FFFFFF"
//tg.BackButton.show();
 //Theme Params
//tg.themeParams.setHeaderColor({color : "#FFFFFF"});
//tg.themeParams.setBackgroundColor('#FF00FF');
 
const onCheckout = () => {
  tg.MainButton.setText('ORDER HERE!');
  tg.MainButton.onClick = function(callback) {
    const chat_id = callback.message.chat.id;
    const selectedId = getCookie('selected'); // Mendapatkan nilai dari cookie 'selected'

    // Mengambil data talent yang sesuai dengan selectedId
    const selectedTalent = list.find(talent => talent.id === selectedId);

    // Membuat pesan yang akan dikirimkan
    const messageToSend = `Pilihan Anda: ${selectedTalent.name}`;

    // Mengirim pesan dan data menggunakan sendData
    tg.sendData(chat_id, {
      message: messageToSend,
      selectedId: selectedId
    });
  };
  tg.MainButton.show();
}

// ... (Kode Anda yang lain tetap seperti sebelumnya)


function setSelected(id) {
    document.cookie="selected=" + id;
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function App() {
    document.cookie="selected=-1";
  return (
     <div onClick={onCheckout} className="kintil">
       <marquee className="hint">developer: @lovinswmn</marquee>
       {list.map((talent => {
           return <div onClick={() => {setSelected(talent.id)}}> <Card talent={talent} key={talent.id}/> </div>
       } ))}
      </div>
  );
}

export default App;

