import React from 'react';
import { Typography } from '@mui/material';

export default function SingleSizeBox({size, isAvailable}) {
  return (
    <div
              style={{
                textTransform: "uppercase",
                backgroundColor: isAvailable ? "black" : 'white',
                color: isAvailable ? "white" : 'gray',
                borderRadius: "7px",
                border: "2px solid grey",
              }}
            >
              <Typography>{size}</Typography>
            </div>
  )
}
