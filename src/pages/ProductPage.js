import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { addToCart } from '../features/cartSlice'
import { addReview, deleteReview } from '../features/reviewsSlice'

import ProductData from '../data/ProductData'
import exchangeRates from '../data/ExchangeRates'

import { FaStar } from 'react-icons/fa'

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

  const reviews = useSelector((state) => state.reviews[product.id] || [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (rating === 0 || comment.trim() === '') {
      alert('Please provide a rating and a comment.')
      return
    }

    const newReview = {
      rating,
      comment,
      date: new Date().toISOString(),
    }

    dispatch(addReview({ productId: product.id, review: newReview }))

    setRating(0)
    setComment('')
  }

  const handleDelete = (index) => {
    dispatch(deleteReview({ productId: product.id, reviewIndex: index }))
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
          <div className="review-reviews">
            <h3>Reviews</h3>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="review-box">
                  <p>
                    <strong>Rating:</strong> {review.rating} ★
                  </p>
                  <p>{review.comment}</p>
                  <small>{new Date(review.date).toLocaleDateString()}</small>
                  <button
                    className="review-box-delete-btn"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p>No reviews yet. Be the first to leave a review!</p>
            )}
          </div>

          <h3>Leave a Review</h3>
          <form onSubmit={handleSubmit} className="review-form">
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
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
              placeholder="Write your review"
              className="review-textarea"
            />
            <button type="submit" className="review-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
