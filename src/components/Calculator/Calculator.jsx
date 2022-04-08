import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './calculator.css'

const Calculator = () => {
const [calccoin, getCryptodata ] = useState([])
const [inputValue, getInputValue] = useState(0)
const [cryptoValue, getCryptoValue] = useState('btc')
const [currencyValue, getCurrencyValue] = useState('usd')
console.log(calccoin)

const inputvalueChanged = e => {
  getInputValue(e.target.value)
}
const cryptovalueChanged = e => {
  getCryptoValue(e.target.value)
}
const currencyvalueChanged = e => {
  getCurrencyValue(e.target.value)
}

// console.log(inputValue,cryptoValue,currencyValue,calccoin)
const options = {
  method: 'GET',
  url: 'https://evaluate-expression.p.rapidapi.com/',
  params: {expression: `${inputValue} ${cryptoValue} in ${currencyValue}`},
  headers: {
    'X-RapidAPI-Host': 'evaluate-expression.p.rapidapi.com',
    'X-RapidAPI-Key': '57487d5c22msh9fd476153173200p1731f0jsneba23707f82b'
  }
};


  axios.request(options).then(function (response) {
    getCryptodata(response.data)
  }).catch(function (error) {
    console.error(error);
  });


  return (
    <>
        <div className="calculator">

        <input 
               type="text"
               onChange={inputvalueChanged}
            //    onChangeCapture={Calculate()}
          />
          <div className="select-currency">
          <select name="crypto_currency" id=""  onChangeCapture={cryptovalueChanged}>
              <option value="btc" >Bitcoin</option>
              <option value="eth">ETH</option>
              <option value="tet">Tether</option>
          </select>
          <select name="currency" id="" onChange={currencyvalueChanged} >
              <option value="usd" >USD</option>
              <option value="inr">INR</option>
              <option value="pkr">PKR</option>
          </select>
          </div>

          <span>{calccoin}</span>
        </div>
    </>
  )
}

export default Calculator