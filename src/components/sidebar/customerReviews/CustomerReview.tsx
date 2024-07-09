import { Collapse } from "antd";
import "./CustomerReview.css";
import ReviewButton from "./reviewButton/ReviewButton";
import { Grid } from "@mui/material";

const starsOptios = [1, 2, 3, 4, 5];

function CustomerReview() {
  const { Panel } = Collapse;
  return (
    <div className="CustomerReviews">
      <Collapse className="CustomerAccordion" bordered={false} accordion>
        <Panel
          header={"Customer Reviews"}
          key={"CustomerReviewsButtons"}
          className="CustomerPanel"
        >
          <Grid container className="CollapseContent">
            {starsOptios.map((number) => (
              <ReviewButton nubmerOfStars={number} />
            ))}
          </Grid>
        </Panel>
      </Collapse>
    </div>
  );
}

export default CustomerReview;
