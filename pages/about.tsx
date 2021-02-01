// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import { Body } from "../components/layouts/Body";
import AboutPage from "../components/About";
import { CurrentPage } from "../store/currentPage";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export default function About() {
  const { setCurrentPage } = CurrentPage;
  setCurrentPage("About");

  return (
    <Body>
      {" "}
      <AboutPage />{" "}
    </Body>
  );
}
// ========================== COMPONENT ====================================
