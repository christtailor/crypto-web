import React from "react";
import "./testings.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Testings = () => {
  const url = 'https://newsapi.org/v2/everything?' +
  'q=cryptocurrency&stocks' +
  'from=2022-04-14&' +
  'sortBy=popularity&' +
  'apiKey=687711a854d1427a8099082fcabf5a34';

  useEffect(() => {
    axios
      .get(
        url
      )
      .then((res) => {
        console.log(res.data.articles)
      })
      .catch((error) => console.log(error));
  }, []);
  

  return (
    <>
    <div className="testings">
      Testings Area
    </div>
    </>
  );
};

export default Testings;
