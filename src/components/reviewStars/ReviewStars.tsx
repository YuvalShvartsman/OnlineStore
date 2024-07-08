import { Typography } from "antd";
import "./ReviewStars.css";

import { Rating } from "react-simple-star-rating";

type ReviewStarsProps = {
  numberOfStars: number;
};

function ReviewStars({ numberOfStars }: ReviewStarsProps) {
  return (
    <div className="RatingAndNumber">
      <Rating
        initialValue={numberOfStars}
        allowFraction
        disableFillHover
        readonly
        size={10}
        className="Rating"
      />
      <Typography.Text className="RatingNumber">
        {numberOfStars}
      </Typography.Text>
    </div>
  );
}
export default ReviewStars;
