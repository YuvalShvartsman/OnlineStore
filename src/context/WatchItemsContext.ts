import { createContext } from "react";

import { EcommerceItem } from "../types/EcommerceItems";

type WatchItemsContextProps = {
  ecommerceWatchItems: EcommerceItem[];
  setEcommerceWatchItems: React.Dispatch<React.SetStateAction<EcommerceItem[]>>;
};

const initialContextValue = {
  ecommerceWatchItems: [],
  setEcommerceWatchItems: () => {},
};

const WatchItemsContext =
  createContext<WatchItemsContextProps>(initialContextValue);

export default WatchItemsContext;
