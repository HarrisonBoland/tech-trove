import Stripe from "stripe";

export interface CartType {
  cart: any;
  product: ProductType | null;
  openModal: false;
  setOpenModal: any;
  setProduct: any;
  addItemToCart: any;
  removeItemFromCart: any;
  emptyCart: any;
}

export interface ProductType {
  name: string;
  description: string | null;
  price_id: string;
  cost: number | null;
  productInfo: Stripe.Product;
}
