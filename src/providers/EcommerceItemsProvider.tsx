import { useCallback, ReactNode, useState, useEffect } from "react";

import EcommerceItemsContext from "../context/EcommerceItemsContext";
import { ecommerceItemsData } from "../data/ecommerceItems";
import { EcommerceItem } from "../types/EcommerceItems";
import { ValueToFilter } from "../types/ValueToFIlter";

export const EcommerceItemsProvider = ({
  children,
}: {
  children: Readonly<ReactNode>;
}) => {
  const [ecommerceItems] = useState<EcommerceItem[]>(ecommerceItemsData);

  const [filteredEcommerceItems, setFilteredEcommerceItems] =
    useState<EcommerceItem[]>(ecommerceItemsData);

  const [valueToFilter, setValueToFilter] = useState<ValueToFilter>();

  useEffect(() => {
    let tempItems = [...ecommerceItems];
    if (valueToFilter?.desc)
      tempItems = filterDataByDesc(valueToFilter.desc, tempItems);
    if (valueToFilter?.price)
      tempItems = filterDataByPrice(valueToFilter.price, tempItems);
    if (valueToFilter?.reviews)
      tempItems = filterDataByReviews(valueToFilter.reviews, tempItems);
    if (valueToFilter?.sortBy)
      tempItems = sortData(valueToFilter.sortBy, tempItems);

    setFilteredEcommerceItems(tempItems);
  }, [valueToFilter]);

  const filterDataByDesc = useCallback(
    (desc: string, tempItems: EcommerceItem[]) => {
      return tempItems.filter((item) =>
        item.description.toLowerCase().includes(desc)
      );
    },
    []
  );

  const filterDataByPrice = useCallback(
    (price: number, tempItems: EcommerceItem[]) => {
      return tempItems.filter((item) => item.price <= price);
    },
    []
  );

  const filterDataByReviews = useCallback(
    (stars: number, tempItems: EcommerceItem[]) => {
      return tempItems.filter((item) => item.review > stars);
    },
    []
  );

  const sortData = useCallback((key: string, tempItems: EcommerceItem[]) => {
    switch (key) {
      case "The cheapest":
        return tempItems.sort((a, b) => a.price - b.price);
      case "The most expensive":
        return tempItems.sort((a, b) => b.price - a.price);
      case "Top rated":
        return tempItems.sort((a, b) => b.review - a.review);
      default:
        return tempItems;
    }
  }, []);

  return (
    <EcommerceItemsContext.Provider
      value={{
        setValueToFilter,
        filteredEcommerceItems,
        ecommerceItems,
      }}
    >
      {children}
    </EcommerceItemsContext.Provider>
  );
};

export default EcommerceItemsProvider;
