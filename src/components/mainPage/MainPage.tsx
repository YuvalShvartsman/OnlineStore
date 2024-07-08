import { useState } from "react";
import { EcommenrceItem } from "../../types/EcommerceItems";
import { ecommerceItems } from "../data/ecommerceItems";
import Navbar from "../navbar/Navbar";
import ShopItems from "../shopItems/ShopItems";

function MainPage() {
  const [filteredEcomereceItems, setFilteredEcomereceItems] =
    useState<EcommenrceItem[]>(ecommerceItems);
  return (
    <>
      <Navbar />
      <ShopItems items={filteredEcomereceItems} />
    </>
  );
}

export default MainPage;
