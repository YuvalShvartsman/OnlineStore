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

  const filterData = useCallback(
    (desc: string, reason?: string, price?: number) => {
      let temp = [...ecommerceItems];
      if (desc) {
        if (reason === "reset") {
          return setFilteredEcommerceItems(ecommerceItems);
        }
        temp = ecommerceItems.filter((item) => item.description.includes(desc));
      }
      setFilteredEcommerceItems(temp);
    },
    []
  );

  const filterDataByPrice = useCallback((price: number) => {
    console.log(price);
    let temp = [...ecommerceItems];

    temp = ecommerceItems.filter((item) => item.price > price);

    setFilteredEcommerceItems(temp);
  }, []);

  const sortData = useCallback((key: string) => {}, []);

  return (
    <EcommerceItemsContext.Provider
      value={{
        filterData,
        sortData,
        filterDataByPrice,
        filteredEcommerceItems,
        ecommerceItems,
      }}
    >
      {children}
    </EcommerceItemsContext.Provider>
  );
};

export default EcommerceItemsProvider;
