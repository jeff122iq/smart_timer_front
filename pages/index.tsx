// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import { Home } from "../components/Home";
import { Body } from "../components/layouts/Body";
import { CurrentPage } from "../store/currentPage";

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export default function Index() {
  const { setCurrentPage } = CurrentPage;
  setCurrentPage("Home");
  return (
    <Body>
      <Home />
    </Body>
  );
}
// ========================== COMPONENT ====================================
