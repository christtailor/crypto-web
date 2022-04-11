import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './calculator.css'

const Calculator = () => {
  const [calccoin, getCryptodata ] = useState([])
  const [inputValue, getInputValue] = useState(1)
  const [cryptoValue, getCryptoValue] = useState('bitcoin')
  const [currencyValue, getCurrencyValue] = useState('usd')
  const [currentPrice, getcurrentPrice] = useState('usd')

        const inputvalueChanged = e => {
          getInputValue(e.target.value)
        }
        const CryptovalueChanged = e => {
          getCryptoValue(e.target.value)
           
        }
        const currencyvalueChanged = e => {
          getCurrencyValue(e.target.value)
        }
        const options = {
          method: 'GET',
          url: `https://api.coingecko.com/api/v3/coins/${cryptoValue}`,
  }
        useEffect(() => {
          async function Fetchdata() {
             axios.request(options)
            .then(res => {
                getCryptodata(res.data)
            }).catch(error => console.log(error))
          }
          Fetchdata()
          }, [cryptoValue])

      let current_price = (calccoin && calccoin.market_data && calccoin.market_data.current_price && calccoin.market_data.current_price[`${currencyValue}`] * inputValue)

      if (currencyValue === "usd") {
        current_price = `$${current_price}`
      }
      else if (currencyValue === "inr") {
        current_price = `₹${current_price}`
      } else {
        current_price = `€${current_price}`
      }
      
    return (
      <>
          <div className="calculator">
          <input 
                 type="text"
                 onChange={inputvalueChanged}
            />
  <div className="select-currency">
  <select name="crypto_currency" id="" onChange={CryptovalueChanged}>
                <option value="bitcoin" >Bitcoin</option>
                <option value="ethereum">ETH</option>
                <option value="tether">Tether</option>
                <option value="solana">Solana</option>
                <option value="cardano">Cardano</option>
            </select>
            <select name="currency" id="" onChange={currencyvalueChanged}>
                <option value="usd" >USD</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
            </select>
  </div>

  
            <span>{current_price}</span>
          </div>
      </>
    )
  }

export default Calculator