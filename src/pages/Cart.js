import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../features/cartSlice'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleClear = () => {
    dispatch(clearCart())
  }

  return (
    <div className="main">
      <div className="cart">
        <h2 className="cart-title">Your Cart:</h2>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                {item.name} - {item.price} x {item.quantity}
                <button onClick={() => handleRemove(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <button onClick={handleClear}>Clear Cart</button>
        )}
      </div>
    </div>
  )
}

export default Cart
