import { Box, Typography } from "@mui/material";
import React from "react";

export default function SizeBox({ size }) {
  return (
    <Box
      sx={{
        padding: '3px',
        border: "2px solid green",
        borderRadius: "7px",
        width: "40px",
        textAlign: "center",
        bgcolor: '#afd7af',
      }}
    >
      <Typography>{size.toUpperCase()}</Typography>
    </Box>
  );
}
