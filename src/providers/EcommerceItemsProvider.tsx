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
    console.log(valueToFilter?.price);
    const filteredTempItems = tempItems.filter(
      (item) =>
        item.name.includes(valueToFilter?.desc ?? "") &&
        item.price <= (valueToFilter?.price ?? 999) &&
        item?.review >= (valueToFilter?.reviews ?? 4)
    );
    switch (valueToFilter?.sortBy) {
      case "The cheapest":
        filteredTempItems.sort((a, b) => a.price - b.price);
        break;

      case "The most expensive":
        filteredTempItems.sort((a, b) => b.price - a.price);
        break;

      case "Top rated":
        filteredTempItems.sort((a, b) => b.review - a.review);
        break;
    }
    // console.log(valueToFilter?.desc);
    // if (valueToFilter?.desc)
    //   tempItems = filterDataByDesc(valueToFilter.desc, tempItems);
    // if (valueToFilter?.price)
    //   tempItems = filterDataByPrice(valueToFilter.price, tempItems);

    setFilteredEcommerceItems(filteredTempItems);
  }, [valueToFilter]);

  const filterDataByDesc = useCallback(
    (desc: string, tempItems: EcommerceItem[]) => {
      if (desc) {
        tempItems = tempItems.filter((item) => item.description.includes(desc));
      }
      return tempItems;
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
      tempItems = tempItems.filter((item) => item.review >= stars);
      return tempItems;
    },
    []
  );

  const sortData = useCallback((key: string, tempItems: EcommerceItem[]) => {
    console.log(key);
    switch (key) {
      case "The cheapest":
        return { ...tempItems }.sort((a, b) => a.price - b.price);

      case "The most expensive":
        return { ...tempItems }.sort((a, b) => b.price - a.price);

      case "Top rated":
        return { ...tempItems }.sort((a, b) => b.review - a.review);

      default:
        return { ...tempItems };
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
