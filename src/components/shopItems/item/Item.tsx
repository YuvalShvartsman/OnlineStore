import "./Item.css";

import { Button, Image } from "antd";

import { EcommerceItem } from "../../../types/EcommerceItems";

import NoImage from "/images.jpg";
import { Card, Grid, Typography } from "@mui/material";
import ReviewStars from "../../reviewStars/ReviewStars";
import { useContext, useState } from "react";
import WatchItemsContext from "../../../context/WatchItemsContext";

type ItemProps = {
  item: EcommerceItem;
};

function Item({ item }: ItemProps) {
  const [isWatched, setIsWatched] = useState<boolean>(false);
  const { setEcommerceWatchItems, ecommerceWatchItems } =
    useContext(WatchItemsContext);
  return (
    <Grid item xs={12} sm={6} md="auto" lg={2} key={item.id} className="Item">
      <div className="ItemContent">
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
          <Button
            onFocus={() => setIsWatched(true)}
            className="WatchBTN"
            onClick={() =>
              setEcommerceWatchItems([...ecommerceWatchItems, item])
            }
          >
            Watch {isWatched && "♥"}
          </Button>
        </div>
      </div>
    </Grid>
  );
}

export default Item;
