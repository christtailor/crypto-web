import React from "react";
import "./news.css";
import { useState, useEffect } from "react";
import axios from "axios";


const Data = ({ title, image, url }) => {
  return (
    <div className="crypto-news">
      <div className="news-image">
        <img src={image} alt="" />
      </div>
      <div className="news-title">
        <a href={url} target="_blank">
          <small>{title.slice(0, 100)}</small>
        </a>
      </div>
    </div>
  );
};

const LoadingBar = () =>{
  return(
    <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
  )
}
// {loading?<LoadingBar />: loading}

const News = () => {
  const [loading, setLoading] = useState(true);
  const [newsData, getNewsData] = useState([]);
  const url = 'https://newsapi.org/v2/everything?' +
  'q=cryptocurrency&' +
  'from=2022-04-14&' +
  'sortBy=popularity&' +
  'apiKey=687711a854d1427a8099082fcabf5a34';

  useEffect(() => {
    axios
      .get(
        url
      )
      .then((res) => {
        setLoading(false)
        getNewsData(res.data.articles)
        console.log(res.data.articles)
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
      <div className="news">
        <h1>News</h1>
         {/* {loading?<LoadingBar />: loading} */}

        <div className="news-data">
          {newsData.map((coin) => {
            return (
              <Data
                key={coin.id}
                title={coin.title}
                image={coin.urlToImage}
                url={coin.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
