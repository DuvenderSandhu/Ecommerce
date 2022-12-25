import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import More from './Components/More'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';
import Shop from './Components/Shop';
import { Provider } from 'react-redux';
import { store } from './Components/state/store';
import Cart from './Components/Cart';
import Orders from './Components/Orders';
import Payment from './Components/Payment';
function App() {
  return (
    <Router>
    <Provider store={store}>
    <Navbar/>
    <Routes>
    
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<Orders/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/more" element={<More/>} />
    </Routes>
  </Provider>
  </Router>

  );
}

export default App;
