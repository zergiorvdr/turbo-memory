import React, { useState, useEffect } from 'react';
import Card from "./Components/Card";
const { getData } = require("./Database/Database")
const list = getData();

let tg = window.Telegram.WebApp;

tg.expand();
tg.enableClosingConfirmation() 

const App = () => {
  const [lastCount, setLastCount] = useState(null);

  const updateCount = (newCount) => {
    setLastCount(newCount);
  };

  const onCheckout = (count) => {
    const currentCount = count !== null ? count : 0;
    tg.MainButton.setText('Bayar');
    tg.MainButton.onClick(function(callback) { 
      tg.showAlert(`Pilihan anda adalah ${getCookie("selected")} dengan jumlah ${currentCount}`, function(callback){
        tg.sendData(`msgToSend=${getCookie("selected")}&count=${currentCount}`);
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
            <Card talent={talent} onCheckout={onCheckout} updateCount={updateCount} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
