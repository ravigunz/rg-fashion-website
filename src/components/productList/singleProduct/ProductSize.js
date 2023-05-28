import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleSizeBox from "./productSize/SingleSizeBox";

const defaultSizes = ["xs", "s", "m", "l", "xl"];

export default function ProductSize({ availableSizes }) {
  const [finalSizeList, setFinalSizeList] = useState([]);

  useEffect(() => {
    let temArray = [];

    if (availableSizes) {
      defaultSizes.forEach((element) => {
        temArray.push({
          size: element,
          isAvailable: availableSizes.includes(element),
        });
      });
    }

    setFinalSizeList(temArray);
  }, [availableSizes]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      {finalSizeList.map((val, key) => {
        return (
          <Grid key={key} item xs={2}>
            <SingleSizeBox size={val.size} isAvailable={val.isAvailable} />
          </Grid>
        );
      })}
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
