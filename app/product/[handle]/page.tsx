import client from '@/client';
import ProductQuery from '@/queries/ProductQuery';
import { use } from 'react';

export default function Page({ params }: { params: { handle: string } }) {
  const { productByHandle: product } = use(
    client.request(ProductQuery, { handle: params.handle }),
  ) as {
    productByHandle: ShopifyProduct;
  };

  return (
    <div className="w-full">
      <main className="my-10 mx-auto max-w-4xl border-8 rounded-md p-10">
        <h3 className="mb-2 font-semibold">{product.title}</h3>

        <div className="text-sm">
          {product.variants.nodes.map((variant) => (
            <div key={variant.sku} className="border-b-2">
              {variant.title}
              <h4>
                {variant.sku}: {variant.price.amount}
              </h4>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
