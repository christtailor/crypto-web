import React from "react";
import "./Coinpage.css";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const CoinPage = () => {
  const params = useParams();
  const [coin, getCoin] = useState({});

  let cn_data =
    coin &&
    coin.market_data &&
    coin.market_data.price_change_percentage_1h_in_currency &&
    coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2);
  console.log(coin);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.CoinId.toLocaleLowerCase()}`
      )
      .then((res) => {
        getCoin(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="coin-page">
        <div className="coin-page-data">
          <div className="rank">
            <span># {coin && coin.market_cap_rank}</span>
          </div>
          <div className="coin-page-image">
            <img src={coin && coin.image && coin.image.small} />
          </div>
          <div className="coin-page-name">
            <span>{coin && coin.name}</span>
          </div>
          <div className="coin-page-price">
            <span>
              Price:{" "}
              {coin &&
                coin.market_data &&
                coin.market_data.current_price &&
                coin.market_data.current_price.usd.toLocaleString()}
            </span>
          </div>
          <div className="coin-page-percentage ">
            ATH:{" "}
            {cn_data < 1 ? (
              <span className="red_percent">
                {coin &&
                  coin.market_data &&
                  coin.market_data.price_change_percentage_1h_in_currency &&
                  coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                    2
                  )}
              </span>
            ) : (
              <span className="green_percent">
                {coin &&
                  coin.market_data &&
                  coin.market_data.price_change_percentage_1h_in_currency &&
                  coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                    2
                  )}
              </span>
            )}
          </div>
          <div className="coin-page-volume">
            Volume:{" "}
            <span>
              {coin &&
                coin.market_data &&
                coin.market_data.total_volume &&
                coin.market_data.total_volume.usd.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="coin-page-infomation">
          <h2>Information:</h2>
          <div
            className="page-infomation"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin && coin.description && coin.description.en
              ),
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default CoinPage;
