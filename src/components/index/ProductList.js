import '../../styles/pages/amazon.css'
import localproduct from '../../data/products.js'
export default function ProductList({ products = localproduct }) {
  let ProductItems = products.map((product) => {
    return (
      <div className="product-container" key={product.id}>
          <div className="product-image-container">
            <img className="product-image"
              src={require(`../../${product.image}`)} alt={product.name} />
          </div>

          <div className="product-name limit-text-to-2-lines">
            {product.name}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={require(`../../images/ratings/rating-${product.rating.stars * 10}.png`)} alt={`${product.rating.stars} stars`} />
            <div className="product-rating-count link-primary">
              {product.rating.count} 
            </div>
          </div>

          <div className="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
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
