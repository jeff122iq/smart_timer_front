// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import { Body } from "../components/layouts/Body";
import CreatePage from "../components/Create";
import { CurrentPage } from "../store/currentPage";

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export default function Create() {
  const { setCurrentPage } = CurrentPage;
  setCurrentPage("Create brief");
  return (
    <Body>
      <CreatePage />
    </Body>
  );
}
// ========================== COMPONENT ====================================
