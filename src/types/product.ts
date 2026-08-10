import { ImageSourcePropType } from "react-native";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: ImageSourcePropType;
  inStock: boolean;
};