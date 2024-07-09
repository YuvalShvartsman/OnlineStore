import { ReactNode, useState } from "react";

import { EcommerceItem } from "../types/EcommerceItems";
import WatchItemsContext from "../context/WatchItemsContext";

export const WatchItemsContextProvider = ({
  children,
}: {
  children: Readonly<ReactNode>;
}) => {
  const [ecommerceWatchItems, setEcommerceWatchItems] = useState<
    EcommerceItem[]
  >([]);

  return (
    <WatchItemsContext.Provider
      value={{
        ecommerceWatchItems,
        setEcommerceWatchItems,
      }}
    >
      {children}
    </WatchItemsContext.Provider>
  );
};

export default WatchItemsContextProvider;
