import React from "react";
import Chip from "@mui/material/Chip";

export default function StockStatusChip({qty}) {
  return <Chip label={qty > 0 ? "In Stock" : "Out of Stock"} color={qty > 0 ? "success" : "error"} />;
}
