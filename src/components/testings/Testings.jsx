import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Testings = () => {
const [cryptoData, getCryptodata ] = useState(false)
const [cryptoData_Price, getcryptoData_Price ] = useState(false)
const [cryptoDat, getcryptoDat ] = useState(null)
let pricevalue = null;

// console.log(cryptoDat)

const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
  headers: {
    'accept': 'application/json',
  }
};

axios.request(options).then(function (response) {

    // {[...Array(10)].map((e, i) => {
    //     // console.log(response.data['data'][i]['name'])
    //     const data =  [response.data[i]]
    //     console.log(data)
    //   })}
//   getCryptodata(response.data['data'][0]['name'])
//   getcryptoData_Price(response.data['data'][909]['price_usd'])
//   console.log(response.data['data'][0]['name'])
}).catch(function (error) {
	console.error(error);
});


// Serach  Bar

// 




  return (
    <>
<h2>Hello</h2>
    </>
  )
}

export default Testings