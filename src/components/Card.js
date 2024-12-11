import React from 'react'

function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <button className="card-btn">Buy</button>
    </div>
  )
}

export default Card
