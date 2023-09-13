import './App.css';
import React from 'react';
import Card from "./Components/Card";

const { getData } = require("./Database/Database")
const list = getData();



let tg = window.Telegram.WebApp;

tg.expand();
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
  tg.MainButton.show()
}


function App() {
  return (
     <div onClick={onCheckout} className="kintil">
       <marquee className="hint">developer: @lovinswmn</marquee>
       {list.map((talent => {
         return <Card talent={talent} key={talent.id}/> 
       } ))}
      </div>
  );
}

export default App;
