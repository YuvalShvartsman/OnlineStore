import "./ReviewButton.css";

import { Button } from "antd";
import { Grid } from "@mui/material";

import ReviewStars from "../../../reviewStars/ReviewStars";
import EcommerceItemsContext from "../../../../context/EcommerceItemsContext";
import { useContext } from "react";

type ReviewButtonProps = {
  nubmerOfStars: number;
};

function ReviewButton({ nubmerOfStars }: ReviewButtonProps) {
  const { setValueToFilter } = useContext(EcommerceItemsContext);

  return (
    <Grid item xs={12} sm={6} md="auto" key={nubmerOfStars}>
      <Button
        size="small"
        className="ReviewButton"
        onClick={() =>
          setValueToFilter((prev) => ({ ...prev, reviews: nubmerOfStars }))
        }
      >
        <ReviewStars numberOfStars={nubmerOfStars} /> & up
      </Button>
    </Grid>
  );
}

export default ReviewButton;
