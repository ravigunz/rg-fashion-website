import React from "react";
import { Button } from "@mui/material";

export default function SliderComponent({ image, isButtonVisible }) {
  return (
    <div style={{ position: "relative" }}>
      {isButtonVisible && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "80vh",
            display: "flex",
          }}
        >
          <div style={{ margin: "0 auto", marginTop: "20%" }}>
            <Button
              style={{
                color: "white",
                border: "1px solid white",
                borderRadius: "20px",
                fontSize: "30px",
                padding: "5px, 20px",
              }}
              sx={{ "&:hover": { bgcolor: "black" } }}
              variant="outlined"
            >
              Shop Now
            </Button>
          </div>
        </div>
      )}
      <img alt="slider" src={image} width="100%" />
    </div>
  );
}
