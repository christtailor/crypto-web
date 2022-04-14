import React from "react";

const Coin = ({ image, names, price, volume, capital, high24 }) => {
  return (
    <div>
      <a href={"coin/" + names} target="__blank" className="redirect-card">
        <div className="card">
          <div className="coin-info">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="name-price">
              <span>{names}</span>
              <span>$ {price.toLocaleString()}</span>
            </div>
          </div>

          <div className="coin-data">
            <div className="total-volm cn-data">
              <small>Total Volume</small>
              <small>{volume.toLocaleString()}</small>
            </div>
            <div className="market-cap cn-data">
              <small>Market Capital</small>
              <small>{capital.toLocaleString()}</small>
            </div>
            <div className="24hr-high cn-data">
              <small>24 Hour High</small>
              <small>{high24.toLocaleString()}</small>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Coin;
