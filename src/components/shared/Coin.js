import React from "react";
import styles from "./Coin.module.css";

const Coin = ({ name, symbol, image, price, market_cap, price_change }) => {
  return (
    <div className={styles.coin}>
      <img src={image} alt="image_coin" />
      <h1>{name}</h1>
      <p className={styles.d}>{symbol.toUpperCase()}</p>
      <p>$ {price.toLocaleString()}</p>
      <p
        className={
          price_change > 0 ? styles.greenChangePercent : styles.redChangePercent
        }
      >
        {price_change?.toFixed(2)}
      </p>
      <p className={styles.market_cap}>$ {market_cap.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
