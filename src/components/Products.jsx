import React from "react";
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

export default function Products() {
  const {productsQuery: {isLoading, error, data: products},} = useProducts();
  return (
    <>
      {isLoading && <p>로딩중....</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
