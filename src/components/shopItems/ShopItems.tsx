import "./ShopItems.css";

import { useContext } from "react";

import Item from "./item/Item";

import { Grid } from "@mui/material";

import Filters from "./filters/Filters";
import { EcommerceItem } from "../../types/EcommerceItems";

type ShopItemsProps = {
  items: EcommerceItem[];
};

function ShopItems({ items }: ShopItemsProps) {
  return (
    <Grid container className="Items">
      <Filters />
      {items.length > 0
        ? items.map((item) => <Item item={item} key={item.id} />)
        : "No items in this list"}
      {}
    </Grid>
  );
}

export default ShopItems;
