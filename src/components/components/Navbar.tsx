import "./Navbar.css";

import {
  Autocomplete,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { ecommerceItems } from "../data/ecommerceItems";
import { LogoDev, Person, Search } from "@mui/icons-material";

const ecommerceItemsDescs = ecommerceItems.map((item) => item.description);

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
        <Button color="inherit">Watch</Button>
        <Person className="PersonIcon" />
      </div>
    </div>
  );
}

export default Navbar;
