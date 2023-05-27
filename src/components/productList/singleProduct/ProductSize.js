import { Grid, Typography } from "@mui/material";
import React from "react";
import SingleSizeBox from "./productSize/SingleSizeBox";

const defaultSizes = ["xs", "s", "m", "l", "xl"];

export default function ProductSize() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      {defaultSizes.map((val, key) => {
        return (
          <Grid key={key} item xs={2}>
            <SingleSizeBox size={val}/>
          </Grid>
        );
      })}
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
