// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import { Body } from "../components/layouts/Body";
import Blog from "../components/Blog";
import { CurrentPage } from "../store/currentPage";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export default function blog() {
  const { setCurrentPage } = CurrentPage;
  setCurrentPage("Blog");
  
  return (
    <Body>
      <Blog />
    </Body>
  );
}
// ========================== COMPONENT ====================================
