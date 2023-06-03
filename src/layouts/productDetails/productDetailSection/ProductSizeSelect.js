import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SizeBox from "../../../components/productDetails/SizeBox";

export default function ProductSizeSelect({ sizes }) {
  return (
    <FormControl>
      <FormLabel
        sx={{ fontSize: "14px", color: "black", textTransform: "uppercase" }}
      >
        Product Size
      </FormLabel>
      <RadioGroup row name="row-radio-buttons-group">
        {sizes.map((val, key) => {
          return (
            <FormControlLabel
              key={key}
              value={val}
              control={<Radio />}
              label={<SizeBox size={val} />}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
