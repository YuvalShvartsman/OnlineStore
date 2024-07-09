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
    let temp = [...ecommerceItems];

    temp = ecommerceItems.filter((item) => item.price < price);

    setFilteredEcommerceItems(temp);
  }, []);

  const filterDataByReviews = useCallback((stars: number) => {
    let temp = [...ecommerceItems];

    temp = ecommerceItems.filter((item) => item.review > stars);

    setFilteredEcommerceItems(temp);
  }, []);

  const sortData = useCallback((key: string) => {
    console.log(key);
    const sortedItems = [...filteredEcommerceItems];
    switch (key) {
      case "The cheapest":
        sortedItems.sort((a, b) => a.price - b.price);
        setFilteredEcommerceItems(sortedItems);
        break;

      case "The most expensive":
        sortedItems.sort((a, b) => b.price - a.price);
        setFilteredEcommerceItems(sortedItems);
        break;

      case "Top rated":
        sortedItems.sort((a, b) => b.review - a.review);
        setFilteredEcommerceItems(sortedItems);
        break;

      default:
        return filteredEcommerceItems;
    }
  }, []);

  return (
    <EcommerceItemsContext.Provider
      value={{
        filterData,
        sortData,
        filterDataByPrice,
        filterDataByReviews,
        filteredEcommerceItems,
        ecommerceItems,
      }}
    >
      {children}
    </EcommerceItemsContext.Provider>
  );
};

export default EcommerceItemsProvider;
