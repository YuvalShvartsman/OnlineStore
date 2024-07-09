import "./PriceRange.css";

import { Slider } from "@mui/material";
import { Typography } from "antd";
import { useContext } from "react";
import EcommerceItemsContext from "../../../context/EcommerceItemsContext";

function PriceRange() {
  const { ecommerceItems, filterDataByPrice } = useContext(
    EcommerceItemsContext
  );
  const prices = ecommerceItems.map((item) => item.price);
  const heightstPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);

  return (
    <div className="PriceRange">
      <Typography.Text>Price Range Selected</Typography.Text>
      <div className="SliderContainer">
        {lowestPrice}$
        <Slider
          className="Slider"
          orientation="horizontal"
          size="small"
          onChange={(_e, newValue) => filterDataByPrice(newValue as number)}
          min={lowestPrice}
          max={heightstPrice}
          valueLabelDisplay="auto"
        ></Slider>
        {heightstPrice}$
      </div>
    </div>
  );
}

export default PriceRange;
