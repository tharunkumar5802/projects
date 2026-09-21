import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartModel from './components/CartModel'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const opencart=()=>{
    setIsCartOpen(true);
  }
  const closecart=()=>{
    setIsCartOpen(false);
  }
  const removeFromCart=(productId)=>{
    setCartItems(cartItems.filter((item)=>item.id !== productId));
  }

  return (
    <div className='bg-gray-200 min-h-screen'>
      <Navbar cartCount={cartItems.length} opencart={opencart}/>
      <ProductList cartItems={cartItems} setCartItems={setCartItems}/>
      {
        isCartOpen && (
          <CartModel cartItems={cartItems} closecart={closecart} removeFromCart={removeFromCart}/>
        )
      }
    </div>
  )
}

export default App
