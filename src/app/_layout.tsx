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

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AnimatedSplashOverlay />
      <CartProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="product/[id]"
            options={{ title: "Product Details" }}
          />
        </Stack>
      </CartProvider>
    </ThemeProvider>
  );
}