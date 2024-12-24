import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from '../data/ProductData'

function ProductPage() {
  const { id } = useParams()
  const product = ProductData.find((item) => item.id === parseInt(id))

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
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductPage
