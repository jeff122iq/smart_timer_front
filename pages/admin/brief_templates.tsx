import React from 'react';
import BodyAdmin from "../../components/layouts/BodyAdmin";
import AdminBriefTemplate from "../../components/Admin/AdminBriefTemplate";
import { CurrentPage } from "../../store/currentPage";

const BriefTeplates = () => {
    const { setCurrentPage } = CurrentPage;
    setCurrentPage("Brief template");
    return (
        <BodyAdmin>
            <AdminBriefTemplate/>
        </BodyAdmin>
    );
};

export default BriefTeplates;