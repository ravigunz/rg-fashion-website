import React from "react";
import ProductImage from "./singleProduct/ProductImage";
import ProductName from "./singleProduct/ProductName";
import ProductPrice from "./singleProduct/ProductPrice";
import ProductSize from "./singleProduct/ProductSize";
import { Box } from "@mui/material";

export default function SingleProduct({
  name,
  type,
  price,
  images,
  availableSizes,
}) {
  return (
    <Box
      sx={{
        p: 3,
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <ProductImage images={images} />
      <Box sx={{ mt: 2 }}>
        <ProductName name={name} type={type} />
      </Box>
      <ProductPrice value={price} />
      <ProductSize availableSizes={availableSizes} />
    </Box>
  );
}
