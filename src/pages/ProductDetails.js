import "../styles/pages/produit.css";
export default function ProductId({ product }) {
  return (
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
  );
}
