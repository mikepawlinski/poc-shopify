import Price from '@/components/Price';
import Product from '@/components/Product';
import Products from '@/components/Products';
import Title from '@/components/Title';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="w-full">
      <main className="my-10 mx-auto max-w-4xl border-8 rounded-md p-10">
        <Products>
          <Product id={params.id}>
            <Title />
            <Price />
          </Product>
        </Products>
      </main>
    </div>
  );
}
