import "../styles/pages/produit.css";
import localproduct from "../data/products.js";
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {

  const { id } = useParams();
  // Find the product by id
  const product = localproduct.find((prod) => prod.id === id);

  return (<div className="product-details-page">
    {/* start Close Button */}
    <Link to="/" className="back-button">
      <div className="close-button">
        <i class="fa-solid fa-circle-xmark fa-2xl"></i>
      </div>
    </Link>
    {/* end Close Button */}

    <div className="container" key={product.id}>
      <div className="product-image">
        <img src={require(`../${product.image}`)} alt={product.name} />
      </div>
      <div className="product-details">
        <img
          src={require(`../images/ratings/rating-${product.rating.stars * 10}.png`)}
          alt={`${product.rating.stars} stars`}
        />
        <h1>{product.name}</h1>

        <h2>${(product.priceCents / 100).toFixed(2)}</h2>
        <div className="product-description">
          <h3>Description:</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-rating-count">
          <div className="add-to-cart">
            <select className="quantity-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="button-primary"> Add to Cart </button>
          </div>
          <div className="review-count">{product.rating.count} reviews</div>
        </div>
      </div>
    </div>
   
  </div>);
}
