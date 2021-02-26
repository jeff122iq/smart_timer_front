import BodyAdmin from "../components/layouts/BodyAdmin"
import AdminHome from "../components/Admin/AdminHome";
import {CurrentPage} from "../store/currentPage";


export default function adminPage() {
    const { setCurrentPage } = CurrentPage;
    setCurrentPage("Home");

    return (
        <BodyAdmin>
            <AdminHome/>
        </BodyAdmin>
    )
}
