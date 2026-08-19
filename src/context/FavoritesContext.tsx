import { Product } from "@/types/product";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type FavoritesContextType = {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
};

const FavoritesContext = createContext<
  FavoritesContextType | undefined
>(undefined);

type FavoritesProviderProps = {
  children: ReactNode;
};

export function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToFavorites = (product: Product) => {
    setFavorites((currentFavorites) => {
      const existingFavorite = currentFavorites.find(
        (item) => item.id === product.id
      );

      if (existingFavorite) {
        return currentFavorites;
      }

      return [...currentFavorites, product];
    });
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter(
        (item) => item.id !== productId
      )
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites must be used inside a FavoritesProvider"
    );
  }

  return context;
}