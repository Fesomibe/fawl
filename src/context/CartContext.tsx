import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

import { Product } from "@/types/product";

type CartItem = {
    product: Product;
    quantity: number;
};

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(
    undefined
);

type CartProviderProps = {
    children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.product.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    product,
                    quantity: 1,
                },
            ];
        });
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