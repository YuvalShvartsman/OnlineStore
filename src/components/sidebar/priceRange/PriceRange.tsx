import "./PriceRange.css";

import { Slider } from "@mui/material";
import { Typography } from "antd";

function PriceRange() {
  return (
    <div className="PriceRange">
      <Typography.Text>Price Range Selected</Typography.Text>
      <div className="SliderContainer">
        <Slider
          className="Slider"
          orientation="horizontal"
          size="small"
        ></Slider>
      </div>
    </div>
  );
}

export default PriceRange;
