
import './App.css';
import React from 'react';
import Card from "./Components/Card";
import axios from 'axios';
import {useState, useEffect} from 'react';
let tg = window.Telegram.WebApp;

tg.expand();
tg.enableClosingConfirmation() 
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
  tg.MainButton.setText('Bayar');
  tg.MainButton.onClick(function(callback) { 
    tg.showAlert("Pilihan anda adalah "  + getCookie("selected"), function(callback){
      tg.sendData("msgToSend=" + getCookie("selected"));
    })
   });
  tg.MainButton.show();
  };

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
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
    document.cookie="selected=-1";
return (
  <div><h3 className="Brand">Lopin Parfume Store </h3>
    <div className="card-container">
      {data.map((item, index) => (
        <div className="card-wrapper" key={index}>
          <Card title={item.name} image={item.url} id={item.id} /> {/* Mengisi data ke Card */}
        </div>
      ))}
    </div>
    </div>
  );

}

export default App;
