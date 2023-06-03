import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import ProductFilters from "./innerLayouts/ProductFilters";
import ProductList from "./innerLayouts/ProductList";
import axios from "axios";
import CommonWrapperLayout from "../common/CommonWrapperLayout";

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
    <CommonWrapperLayout>
      <Grid container>
        <Grid item xs={12} md={2}>
          <div style={{ backgroundColor: "yellow" }}>
            <ProductFilters />
          </div>
        </Grid>
        <Grid item xs={12} md={10}>
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
      </CommonWrapperLayout>
    </div>
  );
}
