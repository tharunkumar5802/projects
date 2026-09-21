import React from "react";

function CartModel({ closecart,cartItems,removeFromCart}) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 shadow-xl">
        <h2 className="text-xl font-bold text-indigo-600 mb-4">
          YOUR CART
        </h2>
    {cartItems.length>0?(
      <div>
        {cartItems.map((item)=>(
          <div key={item.id} className="flex justify-between items-center mb-2 border border-gold-300 rounded-lg p-4">
            <img src={item.image} alt={item.title} className="w-12 h-12 mr-4" />
            <div className="text-gray-700">{item.title}</div>
            <button onClick={()=>removeFromCart(item.id)} className="text-red-500 border border-red-400 p-3 ml-2 hover:underline font-semibold ">Remove</button>
          </div>
        ))}
      </div>
    ):( <p className="text-gray-60">Your Cart is empty</p> )}
        <button
          onClick={closecart}
          className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default CartModel;