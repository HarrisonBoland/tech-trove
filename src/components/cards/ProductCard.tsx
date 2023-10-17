"use client";
import useCart from "@/store/store";
import { useRouter } from "next/navigation";

export default function ProductCard(product: any) {
  const { id, unit_amount } = product.product;
  const { images, name, description } = product.product.product;

  const router = useRouter();

  function onProductClick() {
    router.push("/product?price_id=" + id);
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
          <p>${unit_amount / 100}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
