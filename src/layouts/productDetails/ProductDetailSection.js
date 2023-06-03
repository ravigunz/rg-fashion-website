import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import RatingComponent from "../../components/productDetails/RatingComponent";
import StockStatusChip from "../../components/productDetails/StockStatusChip";
import PriceComponent from "../../components/productDetails/PriceComponent";
import ProductNameInDetail from "../../components/productDetails/ProductNameInDetail";
import QtyAndPriceSection from "./productDetailSection/QtyAndPriceSection";
import ProductSizeSelect from "./productDetailSection/ProductSizeSelect";
import AddToCartButtonSection from "./productDetailSection/AddToCartButtonSection";

export default function ProductDetailSection({
  productName,
  productType,
  price,
  size,
}) {
  return (
    <Grid container>
      <Grid xs={12} item container justifyContent="space-between">
        <Grid itme>
          <ProductNameInDetail value={`${productName} ${productType}`} />
        </Grid>
        <Grid itme>
          <StockStatusChip />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <RatingComponent />
        <PriceComponent value={price} />
        <Typography>This is the sample product description.</Typography>
        <Box sx={{ pt: 2 }}>
          <ProductSizeSelect sizes={size} />
        </Box>
        <hr />
        <QtyAndPriceSection price={price} />
        <Grid container justifyContent={"end"}>
          <Grid item>
            <AddToCartButtonSection />
          </Grid>
        </Grid>
        <hr />
        <p>
          Note: Product colur may slightly vary due to photographic lighting
          sources or your monitor settings.
        </p>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
