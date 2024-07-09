import "./ShopItems.css";

import { useContext } from "react";

import { EcommerceItem } from "../../types/EcommerceItems";

import Item from "./item/Item";

import { Grid } from "@mui/material";

import Filters from "./filters/Filters";
import EcommerceItemsContext from "../../context/EcommerceItemsContext";

function ShopItems() {
  const { filteredEcommerceItems } = useContext(EcommerceItemsContext);

  return (
    <Grid container className="Items">
      <Filters />
      {filteredEcommerceItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </Grid>
  );
}

export default ShopItems;
