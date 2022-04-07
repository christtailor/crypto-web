import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Calculator = () => {
const [calccoin, getCryptodata ] = useState([])
const [inputValue, getInputValue] = useState(0)
const [cryptoValue, getCryptoValue] = useState(null)
const [currencyValue, getCurrencyValue] = useState('usd')

console.log(inputValue,cryptoValue,currencyValue,calccoin)




      const inputvalueChanged = e => {
        getInputValue(e.target.value)
      }
      const cryptovalueChanged = e => {
        getCryptoValue(e.target.value)
      }
      const currencyvalueChanged = e => {
        //   var jdj = coin && coin.market_data && coin.market_data.current_price && coin.market_data.current_price
        // const currency_price = jdj[`${currencyValue}`]
        // console.log(currency_price)
        getCurrencyValue(e.target.value)
      }
    //   const currency_price = coin && coin.market_data && coin.market_data.current_price && coin.market_data.current_price.currencyValue.toLocaleString() 
    //   console.log(currency_price)
    let current_price = calccoin && calccoin.market_data && calccoin.market_data.current_price && calccoin.market_data.current_price[`${currencyValue}`] * inputValue
    console.log(current_price)
    //   const Calculate = () =>{

    //   }
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoValue}`)
        .then(res => {
            getCryptodata(res.data)
          console.log(res.data)
        }).catch(error => console.log(error))
      }, [])
  return (
    <>
        <div className="calculator">
        <input 
               type="text"
               onChange={inputvalueChanged}
            //    onChangeCapture={Calculate()}
          />

          <select name="crypto_currency" id="" onChangeCapture={cryptovalueChanged}>
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

export default Calculator