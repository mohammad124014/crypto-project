import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getCoins } from "../service/api";
import Loader from "./Loader";
import styles from "./Landing.module.css";
import Coin from "./shared/Coin.js";

const Landing = ({ x }) => {
  const [dataCoins, setDataCoins] = useState([]);
  const [searchedCoin, setSearchedCoin] = useState("");
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const { isLoading } = useQuery(["getCoins"], () => getCoins(), {
    onSuccess: (data) => {
      setDataCoins(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleMoveTop = () => {
    window.scrollTo({ top: 0 });
  };

  //   Searched coins
  const searchHandler = (event) => {
    setSearchedCoin(event.target.value);
  };

  const arraySearchedCoins = dataCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchedCoin.toLowerCase())
  );

  return (
    <div className={styles.landing}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.search}>
            <input
              className={styles.search}
              type="text"
              value={searchedCoin}
              onChange={searchHandler}
              placeholder="search ..."
            />
          </div>
          <div className={styles.coins}>
            {arraySearchedCoins.map((coin) => (
              <Coin
                key={coin.id}
                price={coin.current_price}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                market_cap={coin.market_cap}
                price_change={coin.price_change_percentage_24h}
              />
            ))}
          </div>
        </div>
      )}
      <div
        onClick={() => handleMoveTop()}
        className={scrollTop > 800 ? styles.moveUp : styles.moveUpHidden}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </div>
    </div>
  );
};

export default Landing;
