import React, { useState, useEffect } from "react";
import options from "../config";
export default function fetchTrends() {
  useEffect(() => {
    const init = async () => {
      await getTrend();
    };
    init();
    console.log(popular, losers, gainers);
  }, []);

  const popular = [];
  const losers = [];
  const gainers = [];

  const getTrend = async () => {
    fetch(
      "https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/most_actives?start=0",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        popular.push(response.quotes[0].symbol);
        popular.push(response.quotes[1].symbol);
        popular.push(response.quotes[2].symbol);
        console.log(popular);
      })
      .catch((err) => console.error(err));

    await fetch(
      "https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/day_losers?start=0",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        losers.push(response.quotes[0].symbol);
        losers.push(response.quotes[1].symbol);
        losers.push(response.quotes[2].symbol);
        console.log(losers);
      })
      .catch((err) => console.error(err));

    await fetch(
      "https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/day_gainers?start=0",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        gainers.push(response.quotes[0].symbol);
        gainers.push(response.quotes[1].symbol);
        gainers.push(response.quotes[2].symbol);
        console.log(gainers);
      })
      .catch((err) => console.error(err));
  };
}
