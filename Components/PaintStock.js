import fetchStockInfo from "./fetchStockInfo";
import StockCard from "./StockCard";

export default function PaintStock(symbol) {
  let stock = fetchStockInfo(symbol);

  return (
    <StockCard
      symbol={stock[0]}
      price={stock[1]}
      percent={stock[2]}
    ></StockCard>
  );
}
