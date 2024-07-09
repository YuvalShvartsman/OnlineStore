import { useCallback, ReactNode, useState } from "react";

import EcommerceItemsContext from "../context/EcommerceItemsContext";
import { ecommerceItemsData } from "../data/ecommerceItems";
import { EcommerceItem } from "../types/EcommerceItems";

export const EcommerceItemsProvider = ({
  children,
}: {
  children: Readonly<ReactNode>;
}) => {
  const [ecommerceItems] = useState<EcommerceItem[]>(ecommerceItemsData);

  const [filteredEcommerceItems, setFilteredEcommerceItems] =
    useState<EcommerceItem[]>(ecommerceItemsData);

  const filterData = useCallback((key: string, reason?: string) => {
    if (reason === "reset") {
      return setFilteredEcommerceItems(ecommerceItems);
    }
    const temp = ecommerceItems.filter((item) =>
      item.description.includes(key)
    );
    setFilteredEcommerceItems(temp);
  }, []);

  const sortData = useCallback((key: string) => {}, []);

  return (
    <EcommerceItemsContext.Provider
      value={{ filterData, sortData, filteredEcommerceItems, ecommerceItems }}
    >
      {children}
    </EcommerceItemsContext.Provider>
  );
};

export default EcommerceItemsProvider;
