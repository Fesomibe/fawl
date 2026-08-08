import { Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "@/types/product";

type Props = {
  product: Product;
  onPress?: () => void;
};

export default function ProductCard({ product, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
    <View style={styles.card}>
      <Text style={styles.name}>{product.name}</Text>

      <Text>{product.category}</Text>

      <Text>${product.price}</Text>
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 12,
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
  },
});