import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [],
  product: {},

  setProduct: (params: any) => {
    const { product } = params;
    set((state: any) => {
      return {
        ...state,
        product: product,
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
