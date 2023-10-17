import Coins from "./Coins";
import "../Styles/App.css";

export default function App() {
  return (
    <div className="App-header">
      <h1>Crypto Coin Statistics</h1>
      <div className="coinHeader border_radius">
        <div className="coinContainer">
          <Coins />
        </div>
      </div>
    </div>
  );
}
