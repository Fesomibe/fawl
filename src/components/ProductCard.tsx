import { Product } from "@/types/product";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    product: Product;
    onPress?: () => void;
};

export default function ProductCard({ product, onPress }: Props) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.card}>
                <Image
                    source={product.image}
                    style={styles.image}
                />

                <Text style={styles.category}>
                    {product.category}
                </Text>

                <Text style={styles.name}>
                    {product.name}
                </Text>

                <Text
                    style={styles.description}
                    numberOfLines={2}
                >
                    {product.description}
                </Text>

                <Text style={styles.price}>
                    ${product.price.toFixed(2)}
                </Text>
                <Text style={product.inStock ? styles.inStock : styles.outOfStock}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 18,
        marginBottom: 14,
        borderRadius: 16,
        backgroundColor: "#ffffff",
    },

    category: {
        fontSize: 13,
        marginBottom: 6,
    },

    name: {
        fontSize: 19,
        fontWeight: "600",
    },

    description: {
        fontSize: 14,
        marginTop: 6,
        lineHeight: 20,
    },

    price: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 12,
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 12,
        marginBottom: 12,
    },

    inStock: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 8,
    },

    outOfStock: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 8,
    },
});