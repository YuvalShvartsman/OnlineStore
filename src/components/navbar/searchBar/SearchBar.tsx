import "./SearchBar.css";

import { BaseSyntheticEvent, useContext } from "react";

import { Search } from "@mui/icons-material";
import { Autocomplete, TextField, InputAdornment } from "@mui/material";

import EcommerceItemsContext from "../../../context/EcommerceItemsContext";

function SearchBar() {
  const { setValueToFilter, ecommerceItems } = useContext(
    EcommerceItemsContext
  );
  const ecommerceItemsDescs = ecommerceItems.map((item) => item.description);
  return (
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
  );
}

export default SearchBar;
