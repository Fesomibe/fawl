import { useCart } from "@/context/CartContext";
import { router } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function CartScreen() {
    const {
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    const subtotal = cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);

    const totalItems = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    if (cartItems.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>Your Cart</Text>

                <Text style={styles.emptyMessage}>
                    Your cart is empty.
                </Text>

                <Text style={styles.emptySubtext}>
                    Start exploring products you love.
                </Text>

                <Pressable
                    style={styles.continueButton}
                    onPress={() => router.push("/")}
                >
                    <Text style={styles.continueButtonText}>
                        Continue Shopping
                    </Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View>

            <Text>{totalItems} items in your Cart</Text>

            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.product.id}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Image
                            source={item.product.image}
                            style={styles.productImage}
                        />

                        <View style={styles.productInfo}>
                            <Text>{item.product.name}</Text>
                            <Text>${item.product.price.toFixed(2)}</Text>

                            <View style={styles.quantityContainer}>
                                <Pressable
                                    style={styles.quantityButton}
                                    onPress={() => decreaseQuantity(item.product.id)}
                                >
                                    <Text style={styles.quantityButtonText}>−</Text>
                                </Pressable>

                                <Text style={styles.quantityText}>
                                    {item.quantity}
                                </Text>

                                <Pressable
                                    style={styles.quantityButton}
                                    onPress={() => addToCart(item.product)}
                                >
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </Pressable>
                            </View>
                        </View>

                        <Pressable
                            onPress={() => removeFromCart(item.product.id)}
                        >
                            <Text>Remove</Text>
                        </Pressable>

                    </View>
                )}
            />

            <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: "row",
        padding: 12,
        marginBottom: 12,
    },

    productImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },

    productInfo: {
        marginLeft: 12,
        flex: 1,
    },

    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        gap: 12,
    },

    quantityButton: {
        width: 32,
        height: 32,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#D6C6A5",
        justifyContent: "center",
        alignItems: "center",
    },

    quantityButtonText: {
        fontSize: 20,
        fontWeight: "600",
    },

    quantityText: {
        fontSize: 16,
        fontWeight: "600",
    },

    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },

    emptyTitle: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 24,
    },

    emptyMessage: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 8,
    },

    emptySubtext: {
        fontSize: 16,
        marginBottom: 24,
    },

    continueButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        backgroundColor: "#D6C6A5",
    },

    continueButtonText: {
        fontSize: 16,
        fontWeight: "600",
    },

});