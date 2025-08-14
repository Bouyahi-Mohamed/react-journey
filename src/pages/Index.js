import { useEffect,useState } from 'react';
import Header from '../components/Header-Amazon';
import ProductList from '../components/ProductList';
import ProductId from './ProductDetails';

export default function Index() {
  const [products, setProducts] = useState([]);
  const [btnId, setBtnId] = useState(0);


  function handleAddToCart(id) {
    setBtnId((prevBtnId) =>
      prevBtnId + 1
    );
    alert(`Product with ID ${id} added to cart!`);
  }

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
      <Header  btnId={btnId} handleAddToCart={handleAddToCart}/>
      <ProductList products={products} btnId={btnId} handleAddToCart={handleAddToCart} />
      
    </div>
  );
}

    

