import React from "react";
import { Typography } from "@mui/material";
import ButtonListLayout from "./home/ButtonListLayout";
import CarouselLayout from "./home/CarouselLayout";
import CommonWrapperLayout from "./common/CommonWrapperLayout";

export default function HomeLayout() {
  return (
    <div>
      <CommonWrapperLayout>
        <CarouselLayout />
        <Typography variant="h6">Sri Lanka's Largest Fashion Store</Typography>
        <ButtonListLayout />
      </CommonWrapperLayout>
    </div>
  );
}
