import React from "react";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

export default function CommonWrapperLayout({ children, isFromHome }) {
  return (
    <div>
      <HeaderLayout />
      <div style={{ padding: isFromHome ? "0" : "8%" }}>{children}</div>
      <FooterLayout />
    </div>
  );
}
