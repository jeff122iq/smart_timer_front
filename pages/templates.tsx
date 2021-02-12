// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, {useEffect, useState} from "react";
import BriefTemplate from "../components/BriefTemplate";
import { Body } from "../components/layouts/Body";
import { CurrentPage } from "../store/currentPage";
import {SignIn} from "../components/SignIn";

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const templates = () => {
  const { setCurrentPage } = CurrentPage;
  const [isToken, setIsToken] = React.useState("");
  React.useEffect(() => {
    setIsToken(window.localStorage.getItem("token"))
  }, )
  setCurrentPage("Brief template");
  return (
    <Body>
      {
        isToken ? <BriefTemplate/> : <SignIn/>
      }
    </Body>
  );
};

export default templates;
// ========================== COMPONENT ====================================
