import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Beauty", "Fashion", "Food"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>FAWL</Text>

        <Text style={styles.tagline}>
          From Africa With Love
        </Text>

        <Text style={styles.heading}>
          Discover Africa, delivered with love.
        </Text>
      </View>

      <Pressable
        style={styles.cartButton}
        onPress={() => router.push("/cart")}
      >
        <Text style={styles.cartButtonText}>Cart</Text>
      </Pressable>

      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
        placeholder="Search products..."
        placeholderTextColor="#888"
      />

      <View style={styles.categories}>
        {categories.map((category) => (
          <Pressable
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category &&
                styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category &&
                  styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              router.push(`/product/${item.id}`)
            }
          />
        )}
      />
    </SafeAreaView>
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

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  cartButton: {
    alignSelf: "flex-end",
    backgroundColor: "#D6C6A5",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 12,
  },

  cartButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },

  searchInput: {
    borderWidth: 1,
    borderColor: "#D6C6A5",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 16,
  },

  categories: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },

  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D6C6A5",
  },

  selectedCategoryButton: {
    backgroundColor: "#D6C6A5",
  },

  categoryText: {
    fontSize: 14,
  },

  selectedCategoryText: {
    fontWeight: "600",
  },
});