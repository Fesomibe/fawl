import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "expo-router";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AnimatedSplashOverlay />
      <CartProvider>
        <FavoritesProvider>
          <Stack>
            <Stack.Screen
              name="index"
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="product/[id]"
              options={{ title: "Product Details" }}
            />

            <Stack.Screen
              name="cart"
              options={{ title: "Your Cart" }}
            />
          </Stack>
        </FavoritesProvider>
      </CartProvider>
    </ThemeProvider>
  );
}