import React from "react";
import { Typography } from "@mui/material";
import ButtonListLayout from "./innerLayouts/ButtonListLayout";
import CarouselLayout from "./innerLayouts/CarouselLayout";
import CommonWrapperLayout from "../common/CommonWrapperLayout";

export default function HomeLayout() {
  return (
    <div>
      <CommonWrapperLayout isFromHome>
        <CarouselLayout />
        <Typography variant="h6">Sri Lanka's Largest Fashion Store</Typography>
        <ButtonListLayout />
      </CommonWrapperLayout>
    </div>
  );
}
