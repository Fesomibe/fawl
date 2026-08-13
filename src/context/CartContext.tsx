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
    decreaseQuantity: (productId: string) => void;

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

    const decreaseQuantity = (productId: string) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.product.id === productId
            );

            if (!existingItem) {
                return currentItems;
            }

            if (existingItem.quantity === 1) {
                return currentItems.filter(
                    (item) => item.product.id !== productId
                );
            }

            return currentItems.map((item) =>
                item.product.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                    : item
            );
        });
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                decreaseQuantity,
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