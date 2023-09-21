import React, { useState, useEffect } from 'react';
import Card from "./Components/Card";
const { getData } = require("./Database/Database")
const list = getData();

let tg = window.Telegram.WebApp;

tg.expand();
tg.enableClosingConfirmation() 

const App = () => {
  const [count, setCount] = useState(0);

  const onCheckout = () => {
    tg.MainButton.setText('Bayar');
    tg.MainButton.onClick(function(callback) { 
      tg.showAlert("Pilihan anda adalah "  + getCookie("selected"), function(callback){
        tg.sendData("msgToSend=" + getCookie("selected"));
      })
    });
    tg.MainButton.show();
  };

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

  useEffect(() => {
    document.cookie="selected=-1";
  }, []);

  return (
    <div className="card-container">
      {list.map((talent) => {
        return (
          <div className="card-wrapper" onClick={() => {setSelected(talent.title)}} key={talent.id}>
            <Card talent={talent} onCheckout={onCheckout} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
