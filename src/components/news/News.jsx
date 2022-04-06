// https://cryptopanic.com/api/v1/posts/?auth_token=59708a6b05c1d75d491b817c73ed2d41ce5c7cae&filter=important
import React from 'react'
import './news.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Data = ({title,image,url}) => {
  return (
    <div className="crypto-news">
        <div className="news-image">
          <img src={image} alt="" />
        </div>
        <div className="news-title">
         <a href={url} target="_blank"><small>{title.slice(0,100)}</small></a>
        </div>
    </div>

  )
}

const News = () => {
  const [newsData, getNewsData ] = useState([])
// console.log(newsData)
  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
    params: {
      q: 'crypto news',
      pageNumber: '1',
      pageSize: '10',
      autoCorrect: 'true',
      withThumbnails: 'true',
      fromPublishedDate: 'null',
      toPublishedDate: 'null'
    },
    headers: {
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '57487d5c22msh9fd476153173200p1731f0jsneba23707f82b'
    }
  };

  
  useEffect(() => {
    axios.request(options)
    .then(res => {
      getNewsData(res.data['value'])
      // console.log(res.data)
    })
    .catch(error => console.log(error))
  }, [])
  return (
    <>
    <div className="news">
    <h1>News</h1>

    <div className="news-data">
    {newsData.map(coin => {
              return (
                <Data
                key={coin.id}
                title={coin.title}
                image={coin.image.thumbnail}
                url={coin.image.webpageUrl}
                />
              )
            })}
              </div>
    </div>
    </>
  )
}

export default News