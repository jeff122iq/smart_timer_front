// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import { CurrentPage } from "../../store/currentPage";
import AdminAbout from "../../components/Admin/AdminAbout";
import BodyAdmin from "../../components/layouts/BodyAdmin";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export default function About() {
  const { setCurrentPage } = CurrentPage;
  setCurrentPage("About");

  return (
    <BodyAdmin>
      {" "}
      <AdminAbout/>{" "}
    </BodyAdmin>
  );
}
// ========================== COMPONENT ====================================
