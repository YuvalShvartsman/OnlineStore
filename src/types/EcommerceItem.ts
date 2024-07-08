import { Shipping } from "./Shipping";

export type EcommenrceItem = {
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  inStock: boolean;
  image: string;
  review: number;
  discount: number;
  description: string;
  shipping: Shipping;
};
