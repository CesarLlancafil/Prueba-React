import { useState, useEffect } from 'react';
import { getProducts, Product } from '../api/base.api';
import Loading from './Loading';
import Error from './Error';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ascending, setAscending] = useState(false);

//Función useEffect para obtener productos, ordenarlos y guardarlos.
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts();
        const sortedProducts = data.sort((a: Product, b: Product) => a.price - b.price);
        setProducts(data);
        setLoading(false);
      } catch (error : any) {
        setError(error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  //Función toggle para alternar el orden de los productos
  const toggleSortOrder = () => {
    setAscending(!ascending);
    setProducts((prevProducts) =>
      prevProducts.sort((a, b) =>
        ascending ? a.price - b.price : b.price - a.price
      )
    );
  };

  return (
    <div>
        {loading ? (<Loading />)
        : (
        <>{error ? (<Error />)
        :(<>
        <button onClick={toggleSortOrder}>
            Ordenar {!ascending ? 'Descendente' : 'Ascendente'}
        </button>
        <ul style={{textAlign: 'left'}}>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - <strong>${product.price}</strong>
          </li>
        ))}
      </ul></>)
        }</>)}    
    </div>
  );
};

export default ProductList;