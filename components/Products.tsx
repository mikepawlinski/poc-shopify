'use client';

import React from 'react';
import client from '@/client';
import ProductQuery from '@/queries/ProductQuery';

type T = {
  products: ShopifyProduct[];
  getProduct: (id: string) => Promise<ShopifyProduct | null>;
};

export const ProductsContext = React.createContext<T>({} as T);

const fetchProduct = (id: string) =>
  client.request<{ productByHandle: ShopifyProduct }>(ProductQuery, { handle: id });

const Products = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = React.useState<ShopifyProduct[]>([]);

  const getProduct = async (id: string) => {
    const found = products.find((product) => product.handle === id);

    if (found) {
      return found;
    }

    try {
      const { productByHandle: product } = await fetchProduct(id);

      setProducts([...products, product]);

      return product;
    } catch (e) {
      return null;
    }
  };

  return (
    <ProductsContext.Provider value={{ products, getProduct }}>{children}</ProductsContext.Provider>
  );
};

export default Products;
