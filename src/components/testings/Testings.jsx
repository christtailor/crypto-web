import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Testings = () => {
  const [calccoin, getCryptodata ] = useState([])
  const [inputValue, getInputValue] = useState(0)
  const [cryptoValue, getCryptoValue] = useState('bitcoin')
  const [currencyValue, getCurrencyValue] = useState('usd')
  
  // console.log(inputValue,cryptoValue,currencyValue,calccoin)
  
  
  
  
        const inputvalueChanged = e => {
          getInputValue(e.target.value)
        }
        const CryptovalueChanged = e => {
          getCryptoValue(e.target.value)
          const options = {
            method: 'GET',
            url: `https://api.coingecko.com/api/v3/coins/${cryptoValue}`,
    
          };
          useEffect(() => {
            axios.request(options)
            .then(res => {
                getCryptodata(res.data)
              console.log(res.data)
            }).catch(error => console.log(error))
          }, [])
        }
        const currencyvalueChanged = e => {
          getCurrencyValue(e.target.value)
        }
      //   const currency_price = coin && coin.market_data && coin.market_data.current_price && coin.market_data.current_price.currencyValue.toLocaleString() 
      //   console.log(currency_price)
      let current_price = calccoin && calccoin.market_data && calccoin.market_data.current_price && calccoin.market_data.current_price[`${currencyValue}`] * inputValue
      console.log(current_price)
      //   const Calculate = () =>{
  
      //   }
      // const options = {
      //   method: 'GET',
      //   url: `https://api.coingecko.com/api/v3/coins/${cryptoValue}`,

      // };

      // axios.request(options).then(function (response) {
      //   getCryptodata(response.data)
      //   console.log(response.data)
      // }).catch(function (error) {
      //   console.error(error);
      // });

    return (
      <>
          <div className="calculator">
          <input 
                 type="text"
                 onChange={inputvalueChanged}
              //    onChangeCapture={Calculate()}
            />
  
            <select name="crypto_currency" id="" onChange={CryptovalueChanged}>
                <option value="bitcoin" >Bitcoin</option>
                <option value="ethereum">ETH</option>
                <option value="tet">Tether</option>
            </select>
            <select name="currency" id="" onChange={currencyvalueChanged}>
                <option value="usd" >USD</option>
                <option value="inr">INR</option>
                <option value="pkr">PKR</option>
            </select>
  
            <span>{current_price}</span>
          </div>
      </>
    )
  }

export default Testings