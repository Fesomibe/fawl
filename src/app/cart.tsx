import { useCart } from "@/context/CartContext";
import { FlatList, Text, View } from "react-native";

export default function CartScreen() {
    const { cartItems } = useCart();

    return (
        <View>
            <Text>
                {cartItems.length} items in your Cart
            </Text>

            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.product.id}
                renderItem={({ item }) => (
                    <>
                        <Text>{item.product.name}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                    </>
                )}
            />
        </View>
    );
}