import React from 'react'
import ProductData from '../data/ProductData'
import Card from './Card'

function Catalogue() {
  return (
    <div className="catalogue">
      {ProductData.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Catalogue
