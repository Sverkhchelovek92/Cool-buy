import React from 'react'
import { useSelector } from 'react-redux'

function Card({ product }) {
  const { currentCurrency } = useSelector((state) => state.currency)

  const exchangeRates = {
    USD: 1,
    EUR: 0.9,
    RUB: 90,
  }

  const convertedPrice = (
    product.price * exchangeRates[currentCurrency]
  ).toFixed(2)

  return (
    <div className="card">
      <div className="card-img-block">
        <img
          src={require(`../data/img/${product.image}`)}
          alt={product.name}
          className="card-img"
        />
      </div>

      <h3 className="card-name">{product.name}</h3>
      <p className="card-description">{product.description}</p>
      <p className="card-price">
        <strong>Price:</strong> {convertedPrice} {currentCurrency}
      </p>
      <button className="card-btn">Buy</button>
    </div>
  )
}

export default Card
