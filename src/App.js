
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {NavBar} from './components/NavBar.js';
import {Footer} from './components/Footer.js';
import {Shop} from './pages/shop/shop.js';
import {Cart} from './pages/cart/cart.js';
import {Checkout} from './pages/checkout/checkout.js';

import { PizzaContextProvider } from './context/pizza-context.js';

export default function App() {

return (
  <PizzaContextProvider>
      <Router>
        <NavBar />
        <div className="App">
        <Routes>
          <Route path="/react-pizza-app" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </div>
      </Router>
      <Footer />
  </PizzaContextProvider>
);
}