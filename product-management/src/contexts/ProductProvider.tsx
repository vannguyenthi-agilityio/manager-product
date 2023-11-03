import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';

// Types
import { Product } from '@types';

// services
import { getProducts } from '@services/api-action';

interface ProductProviderProps {
  children: ReactNode;
}

export interface ProductContextProps {
  products: Product[];
  onGetProducts: () => void;
}

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  onGetProducts: () => {}
});

const ProductsProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchListProducts = async () => {
    const productsData = await getProducts();
    setProducts(productsData);
  };

  useEffect(() => {
    fetchListProducts();
  }, []);

  const productContextValue = useMemo(
    () => ({
      products,
      onGetProducts: fetchListProducts
    }),
    [products]
  );

  return <ProductContext.Provider value={productContextValue}>{children}</ProductContext.Provider>;
};

export default ProductsProvider;
