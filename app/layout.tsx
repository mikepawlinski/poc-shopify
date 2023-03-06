import './globals.css';

export const metadata = {
  title: 'Shopify POC',
  description: 'This is a Shopify POC that renders product data with React (NextJS)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
