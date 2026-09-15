import ProductDetailClient from '@/components/product/ProductDetailClient';

export async function generateStaticParams() {
  return [
    { productId: '1' },
    { productId: '2' },
    { productId: '3' },
    { productId: '4' },
    { productId: 'maxera-pro' },
    { productId: 'maxera-air' }
  ];
}

export default function ProductDetailPage({ params }) {
  return <ProductDetailClient productId={params.productId} />;
}
