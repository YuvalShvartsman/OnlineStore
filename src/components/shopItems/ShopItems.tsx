import "./ShopItems.css";

import { EcommenrceItem } from "../../types/EcommerceItems";
import Item from "./item/Item";
import { Grid } from "@mui/material";
type ShopItemsProps = {
  items: EcommenrceItem[];
};

function ShopItems({ items }: ShopItemsProps) {
  return (
    <Grid container className="Items">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </Grid>
  );
}

export default ShopItems;
