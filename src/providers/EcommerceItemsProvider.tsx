import { useCallback, ReactNode, useState } from "react";

import EcommerceItemsContext from "../context/EcommerceItemsContext";
import { ecommerceItemsData } from "../data/ecommerceItems";
import { EcommerceItem } from "../types/EcommerceItems";

export const EcommerceItemsProvider = (children: Readonly<ReactNode>) => {
  const [filteredEcommereceItems, setFilteredEcommereceItems] =
    useState<EcommerceItem[]>(ecommerceItemsData);
  const [ecommerceItems, setEcommerceItems] =
    useState<EcommerceItem[]>(ecommerceItemsData);

  const filterData = useCallback((key: string) => {}, []);

  const sortData = useCallback((key: string) => {}, []);

  return (
    <EcommerceItemsContext.Provider
      value={{ filterData, sortData, filteredEcommereceItems, ecommerceItems }}
    >
      {children}
    </EcommerceItemsContext.Provider>
  );
};

export default EcommerceItemsProvider;
