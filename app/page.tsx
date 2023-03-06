import client from '@/client';
import Product from '@/components/Product';
import ProductsQuery from '@/queries/ProductsQuery';
import { use } from 'react';

export default function Home() {
  const { products } = use(client.request(ProductsQuery, { limit: 30 })) as {
    products: { edges: { node: Product }[] };
  };

  return (
    <div className="w-full">
      <main className="flex flex-wrap flex-row my-10 mx-auto max-w-4xl border-8 rounded-md p-10">
        {products.edges.map((product) => (
          <Product product={product.node} key={product.node.id} />
        ))}
      </main>
    </div>
  );
}
