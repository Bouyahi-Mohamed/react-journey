import Header from './Header-Amazon';
import ProductList from './ProductList';
import products from '../../data/Produits.js';
export default function Index() {
  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
}
