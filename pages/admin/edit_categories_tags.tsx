import React from 'react';
import BodyAdmin from "../../components/layouts/BodyAdmin";
import AdminEditTag from "../../components/Admin/Category/AdminCategories";
import { CurrentPage } from "../../store/currentPage";

const edit_categories_tags = () => {
    const { setCurrentPage } = CurrentPage;
    setCurrentPage("Edit tag");
    return (
        <BodyAdmin>
            <AdminEditTag/>
        </BodyAdmin>
    );
};

export default edit_categories_tags;