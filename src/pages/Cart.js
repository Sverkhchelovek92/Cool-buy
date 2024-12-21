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
      <div className="wrapper">
        <div className="cart">
          <h2 className="cart-title">Your Cart:</h2>
          {cartItems.length === 0 ? (
            <p className="cart-is-empty">Cart is empty</p>
          ) : (
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li className="cart-item" key={item.id}>
                  <div className="cart-item-img-block">
                    <img
                      src={require(`../data/img/${item.image}`)}
                      className="cart-item-img"
                      alt={item.name}
                    />
                  </div>
                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">
                      {(item.price * exchangeRates[currentCurrency]).toFixed(2)}{' '}
                      {currentCurrency}
                    </p>
                    <p className="cart-item-quantity">
                      Quantity: {item.quantity}
                    </p>
                    <button
                      className="cart-item-btn-delete"
                      onClick={() => handleRemove(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {cartItems.length > 0 && (
            <div className="cart-total-info">
              <h3 className="cart-total-price">
                Total: {total.toFixed(2)} {currentCurrency}{' '}
              </h3>
              <button className="cart-clear-btn" onClick={handleClear}>
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
