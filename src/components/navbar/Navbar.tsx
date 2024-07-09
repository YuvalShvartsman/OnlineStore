import "./Navbar.css";

import { Typography } from "@mui/material";

import { LogoDev, Person } from "@mui/icons-material";
import { Button } from "antd";
import { useContext, useState } from "react";
import WatchModal from "../watchModal/WatchModal";
import SearchBar from "./searchBar/SearchBar";
import WatchItemsContext from "../../context/WatchItemsContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const { ecommerceWatchItems } = useContext(WatchItemsContext);

  const amountOfItems = [...new Set(ecommerceWatchItems)].length;

  return (
    <div className="Navbar">
      <WatchModal open={open} handleClose={handleClose} />
      <div className="LogoAndName">
        <LogoDev />
        <Typography fontSize={25} fontWeight={600}>
          YuvalShop
        </Typography>
      </div>
      <SearchBar />
      <div className="UserAndWatch">
        <Button size="small" onClick={() => setOpen(true)}>
          Watch &nbsp;
          <Typography className="NumberOfItems">{amountOfItems}</Typography>
        </Button>
        <Person className="PersonIcon" />
      </div>
    </div>
  );
}

export default Navbar;
