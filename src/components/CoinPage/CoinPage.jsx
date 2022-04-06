import React from 'react'
import './Coinpage.css'
import { useParams } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DOMPurify from 'dompurify';


const CoinPage = () => {
    const params = useParams()
    // console.log(params.CoinId.toLocaleLowerCase())
    const [coin, getCoin] = useState({})

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${params.CoinId.toLocaleLowerCase()}`)
        .then(res => {
            getCoin(res.data)
          // console.log(res.data)
        }).catch(error => console.log(error))
      }, [])


  return (
    <>
    <div className="coin-page">
        {/* <h1>{coin.id}</h1> */}
        <div className="coin-page-data">
            <div className="rank"><span># {coin.market_cap_rank}</span></div>
            <div className="coin-page-image"><img>{coin.image.small}</img></div>
            <div className="coin-page-name"><span>{coin.name}</span></div>
            <div className="coin-page-price"><span>{coin.market_data.current_price.usd}<small>2%</small></span></div>
            <div className="coin-page-volume"><span>{coin.total_volume}</span></div>
        </div>
        <div className="coin-page-infomation">
            <h2>Information:</h2>
        </div>
    </div>
    </>
  )
}

export default CoinPage