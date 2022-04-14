import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Crypto from "./components/crypto/Crypto";
import Testings from "./components/testings/Testings";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import AllCoins from "./components/AllCoins/AllCoins";
import CoinPage from "./components/CoinPage/CoinPage";
import Footer from "./components/footer/Footer";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="crypto-app">
          <Navbar />
          
          <Routes>
            <Route path="/" element={[<Crypto />, <News />]}></Route>
            <Route path="/testings" element={<Testings />}></Route>
            <Route path="/allcoins" element={<AllCoins />}></Route>
            <Route path="/coin" element={<CoinPage />}></Route>
            <Route path="/coin/:CoinId" element={<CoinPage />}></Route>
            <Route path="/calculator" element={<Calculator />}></Route>
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
