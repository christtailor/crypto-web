import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './testings.css'


const Testings = () => {
  const [calccoin, getCryptodata ] = useState([])
  const [inputValue, getInputValue] = useState(0)
  const [cryptoValue, getCryptoValue] = useState('bitcoin')
  const [currencyValue, getCurrencyValue] = useState('usd')

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
              console.log(res.data)
            }).catch(error => console.log(error))
          }
          Fetchdata()
          }, [cryptoValue])

      let current_price = calccoin && calccoin.market_data && calccoin.market_data.current_price && calccoin.market_data.current_price[`${currencyValue}`] * inputValue
      console.log(current_price)
      
    return (
      <>
          <div className="calculator">

{/* 
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
  <td>25,639,943,671</td>
  <td>760,608,534,240</td>
    <td>40,660</td>
    <td>0.09</td>
    <td>0.09</td>

  </tr>
</tbody>
</table> */}
<table>
<thead>
<tr>
<th>IP</th>  
<th>Server FQDN</th>
  <th>Type</th>
  <th>OS</th>
  <th>Memory</th>
  <th>CPU</th>
  <th>Bind Type</th>
  <th>Exim Type</th>
  <th>Instance(AWS)</th>
  </tr>
</thead>
<tbody>
  <tr>
  <td>56.208.157.93</td>
  <td>filler</td>
    <td>AWS</td>
    <td>Ubuntu</td>
    <td>3840 MB</td>
    <td>2.60 GHz</td>
    <td>master</td>
    <td>master</td>
    <td>m3.medium</td>
  </tr>
</tbody>
</table>

          </div>
      </>
    )
  }

export default Testings