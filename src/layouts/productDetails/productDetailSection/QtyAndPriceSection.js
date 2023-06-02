import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import QtySelectSection from "./qtyAndPriceSection/QtySelectSection";
import { priceValueFormat } from "../../../util/functions";

export default function QtyAndPriceSection({ price }) {
  const [qty, setQty] = useState(1);
  const handleQtyChange = (newQty) => {
    setQty(newQty);
  };

  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item xs={12}>
        <Typography>Quantity of the selected size.</Typography>
      </Grid>
      <Grid item xs={6}>
        <QtySelectSection handleQtyChange={handleQtyChange} qty={qty} />
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "right" }}>
        <Typography>{priceValueFormat(price * qty)}</Typography>
      </Grid>
    </Grid>
  );
}
