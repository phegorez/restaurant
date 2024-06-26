import { ActionsType, CartType } from "@/types/types"
import { create } from "zustand"
import { persist } from "zustand/middleware";

const INITIAL_STATE = { 
    products: [],
    totalItems: 0,
    totalPrice: 0
}

export const useCartStore = create(persist<CartType & ActionsType>((set, get) => ({
    products: INITIAL_STATE.products,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    addtoCart(item) {
        const product = get().products
        const existingProduct = product.find((product) => product.id === item.id)

        if (existingProduct) {
            const updateProducts = product.map(product => product.id === existingProduct.id ? {
                ...item,
                quantity: item.quantity + product.quantity,
                price: item.price + product.price
            } : item
            );
        
        set((state) => ({
            products: updateProducts,
            totalItems:state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price
        }))

        } else {
            set((state) => ({
                products: [...state.products, item],
                totalItems: state.totalItems + item.quantity,
                totalPrice: state.totalPrice + item.price
            }));
        }

    },
    removeFormCart(item) {
        set((state) => ({
            products: state.products.filter((product) => product.id !== item.id),
            totalItems: state.totalItems - item.quantity,
            totalPrice: state.totalPrice - item.price
        }))
    },
}), { name: 'cart' }));