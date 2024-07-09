import { createContext } from "react";

import { EcommerceItem } from "../types/EcommerceItems";
// import { ecommerceItemsData } from "../data/ecommerceItems";
import { ValueToFilter } from "../types/ValueToFIlter";

type EcommerceContextProps = {
  ecommerceItems: EcommerceItem[];
  filteredEcommerceItems: EcommerceItem[];
  setValueToFilter: React.Dispatch<
    React.SetStateAction<ValueToFilter | undefined>
  >;
  loading: boolean;
};

const initialContextValue = {
  ecommerceItems: [],
  filteredEcommerceItems: [],
  setValueToFilter: () => {},
  loading: false,
};

const EcommerceItemsContext =
  createContext<EcommerceContextProps>(initialContextValue);

export default EcommerceItemsContext;
