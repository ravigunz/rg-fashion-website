import React from "react";
import { Typography } from "@mui/material";
import { priceValueFormat } from "../../util/functions";

export default function PriceComponent({ value }) {
  return (
    <Typography sx={{ color: "red", fontWeight: "bold", fontSize: "25px" }}>
      {priceValueFormat(value)}
    </Typography>
  );
}
