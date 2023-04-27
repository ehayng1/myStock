import options from "../config";
export default function fetchPriceData(Symbol, Range, Interval) {
  // const [priceData, setPriceData] = React.useState([]);
  let price = [];
  let Xvalues = [];
  let Yvalues = [];

  fetch(
    "https://yh-finance.p.rapidapi.com/stock/v3/get-chart?interval=" +
      Interval +
      "&symbol=" +
      Symbol +
      "&range=" +
      Range +
      "&region=US&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let res = response.chart.result[0];
      yVal = res.indicators.quote[0].close;
      xVal = res.timestamp;
      for (let key in yVal) {
        Yvalues.push(yVal[key]);
      }
      for (let key in xVal) {
        Xvalues.push(xVal[key]);
      }
      // console.log("X: ", Xvalues);
      // console.log("Y: ", Yvalues);
    })
    .catch((err) => console.error(err));

  price = [Xvalues, Yvalues];
  // console.log(price);
  return price;
}
