import { Pressable, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

export default function ProductDetailsScreen() {
    const { id } = useLocalSearchParams();
    const { addToCart } = useCart();

    const {
        favorites,
        addToFavorites,
        removeFromFavorites,
    } = useFavorites();

    const product = products.find(
        (product) => product.id === id
    );

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Product not found.</Text>
            </View>
        );
    }

    const isFavorite = favorites.some(
        (item) => item.id === product.id
    );

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{product.name}</Text>

            <Text style={styles.category}>
                {product.category}
            </Text>

            <Text style={styles.price}>
                ${product.price}
            </Text>

            <Text style={styles.description}>
                {product.description}
            </Text>

            <Pressable
                style={styles.addButton}
                onPress={() => addToCart(product)}
            >
                <Text style={styles.addButtonText}>
                    Add to Cart
                </Text>
            </Pressable>

            <Pressable
                style={styles.favoriteButton}
                onPress={() =>
                    isFavorite
                        ? removeFromFavorites(product.id)
                        : addToFavorites(product)
                }
            >
                <Text style={styles.favoriteButtonText}>
                    {isFavorite
                        ? "♥ Remove from Favorites"
                        : "♡ Add to Favorites"}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },

    name: {
        fontSize: 28,
        fontWeight: "bold",
    },

    category: {
        fontSize: 16,
        marginTop: 8,
    },

    price: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 8,
    },

    description: {
        fontSize: 16,
        marginTop: 20,
    },

    addButton: {
        marginTop: 30,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#000000",
        alignItems: "center",
    },

    addButtonText: {
        color: "#D6C6A5",
        fontSize: 16,
        fontWeight: "600",
    },

    favoriteButton: {
        marginTop: 12,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#D6C6A5",
        alignItems: "center",
    },

    favoriteButtonText: {
        fontSize: 16,
        fontWeight: "600",
    },
});