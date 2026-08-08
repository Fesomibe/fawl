import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FAWL</Text>

      <Text style={styles.tagline}>
        From Africa With Love
      </Text>

      <Text style={styles.heading}>
        Discover Africa, delivered with love.
      </Text>

      <FlatList
        data={products}
        keyExtractor={( item ) => item.id}
        renderItem={({ item }) => (
          <ProductCard 
          product={item} 
          onPress={() => router.push(`/product/${item.id}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#D6C6A5",
    textAlign: "center",
  },

  tagline: {
    fontSize: 16,
    marginTop: 4,
    color: "#D6C6A5",
    textAlign: "center",
  },

  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
    color: "#D6C6A5",
  },
});