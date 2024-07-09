import "./ShopItems.css";

import { EcommenrceItem } from "../../types/EcommerceItems";
import Item from "./item/Item";
import { Grid } from "@mui/material";
import Filters from "./filters/Filters";
type ShopItemsProps = {
  items: EcommenrceItem[];
};

function ShopItems({ items }: ShopItemsProps) {
  return (
    <Grid container className="Items">
      <Filters />
      {items.map((item) => (
        <Item item={item} />
      ))}
    </Grid>
  );
}

export default ShopItems;
