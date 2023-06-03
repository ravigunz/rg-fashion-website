import React from "react";
import { Grid } from "@mui/material";
import SingleProduct from "../../../components/productList/SingleProduct";

export default function ProductList({ products, name, type, price, images }) {
  return (
    <Grid container spacing={1}>
      {products.map((val, key) => {
        return (
          <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
            <SingleProduct
              name={val.productName}
              type={val.productType}
              price={val.price}
              images={val.images}
              availableSizes={val.size}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
