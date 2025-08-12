import { useEffect,useState } from 'react';
import Header from './Header-Amazon';
import ProductList from './ProductList';
import ProductId from './ProductId';

export default function Index() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
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

  useEffect(() => {
    //fetch data
    fetch('http://localhost:5000/products/3fdfe8d6-9a15-4979-b459-585b0d0545b9')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setProduct(null);
      });
  }, []);

  return (
    <div>
      <Header  btnId={btnId} handleAddToCart={handleAddToCart}/>
      <ProductList products={products} btnId={btnId} handleAddToCart={handleAddToCart} />
      {/* {product && <ProductId product={product} />} */}
    </div>
  );
}

    

