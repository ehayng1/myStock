import React, { useState, useEffect } from "react";
import options from "../config";

export default function fetchStockInfo(symbol) {
  const [stockInfo, setStock] = React.useState([]);
  let stock = [];
  function fetchData(symbol) {
    fetch(
      "https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=" +
        symbol +
        "&region=US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        stock[0] = symbol;
        stock[1] = response.financialData.currentPrice.fmt;
        stock[2] = response.summaryDetail.previousClose.fmt;
        let percent = ((stock[1] - stock[2]) / stock[2]) * 100;
        stock[3] = Math.round(percent * 100) / 100;
        stock[4] = response.price.longName;
        stock[5] = response.price.shortName;
        stock[6] = response.summaryDetail.dayLow.fmt;
        stock[7] = response.summaryDetail.dayHigh.fmt;
        stock[8] = response.summaryDetail.open.fmt;
        stock[9] = response.summaryDetail.fiftyTwoWeekLow.fmt;
        stock[10] = response.summaryDetail.fiftyTwoWeekHigh.fmt;
        stock[11] = response.summaryDetail.volume.fmt;
        stock[12] = response.summaryDetail.marketCap.fmt;
        setStock(stock);
        console.log(stock);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchData(symbol);
  }, []);

  console.log("StockInfo: ", stockInfo);

  return stockInfo;
}
