import React from 'react'
import './crypto.css'
import '../../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'

const Crypto = () => {

  const [coins, getCryptodata ] = useState([])
  const [search, setSearch] = useState('')
  // let Cryptolist = []
  
//   const options = {
//     method: 'GET',
//     url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
//     headers: {
//       'accept': 'application/json',
//     }
//   };
  
//   axios.request(options).then(function (response) {
//     const data =  response.data
//     // console.log(data)
//     // data.forEach(element => {
//     //   // console.log(element['symbol'])
//     //   Cryptolist.push(


//     // element['symbol']

//     //   )
//     // });

// getCryptodata(data)
//   }
//   ).catch(function (error) {
//     console.error(error);
//   });

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(res => {
      getCryptodata(res.data)
      // console.log(res.data)
    }).catch(error => console.log(error))
  }, [])

const handleChange = e => {
  setSearch(e.target.value)
}

const filteredCoins = coins.filter(coin =>
 coin.name.toLowerCase().includes(search.toLowerCase()) 
  )
  return (
    <>
        <div className="crypto">
          <div className="heading">
          <h1>Trending Coins</h1> 
          {/* <div className="coin-search">
            <h1>Search A Coin</h1>
            <form>
              <input type="text"
              placeholder='Serach'
              className='coin-input'
              onChange={handleChange} />
            </form>
          </div> */}
          </div>

          <div className="cards">
            {coins.map(coin => {
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
              )
            })}
            {/* <div className="card">
              <div className="coin-info">
                <div className="image">
                  <img src="https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389" alt="" />
                </div>
                <div className="name-price">
                  <span>Bitcoin</span>
                  <span>$ 54,232</span>
                </div>
              </div>

              <div className="coin-data" >
               <div className="total-volm cn-data" >
                 <small>Total Volume</small>
                 <small>454,454,455</small>
               </div>
               <div className="market-cap cn-data" > 
                 <small>Market Capital</small>
                 <small>454,454,455</small>
               </div>
               <div className="24hr-high cn-data" >
                 <small>24 Hour High</small>
                 <small>454,454,455</small>
               </div>
              </div>
            </div> */}

            




       </div>
        </div>

    </>
  )
}

export default Crypto