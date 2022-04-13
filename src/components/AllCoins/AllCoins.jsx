import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './allcoins.css'

const AllCoins = () => {
    const [Allcoins, getCoinData ] = useState([])
    const [search, setSearch] = useState('')

    const Coins = ({image, names, price, volume, capital, high24, rank, low24, percent24}) => {
      
        return (
          <div className='allCoins'>
            <a href={"coin/"+names} target="__blank" className='redirect-card'>
            <div className="all-card">
                <div className="all-cn-rank">
                  <small>Rank</small>
                  <span>{rank}</span>
                </div>
                    <div className="all-cn-info">
                      <div className="image">
                        <img src={image} alt="" />
                      </div>
                      <div className="all-cn-name-price">
                        <span>{names}</span>
                        <span>$ {price.toLocaleString()}</span>
                      </div>
                    </div>
{/*       
                    <div className="all-coin-data" >
                     <div className="total-volm all-cn-data" >
                       <small>Total Volume</small>
                       <small>{volume.toLocaleString()}</small>
                     </div>
                     <div className="market-cap all-cn-data" > 
                       <small>Market Capital</small>
                       <small>{capital.toLocaleString()}</small>
                     </div>
                     <div className="hr24-high all-cn-data" >
                       <small>24 Hour High</small>
                       <small>{high24.toLocaleString()}</small>
                     </div>
                     <div className="hr24-low all-cn-data" >
                       <small>24 Hour Low</small>
                       <small>{low24.toLocaleString()}</small>
                     </div>
                     <div className="hr24-low all-cn-data" >
                       <small>24 Percent Change</small>
                       <small>{percent24.toLocaleString()}</small>
                     </div>
                    </div> */}
                                      <table>
          <thead>
<tr>
<th>Total Volume</th>  
<th>Market Capital</th>
  <th>24 Hour High</th>
  <th>24 Hour Low</th>
  <th>24 Percent Change</th>
  </tr>
</thead>
<tbody>
  <tr>
  <td>{volume.toLocaleString()}</td>
  <td>{capital.toLocaleString()}</td>
    <td>{high24.toLocaleString()}</td>
    <td>{low24.toLocaleString()}</td>
    <td>{percent24.toLocaleString()}</td>

  </tr>
</tbody>
</table>
                  </div>
            </a>
            
          </div>
        )
      }


    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false')
        .then(res => {
            getCoinData(res.data)
          // console.log(res.data)
        }).catch(error => console.log(error))
      }, [])

    const handleChange = e => {
        setSearch(e.target.value)
      }
      
      const filteredCoins = Allcoins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
         )
         return (
           <>
               <div className="cryptos">
                 <div className="heading">
                 <div className="coin-search">
                   <h2>Search A Coin</h2>
                   <form>
                     <input type="text"
                     placeholder='Search'
                     className='coin-input'
                     onChange={handleChange} />
                   </form>
                 </div>
                 </div>
       
                 <div className="all-cards">
                   {filteredCoins.map(coins => {
                     return (
                       <Coins
                       key={coins.id}
                       names={coins.name}
                       price={coins.current_price}
                       image={coins.image}
                       volume={coins.total_volume}
                       capital={coins.market_cap}
                       high24={coins.high_24h}
                       low24={coins.low_24h}
                       rank={coins.market_cap_rank}
                       percent24={coins.price_change_percentage_24h.toFixed(2)}
                       />
                       
                     )
                   })}
                 
              </div>
               </div>
    </>
  )
}

export default AllCoins