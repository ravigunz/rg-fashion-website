import React from "react";
import CommonWrapperLayout from "../common/CommonWrapperLayout";
import { Box, Grid } from "@mui/material";
import ImageSlider from "../../components/productDetails/ImageSlider";
import ProductDetailSection from './innerLayouts/ProductDetailSection';

const productData = {
  images: [
    "https://radikadilanka.com/rdfashion/static/media/product114.ee344b70.jpg",
    "https://radikadilanka.com/rdfashion/static/media/product114.ee344b70.jpg",
  ],
  productName: "Product 01",
  productType: "Dress",
  price: 7700,
  size: ["xs", "s"],
  description: "Sample product description",
  availableQty: 100,
};

export default function ProductDetailsLayout() {
  return (
    <CommonWrapperLayout>
      <Box
        sx={{
          textAlign: "left",
          border: "3px solid purple",
          marginTop: "40px",
          padding: "20px",
          borderRadius: "20px",
          marginBottom: "60px",
        }}
      >
        <Grid container>
          <Grid item xs={5}>
            <ImageSlider images={productData.images} />
          </Grid>
          <Grid item xs={7} sx={{ pl: 4 }}>
            <ProductDetailSection
              productName={productData.productName}
              productType={productData.productType}
              price={productData.price}
              size={productData.size}
              description={productData.description}
              availableQty={productData.availableQty}
            />
          </Grid>
        </Grid>
      </Box>
    </CommonWrapperLayout>
  );
}
