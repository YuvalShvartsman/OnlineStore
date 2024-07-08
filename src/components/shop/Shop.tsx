import { useState } from "react";

import { EcommenrceItem } from "../../types/EcommerceItem";

import { ecommerceItems } from "../data/ecommerceItems";
import Navbar from "../components/Navbar";

function Shop() {
  const [filteredEcomereceItems, setFilteredEcomereceItems] =
    useState<EcommenrceItem[]>(ecommerceItems);

  return (
    <>
      <Navbar />
    </>
  );
}

export default Shop;
