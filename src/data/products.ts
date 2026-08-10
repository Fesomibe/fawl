import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "African Black Soap",
    description: "Traditional African black soap for everyday skincare.",
    price: 12.99,
    category: "Beauty",
    image: require("../../assets/images/products/black-soap.jpg .jpeg"),
    inStock: false,
  },
  {
    id: "2",
    name: "Ankara Tote Bag",
    description: "Colorful tote bag made with African-inspired Ankara fabric.",
    price: 24.99,
    category: "Fashion",
    image: require("../../assets/images/products/ankara-tote.jpg .jpeg"),
    inStock: true,
  },
  {
    id: "3",
    name: "Jollof Rice Spice Mix",
    description: "A flavorful spice blend for preparing delicious jollof rice.",
    price: 8.99,
    category: "Food",
    image: require("../../assets/images/products/jollof-spice.jpg .jpeg"),
    inStock: true,
  },
];