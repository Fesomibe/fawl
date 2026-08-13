import { useCart } from "@/context/CartContext";
import { FlatList, Pressable, Text, View } from "react-native";

export default function CartScreen() {
    const {
        cartItems,
        addToCart,
        decreaseQuantity,
    } = useCart();

    const subtotal = cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);

    return (
        <View>
            <Text>
                {cartItems.length} items in your Cart
            </Text>

            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.product.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.product.name}</Text>
                        <Text>${item.product.price.toFixed(2)}</Text>

                        <View>
                            <Pressable
                                onPress={() =>
                                    decreaseQuantity(item.product.id)
                                }
                            >
                                <Text>-</Text>
                            </Pressable>

                            <Text>{item.quantity}</Text>

                            <Pressable
                                onPress={() => addToCart(item.product)}
                            >
                                <Text>+</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            />

            <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
        </View>
    );
}