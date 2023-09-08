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
       <h1 className="h1">Order Vcs</h1> 
       <h3 className="h3">Rekber by : Imam A'syari</h3>
       <button className="container" onClick={onCheckout}> Gambar </button>
      </div>
  );
}

export default App;
