import React from 'react';
import { Typography } from '@mui/material';

export default function SingleSizeBox({size}) {
  return (
    <div
              style={{
                textTransform: "uppercase",
                backgroundColor: "black",
                color: "white",
                borderRadius: "7px",
                border: "2px solid grey",
              }}
            >
              <Typography>{size}</Typography>
            </div>
  )
}
