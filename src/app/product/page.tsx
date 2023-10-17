"use client";
import useCart from "@/store/store";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function ProductPage(params: Params) {
  const { searchParams } = params;
  const product = useCart((state) => state.product);

  if (!product?.name) {
    window.location.href = "/";
  }

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 md:shadow">
          <img
            src={product?.productInfo.images[0]}
            alt={product?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex text-xl items-center justify-between md:flex-col md:items-start">
            <h3>{product?.name}</h3>
            <p className="md:text-base">
              {product?.cost ? `$${product?.cost / 100}` : ""}
            </p>
          </div>
          <p className="text-sm">{product?.description}</p>
        </div>
      </div>
    </div>
  );
}
