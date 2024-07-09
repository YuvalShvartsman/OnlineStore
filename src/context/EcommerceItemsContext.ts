import { createContext } from "react";

import { EcommerceItem } from "../types/EcommerceItems";
import { ecommerceItemsData } from "../data/ecommerceItems";

type EcommerceContextProps = {
  ecommerceItems: EcommerceItem[];
  filteredEcommerceItems: EcommerceItem[];
  filterData: (key: string, reason?: string) => void;
  sortData: (key: string) => void;
};

const initialContextValue = {
  ecommerceItems: ecommerceItemsData,
  filteredEcommerceItems: ecommerceItemsData,
  filterData: () => {},
  sortData: () => {},
};

const EcommerceItemsContext =
  createContext<EcommerceContextProps>(initialContextValue);

export default EcommerceItemsContext;
