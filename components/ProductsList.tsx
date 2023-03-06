import Link from 'next/link';

const ProductsList = ({ products }: { products: ShopifyProduct[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          className="flex flex-col h-40 border-2 rounded-lg p-4 items-stretch justify-between"
          key={product.id}
        >
          <h3 className="mb-2 font-semibold">{product.title}</h3>

          <div className="flex gap-2">
            <Link
              className="border-2 rounded-lg py-1 px-2 hover:underline"
              href={`/product/${product.handle}`}
            >
              server side
            </Link>
            <Link
              className="border-2 rounded-lg py-1 px-2 hover:underline"
              href={`/clientProduct/${product.handle}`}
            >
              client side
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
