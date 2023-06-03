import React from "react";
import { Button } from "@mui/material";
import { ShoppingCart as CartIcon } from "@mui/icons-material";

export default function AddToCartButtonSection() {
  return (
    <div>
      <Button variant="contained" sx={{ bgcolor: 'teal', borderRadius: '20px', padding: '8px 70px', '&:hover': { bgcolor: 'black'}}} startIcon={<CartIcon />}> Add To Cart</Button>
    </div>
  );
}