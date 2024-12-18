import React from 'react'
import { useDispatch } from 'react-redux'
import ProductData from '../data/ProductData'
import Card from './Card'
import { addToCart } from '../features/cartSlice'

function Catalogue() {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="wrapper">
      <div className="catalogue">
        {ProductData.map((product) => (
          <Card
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Catalogue
