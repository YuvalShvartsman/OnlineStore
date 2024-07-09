import "./Navbar.css";

import {
  Autocomplete,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { ecommerceItemsData } from "../../data/ecommerceItems";
import { LogoDev, Person, Search } from "@mui/icons-material";
import { Button } from "antd";

const ecommerceItemsDescs = ecommerceItemsData.map((item) => item.description);

function Navbar() {
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
