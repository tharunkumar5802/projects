import React from 'react'

function Navbar({ opencart,cartCount }) {
  return (
    <nav className='flex justify-between p-6 bg-blue-600 text-white items-center'>
        <h1 className='text-2xl font-bold'>B8-STORE</h1>
        <button onClick={opencart} className='bg-yellow-300 text-black px-2 py-2 rounded-lg'>CART:{cartCount}</button>
    </nav>
  )
}

export default Navbar