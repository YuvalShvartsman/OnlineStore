import "./Navbar.css";

import {
  Autocomplete,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { LogoDev, Person, Search } from "@mui/icons-material";
import { Button } from "antd";
import { BaseSyntheticEvent, useContext, useState } from "react";
import EcommerceItemsContext from "../../context/EcommerceItemsContext";
import WatchModal from "../watchModal/WatchModal";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const { setValueToFilter, ecommerceItems } = useContext(
    EcommerceItemsContext
  );
  const ecommerceItemsDescs = ecommerceItems.map((item) => item.description);

  return (
    <div className="Navbar">
      <WatchModal open={open} handleClose={handleClose} />
      <div className="LogoAndName">
        <LogoDev />
        <Typography fontSize={25} fontWeight={600}>
          YuvalShop
        </Typography>
      </div>
      <div className="SearchBar">
        <Autocomplete
          className="Search"
          options={ecommerceItemsDescs}
          onInputChange={(_e, val, reason) =>
            setValueToFilter((prev) => ({
              ...prev,
              desc: reason === "input" ? val : "",
            }))
          }
          onSelect={(e: BaseSyntheticEvent) => {
            setValueToFilter((prev) => ({ ...prev, desc: e.target.value }));
          }}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label="Search options"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            );
          }}
        />
      </div>
      <div className="UserAndWatch">
        <Button size="small" onClick={() => setOpen(true)}>
          Watch
        </Button>
        <Person className="PersonIcon" />
      </div>
    </div>
  );
}

export default Navbar;
