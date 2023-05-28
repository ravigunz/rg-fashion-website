import React from "react";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

export default function CommonWrapperLayout({ children }) {
  return (
    <div>
      <HeaderLayout />
      <div style={{ padding: "0 8%" }}>{children}</div>
      <FooterLayout />
    </div>
  );
}
