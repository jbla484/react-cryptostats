import "../Styles/Coin.css";

export default function Coin({ coin }) {
  let commas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  let formatter = function (num, precision = 2) {
    const map = [
      { suffix: "T", threshold: 1e12 },
      { suffix: "B", threshold: 1e9 },
      { suffix: "M", threshold: 1e6 },
      { suffix: "K", threshold: 1e3 },
      { suffix: "", threshold: 1 },
    ];

    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted =
        (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted;
    }

    return num;
  };

  return (
    <tr className="hover">
      <td style={{ position: "sticky", left: "0px", backgroundColor: "white" }}>
        {coin.rank}
      </td>
      <td
        style={{ position: "sticky", left: "55px", backgroundColor: "white" }}
      >
        <img src={coin.icon} alt="coin icon" width="30px" height="30px"></img>
        <h4 style={{ margin: "0px" }}>{coin.id}</h4>
        <h6 style={{ color: "rgb(120, 120, 120, .8)", margin: "0px" }}>
          {coin.symbol}
        </h6>
      </td>
      <td>
        $
        {coin.price.toFixed(2) > 0
          ? commas(coin.price.toFixed(2))
          : coin.price.toFixed(6)}
      </td>
      <td
        style={
          Number(coin.priceChange1h.toFixed(2)) >= 0
            ? { color: "rgb(60, 199, 113)" }
            : { color: "red" }
        }
      >
        {Number(coin.priceChange1h.toFixed(2)) > 0 ? "\u25B4" : "\u25BE"}
        {Math.abs(coin.priceChange1h.toFixed(2))}%
      </td>
      <td
        style={
          Number(coin.priceChange1d.toFixed(2)) >= 0
            ? { color: "rgb(60, 199, 113)" }
            : { color: "red" }
        }
      >
        {Number(coin.priceChange1d.toFixed(2)) > 0 ? "\u25B4" : "\u25BE"}
        {Math.abs(coin.priceChange1d.toFixed(2))}%
      </td>
      <td
        style={
          Number(coin.priceChange1w.toFixed(2)) >= 0
            ? { color: "rgb(60, 199, 113)" }
            : { color: "red" }
        }
      >
        {Number(coin.priceChange1w.toFixed(2)) > 0 ? "\u25B4" : "\u25BE"}
        {Math.abs(coin.priceChange1w.toFixed(2))}%
      </td>
      <td>${formatter(coin.marketCap.toFixed(2))}</td>
      <td>${formatter(coin.volume.toFixed(2))}</td>
      <td>
        {formatter(coin.availableSupply.toFixed(2))} {coin.symbol}
      </td>
      <td>
        {formatter(coin.totalSupply.toFixed(2))} {coin.symbol}
      </td>
    </tr>
  );
}
