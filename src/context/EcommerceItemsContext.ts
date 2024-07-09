import { createContext } from "react";

import { EcommerceItem } from "../types/EcommerceItems";
import { ecommerceItemsData } from "../data/ecommerceItems";

type EcommerceContextProps = {
  ecommerceItems: EcommerceItem[];
  filteredEcommereceItems: EcommerceItem[];
  filterData: (key: string) => void;
  sortData: (key: string) => void;
};

const initialContextValue = {
  ecommerceItems: ecommerceItemsData,
  filteredEcommereceItems: ecommerceItemsData,
  filterData: () => {},
  sortData: () => {},
};

const EcommerceItemsContext =
  createContext<EcommerceContextProps>(initialContextValue);

export default EcommerceItemsContext;
