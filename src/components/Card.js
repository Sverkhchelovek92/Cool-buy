import React from 'react'

function Card({ product }) {
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
        <strong>Price:</strong> ${product.price}
      </p>
      <button className="card-btn">Buy</button>
    </div>
  )
}

export default Card
