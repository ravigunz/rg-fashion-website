import React, { useEffect, useState } from "react";
import HeaderLayout from "../common/HeaderLayout";
import FooterLayout from "../common/FooterLayout";
import { Grid, Typography, Box } from "@mui/material";
import ProductFilters from "../allItem/ProductFilters";
import ProductList from "../allItem/ProductList";
import axios from "axios";

export default function AllItemLayout() {
  const [loadingStatus, setLoadingStatus] = useState("notStarted");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoadingStatus("loading");
    axios
      .get("https://cdn.radikadilanka.com:9000/getProducts")
      .then((response) => {
        setLoadingStatus("Completed");
        setProducts(response.data);
      })
      .catch((e) => {
        setLoadingStatus("Error");
        console.log(e);
      });
  }, []);

  return (
    <div>
      <HeaderLayout />
      <Grid container>
        <Grid item xs={2}>
          <div style={{ backgroundColor: "yellow" }}>
            <ProductFilters />
          </div>
        </Grid>
        <Grid item xs={10}>
          <div>
            {loadingStatus === "loading" ? (
              <Typography>Loading...</Typography>
            ) : loadingStatus === "completed" ? (
              products.length > 0 ? (
                <Box sx={{ pb: 4 }}>
                <ProductList />
                </Box>
              ) : (
                <Typography>No Products</Typography>
              )
            ) : loadingStatus === "error" ? (
              <Typography>Error</Typography>
            ) : (
              ""
            )}
            <ProductList products={products} />
          </div>
        </Grid>
      </Grid>
      <FooterLayout />
    </div>
  );
}
