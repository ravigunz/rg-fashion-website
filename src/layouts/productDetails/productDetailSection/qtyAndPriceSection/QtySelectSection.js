import React from "react";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  Add as AddIcon,
  BorderBottom,
  Remove as RemoveIcon,
} from "@mui/icons-material";

const QtyButtons = [
  {
    type: "add",
    icon: <AddIcon />,
  },
  {
    type: "remove",
    icon: <RemoveIcon />,
  },
];

export default function QtySelectSection() {
  return (
    <Grid container justifyContent={"flex-start"}>
      <Grid item>
        <Typography sx={{ fontSize: "40px", borderBottom: "1px solid black" }}>
          01
        </Typography>
      </Grid>
      {QtyButtons.map((val, key) => {
        return (
          <Grid item key={key} sx={{ ml: 2, mt: 1 }}>
            <IconButton
              aria-label="delete"
              size="large"
              sx={{ border: "1px solid grey", borderRadius: "10px" }}
            >
              {val.icon}
            </IconButton>
          </Grid>
        );
      })}
    </Grid>
  );
}
