import BodyAdmin from "../components/layouts/BodyAdmin"
import AdminHome from "../components/Admin/AdminHome";
import {CurrentPage} from "../store/currentPage";
import React from "react";
import jwt_decode from "jwt-decode";
import {Router, useRouter} from "next/router";

function adminPage() {
    const router = useRouter();
    const [isToken, setIsToken] = React.useState("");
    const { setCurrentPage } = CurrentPage;
    React.useEffect(() => {
        setIsToken(() => window.localStorage.getItem("token"))

    }, [])
    React.useEffect(()=>{
        if(!isToken) return;
        const decode_role: any = jwt_decode(isToken);
        if (decode_role.role === "default") {
            router.push("/")
            return
        }
        router.push("/admin");
    }, [isToken])

    setCurrentPage("Home");

    return (
        <BodyAdmin>
            <AdminHome/>
        </BodyAdmin>
    )
}
// adminPage.getInitialProps = async(isToken) => {
//     if (!isToken) {
//         await Router.push("/");
//     }
// }
export default adminPage;