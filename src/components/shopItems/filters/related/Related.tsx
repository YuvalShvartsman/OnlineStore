import { Typography } from "@mui/material";
import "./Related.css";

const relatedList = [
  "world-wide shipping",
  "under 50$",
  "Kitten",
  "plastic plugs",
  "pucker shoes",
  "vintage typewriter ",
];

function Related() {
  return (
    <div className="Related">
      <Typography fontWeight={600} fontSize={12}>
        Related
      </Typography>

      {relatedList.map((name) => (
        <div className="RelatedItem">{name}</div>
      ))}
    </div>
  );
}

export default Related;
