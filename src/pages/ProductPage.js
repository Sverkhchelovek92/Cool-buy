import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductData from '../data/ProductData'
import exchangeRates from '../data/ExchangeRates'
import { addToCart } from '../features/cartSlice'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

function ProductPage() {
  const { id } = useParams()
  const product = ProductData.find((item) => item.id === parseInt(id))

  const { currentCurrency } = useSelector((state) => state.currency)

  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmit = () => {
    console.log({ rating, comment })
  }

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
              {(product.price * exchangeRates[currentCurrency]).toFixed(2)}{' '}
              {currentCurrency}
            </h3>
            <p>{product.description}</p>
            <div>
              <FaStar color={'#ffc107'} /> {product.rating}
            </div>
            <button
              className="card-btn"
              onClick={() => handleAddToCart(product)}
            >
              Buy
            </button>
          </div>
        </div>
        <div className="review-wrapper">
          <h3>Leave a Review</h3>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                style={{
                  color: star <= rating ? '#ffc107' : '#e4e5e9',
                }}
                className="star-btn"
              >
                ★
              </button>
            ))}
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
