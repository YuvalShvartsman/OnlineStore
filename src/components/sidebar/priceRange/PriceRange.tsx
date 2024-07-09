import "./PriceRange.css";

import { Slider } from "@mui/material";
import { Typography } from "antd";
import { useContext, useState } from "react";
import EcommerceItemsContext from "../../../context/EcommerceItemsContext";

function PriceRange() {
  const { ecommerceItems, setValueToFilter } = useContext(
    EcommerceItemsContext
  );
  const prices = ecommerceItems.map((item) => item.price);
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);

  const [highestAndLowest] = useState({ highestPrice, lowestPrice });

  return (
    <div className="PriceRange">
      <Typography.Text>Price Range Selected</Typography.Text>
      <div className="SliderContainer">
        {highestAndLowest.lowestPrice}$
        <Slider
          className="Slider"
          orientation="horizontal"
          size="small"
          onChange={(_e, newValue) =>
            setValueToFilter((prev) => ({ ...prev, price: newValue as number }))
          }
          min={highestAndLowest.lowestPrice}
          max={highestAndLowest.highestPrice}
          valueLabelDisplay="auto"
        ></Slider>
        {highestAndLowest.highestPrice}$
      </div>
    </div>
  );
}

export default PriceRange;
