import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductData from '../data/ProductData'

function ProductPage() {
  const { id } = useParams()
  const product = ProductData.find((item) => item.id === parseInt(id))

  //
  const { currentCurrency } = useSelector((state) => state.currency)

  const exchangeRates = {
    USD: 1,
    EUR: 0.9,
    RUB: 90,
  }

  //

  if (!product) {
    return (
      <div className="main">
        <div className="wrapper">Товар не найден</div>
      </div>
    )
  }

  return (
    <div className="main">
      <div className="wrapper">
        <div className="product-wrapper">
          <div className="product-img-block">
            <img
              src={require(`../data/img/${product.image}`)}
              className="product-img-img"
              alt={product.name}
            />
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <h3>
              {(product.price * exchangeRates[currentCurrency]).toFixed(2)}
              {currentCurrency}
            </h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
