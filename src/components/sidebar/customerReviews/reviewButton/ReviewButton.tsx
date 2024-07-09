import "./ReviewButton.css";

import { Button } from "antd";
import { Grid } from "@mui/material";

import ReviewStars from "../../../reviewStars/ReviewStars";

type ReviewButtonProps = {
  nubmerOfStars: number;
};

function ReviewButton({ nubmerOfStars }: ReviewButtonProps) {
  return (
    <Grid item xs={12} sm={6} md="auto" key={nubmerOfStars}>
      <Button size="small" className="ReviewButton">
        <ReviewStars numberOfStars={nubmerOfStars} /> & up
      </Button>
    </Grid>
  );
}

export default ReviewButton;
