import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

import { Product } from "@/types/product";

type CartContextType = {
    cartItems: Product[];
    addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(
    undefined
);

type CartProviderProps = {
    children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCartItems((currentItems) => [
            ...currentItems,
            product,
        ]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside a CartProvider"
        );
    }

    return context;
}