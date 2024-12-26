import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import exchangeRates from '../data/ExchangeRates'

function Card({ product, onAddToCart }) {
  const { currentCurrency } = useSelector((state) => state.currency)

  const convertedPrice = (
    product.price * exchangeRates[currentCurrency]
  ).toFixed(2)

  return (
    <div className="card">
      <div className="card-img-block">
        <Link to={`/product/${product.id}`}>
          <img
            src={require(`../data/img/${product.image}`)}
            alt={product.name}
            className="card-img"
          />
        </Link>
      </div>

      <h3 className="card-name">
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <p className="card-description">{product.description}</p>
      <p className="card-price">
        <strong>Price:</strong> {convertedPrice} {currentCurrency}
      </p>
      <button className="card-btn" onClick={() => onAddToCart(product)}>
        Buy
      </button>
    </div>
  )
}

export default Card
