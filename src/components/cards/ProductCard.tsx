"use client";
import useCart from "@/store/store";
import { useRouter } from "next/navigation";
import Stripe from "stripe";

export default function ProductCard({ product }: { product: Stripe.Price }) {
  const { id: price_id, unit_amount: cost } = product;
  const productInfo: Stripe.Product = product.product as Stripe.Product;
  const { name, description, images } = productInfo;

  const setProduct = useCart((state) => state.setProduct);

  const router = useRouter();

  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo,
    };
    setProduct(newProduct);
    router.push("/product?price_id=" + price_id);
  }

  return (
    <div
      onClick={onProductClick}
      className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer"
    >
      <img src={images[0]} alt={name} className="w-full h-full object-cover" />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3>{name}</h3>
          <p>{cost ? `$${cost / 100}` : ""}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
