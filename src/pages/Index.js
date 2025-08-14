import { useEffect,useState } from 'react';
import Header from '../components/Header-Amazon';
import ProductList from '../components/ProductList';

export default function Index() {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    // fetch data
    fetch('http://localhost:5000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setProducts([]);
      });
  }, []);

  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
}

    

