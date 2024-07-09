import "./Item.css";

import { Button, Image } from "antd";

import { EcommerceItem } from "../../../types/EcommerceItems";

import NoImage from "/itemImage.jpg";
import { Card, Grid, Typography } from "@mui/material";
import ReviewStars from "../../reviewStars/ReviewStars";

type ItemProps = {
  item: EcommerceItem;
};

function Item({ item }: ItemProps) {
  return (
    <Grid item xs={12} sm={6} md="auto" key={item.id} className="Item">
      <Card className="ItemContent">
        <Image src={NoImage} className="ItemImage" />
        <div className="ItemText">
          <Typography
            fontSize={10}
            textAlign="initial"
            height={60}
            alignSelf="center"
          >
            {item.description}
          </Typography>
          <Typography fontSize={20} fontWeight={600} textAlign="center">
            {item.price}$
          </Typography>
          <Typography fontSize={8} textAlign="initial" height={25}>
            Eligable to shipping for Mars or somewhere else
          </Typography>
        </div>
        <div className="ReviewAndWatchBTN">
          <ReviewStars numberOfStars={item.review} />
          <Button className="WatchBTN">Watch</Button>
        </div>
      </Card>
    </Grid>
  );
}

export default Item;
