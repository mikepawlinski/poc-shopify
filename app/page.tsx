import client from '@/client';
import ProductsList from '@/components/ProductsList';
import ProductsQuery from '@/queries/ProductsQuery';
import { use } from 'react';

export default function Home() {
  const { products } = use(client.request(ProductsQuery, { limit: 30 })) as {
    products: { edges: { node: ShopifyProduct }[] };
  };

  return (
    <div className="w-full">
      <main className="my-10 mx-auto max-w-4xl border-8 rounded-md p-10">
        <ProductsList products={products.edges.map((product) => product.node)} />
      </main>
    </div>
  );
}
