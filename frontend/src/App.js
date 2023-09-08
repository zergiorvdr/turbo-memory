import './App.css';
let tg = window.Telegram.WebApp;

tg.expand();
 //Main Button
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FFFFFF";
tg.MainButton.setText("Order!");
tg.MainButton.show();
 //Back Button
tg.BackButton.isVisible = true
tg.BackButton.show();
 //Theme Params
//tg.themeParams.setHeaderColor({color : "#FFFFFF"});
//tg.themeParams.setBackgroundColor('#FF00FF');


function App() {
  return (
     <div className="kintil">
       <h1 className="h1">Order Vcs</h1> 
       <h3 className="h3">Rekber by : Imam A'syari</h3>
     </div>
  );
}

export default App;
