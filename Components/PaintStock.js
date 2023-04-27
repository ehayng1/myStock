import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";
import fetchStockInfo from "./fetchStockInfo";
import options from "../config";

export default function PaintStock(prop) {
  let stockInfo = fetchStockInfo(prop.symbol);

  return (
    <StockCard
      nav={prop.nav}
      symbol={stockInfo[0]}
      price={stockInfo[1]}
      percent={stockInfo[3]}
    ></StockCard>
  );
}
