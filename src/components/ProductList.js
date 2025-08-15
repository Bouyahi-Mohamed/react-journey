import '../styles/pages/index.css'
import { useState } from 'react';
import localproduct from '../data/products.js'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import nbCartContext from '../context/contextProduit';
export default function ProductList({ products = localproduct }) {
  const {nbCart, setNbCart} = useContext(nbCartContext);

  let ProductItems = products.map((product) => {
    return (
      <div className="product-container" key={product.id}>
        <Link to={`/product/${product.id}`}>
          <div className="product-image-container">
            <img className="product-image"
              src={require(`../${product.image}`)} alt={product.name} />
          </div>
        </Link>
          <div className="product-name limit-text-to-2-lines">
            {product.name}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={require(`../images/ratings/rating-${product.rating.stars * 10}.png`)} alt={`${product.rating.stars} stars`} />
            <div className="product-rating-count link-primary">
              {product.rating.count} 
            </div>
          </div>

          <div className="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src={require("../images/icons/checkmark.png")} alt="Added to cart" />
            Added
          </div>
        
          <button className="add-to-cart-button button-primary"
          onClick={() => {
            setNbCart((e) => e + 1);
          }}>
            Add to Cart
          </button>
        </div>
    );
  });

  return (
    <div className="main">
      <div className="products-grid">
        {ProductItems}
      </div>
    </div>
  );
}
