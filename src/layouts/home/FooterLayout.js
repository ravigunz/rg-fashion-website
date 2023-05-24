import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function FooterLayout() {
  return (
    <Box
      sx={{ p: 1 }}
      style={{
        backgroundColor: "teal",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
    >
      <div>
        <small>© Copyright {new Date().getFullYear()} rgFashion</small>
      </div>

      <div>
        <span> Developed by_</span>
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://bemmulla.com"
        >
          Ravi Gunasena
        </a>
      </div>
      <Button
        variant="contained"
        sx={{
          bgcolor: "white",
          color: "teal",
          borderRadius: "20px",
          fontSize: "10px",
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "grey",
          },
        }}
      >
        Need to Learn?
      </Button>
    </Box>
  );
}
