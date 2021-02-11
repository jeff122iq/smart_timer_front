// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, {useEffect, useState} from "react";
import BriefTemplate from "../components/BriefTemplate";
import { Body } from "../components/layouts/Body";
import { CurrentPage } from "../store/currentPage";
import {CardStore} from "../store/cardStore"

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const templates = () => {
  const { setCurrentPage } = CurrentPage;
  setCurrentPage("Brief template");
  return (
    <Body>
      <BriefTemplate />
    </Body>
  );
};

export default templates;
// ========================== COMPONENT ====================================
