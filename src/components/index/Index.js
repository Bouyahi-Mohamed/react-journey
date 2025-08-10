import Header from './Header-Amazon';
import ProductList from './ProductList';
import { useEffect,useState } from 'react';
export default function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch data
    fetch('https://supersimplebackend.dev/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
}
