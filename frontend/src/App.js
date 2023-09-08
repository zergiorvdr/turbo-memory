import './App.css';
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
     <div className="kintil">
       <h1 className="hint">Talent</h1> 
       <h3 className="hint">by : lovinswmn</h3>
       <button className="container" onClick={onCheckout}> Klik ini</button>
      </div>
  );
}

export default App;
