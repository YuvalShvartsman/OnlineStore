import "./Navbar.css";

import {
  Autocomplete,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { LogoDev, Person, Search } from "@mui/icons-material";
import { Button } from "antd";
import { BaseSyntheticEvent, useContext } from "react";
import EcommerceItemsContext from "../../context/EcommerceItemsContext";

function Navbar() {
  const { filterData, ecommerceItems } = useContext(EcommerceItemsContext);
  const ecommerceItemsDescs = ecommerceItems.map((item) => item.description);

  return (
    <div className="Navbar">
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
          onInputChange={(_e, val, reason) => {
            filterData(val, reason);
          }}
          onSelect={(e: BaseSyntheticEvent) => {
            filterData(e.target.value);
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
        <Button size="small">Watch</Button>
        <Person className="PersonIcon" />
      </div>
    </div>
  );
}

export default Navbar;
