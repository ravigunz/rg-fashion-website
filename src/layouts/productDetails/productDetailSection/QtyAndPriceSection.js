import { Grid, Typography } from "@mui/material";
import React from "react";
import QtySelectSection from "./qtyAndPriceSection/QtySelectSection";

export default function QtyAndPriceSection() {
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item xs={12}>
        <Typography>Quantity of the selected size.</Typography>
      </Grid>
      <Grid item xs={6}>
        <QtySelectSection />
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "right" }}>
        <Typography>LKR 12,000.00</Typography>
      </Grid>
    </Grid>
  );
}
