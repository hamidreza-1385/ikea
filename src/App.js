import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './pages/dashboard/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Eshterak from './pages/dashboard/Eshterak';
import HesabKarbary from './pages/dashboard/HesabKarbary';
import MizKar from './pages/dashboard/MizKar';
import Payamha from './pages/dashboard/Payamha';
import ListVazayef from './pages/dashboard/ListVazayef';
import Poshtibani from './pages/dashboard/Poshtibani';
import Didgah from './pages/dashboard/Didgah';
import { TaskProvider } from './data/dashbord/TaskContext';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';




function App() {
  return (
    <CartProvider>
    <Router basename='/ikea'>
      <TaskProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/log' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/eshterak' element={<Eshterak/>}></Route>
        <Route path="/hesabkarbary" element={<HesabKarbary />} />
        <Route path='/mizkar' element={<MizKar/>}/>
        <Route path='/payamha' element={<Payamha/>}/>
        <Route path="/listvazayef" element={<ListVazayef />} />
        <Route path='/poshtibani' element={<Poshtibani/>}/>
        <Route path='/didgah' element={<Didgah/>}/>
      </Routes>
      </TaskProvider>
    </Router>
    </CartProvider>
  );
}

export default App;
