import ProductDetailClient from "../../../components/product/ProductDetailClient";

export default function ProductDetailPage({ params }) {
  return <ProductDetailClient slug={params.productId} />;
}
