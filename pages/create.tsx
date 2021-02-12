// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import { Body } from "../components/layouts/Body";
import CreatePage from "../components/Create";
import { CurrentPage } from "../store/currentPage";
import {SignIn} from "../components/SignIn";

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export default function Create() {
  const { setCurrentPage } = CurrentPage;
  const [isToken, setIsToken] = React.useState("");
  React.useEffect(() => {
    setIsToken(window.localStorage.getItem("token"))
  }, )
  setCurrentPage("Create brief");
  return (
    <Body>
      {isToken ? <CreatePage /> : <SignIn/> }
    </Body>
  );
}
// ========================== COMPONENT ====================================
