import React from 'react';
import {Link} from 'react-router-dom'
import data from '../data'
function HomeScreen(props){
  if (!data.products || data.products.length === 0) {
    return <div>No products available</div>; // Or a loading message
  }
    return <ul className="product">
    {
      data.products.map(product => (
        <li key={product.id}>
          <div className="product">
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-name">
              <Link to={'/product/'+ product._id} >{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews} reviews)
            </div>
          </div>
        </li>
      ))
    }
  </ul>
}
export default HomeScreen;