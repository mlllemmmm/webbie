import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../data';

function ProductScreen() {
  const { id } = useParams();
  const product = data.products.find(x => x._id === id);

  // If no product is found, return a "Product not found" message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to results</Link>
      </div>
      <div className="details">
        <div className="details-content">
          <div className="details-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} Stars ({product.numReviews} Reviews)
              </li>
              <li>
                Price: <b>₹{product.price}</b>
              </li>
              <li>
                Description:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>
                Price: {product.price}
              </li>
              <li>
                Status: {product.status}
              </li>
              <li>
                Qty:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </li>
              <li>
                <button className="button">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;

