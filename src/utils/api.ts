export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export const getProductData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) return [];

  return response.json();
};
