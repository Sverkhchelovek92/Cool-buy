import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../features/cartSlice'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items)

  const { currentCurrency } = useSelector((state) => state.currency)

  const exchangeRates = {
    USD: 1,
    EUR: 0.9,
    RUB: 90,
  }

  const dispatch = useDispatch()

  const total = cartItems.reduce((sum, item) => {
    return (
      sum +
      (item.price * exchangeRates[currentCurrency]).toFixed(2) * item.quantity
    )
  }, 0)

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
                {item.name} -{' '}
                {(item.price * exchangeRates[currentCurrency]).toFixed(2)}{' '}
                {currentCurrency} x {item.quantity}
                <button onClick={() => handleRemove(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <p>
            Total: {total.toFixed(2)} {currentCurrency}{' '}
          </p>
        )}
        {cartItems.length > 0 && (
          <button onClick={handleClear}>Clear Cart</button>
        )}
      </div>
    </div>
  )
}

export default Cart
