'use client';

import React from 'react';
import { ProductsContext } from './Products';

export const ProductContext = React.createContext({} as { product?: ShopifyProduct });

const Product = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { products, getProduct } = React.useContext(ProductsContext);

  React.useEffect(() => {
    getProduct(id);
  }, []);

  console.log(products, id);

  return (
    <ProductContext.Provider value={{ product: products.find((product) => product.handle === id) }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Product;
