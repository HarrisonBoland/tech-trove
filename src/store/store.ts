import { CartType, ProductType } from "@/types/modelTypes";
import { create } from "zustand";

const useCart = create<CartType>((set, get) => ({
  cart: [],
  product: null,

  openModal: false,

  setOpenModal: () => {
    set((state: any) => {
      return {
        ...state,
        openModal: !state.openModal,
      };
    });
  },

  setProduct: (newProduct: ProductType) => {
    set((state: any) => {
      return {
        ...state,
        product: newProduct,
      };
    });
  },

  addItemToCart: (params: any) => {
    const { newItem } = params;
    set((state: any) => {
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    });
  },

  removeItemFromCart: (params: any) => {
    const { itemIndex } = params;
    set((state: any) => {
      return {
        ...state,
        cart: state.cart.filter((item: any, index: any) => index !== itemIndex),
      };
    });
  },

  emptyCart: () => {
    set((state: any) => {
      return {
        ...state,
        cart: [],
      };
    });
  },
}));

export default useCart;
