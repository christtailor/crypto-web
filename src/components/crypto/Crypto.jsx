import React from "react";
import "./crypto.css";
import "../../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

const Crypto = () => {

 const userScroll = () => {
  document.querySelector('.cards').mousewheel(function(event, delta) {
 
    this.scrollLeft -= (delta * 30);
  
    event.preventDefault();

 });
 }
  const [coins, getCryptodata] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        getCryptodata(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="crypto">
        <div className="heading">
          <h1>Trending Coins</h1>
        </div>

        <div className="cards">
          {coins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                names={coin.name}
                price={coin.current_price}
                image={coin.image}
                volume={coin.total_volume}
                capital={coin.market_cap}
                high24={coin.high_24h}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Crypto;
