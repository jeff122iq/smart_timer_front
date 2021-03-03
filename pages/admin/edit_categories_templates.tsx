import React from 'react';
import BodyAdmin from "../../components/layouts/BodyAdmin";
import { CurrentPage } from "../../store/currentPage";
import AdminTemplateCategories from "../../components/Admin/Category/AdminTemplateCategories";

const EditCategoriesTemplates = () => {
    const { setCurrentPage } = CurrentPage;
    setCurrentPage("Brief template");
    return (
        <BodyAdmin>
            <AdminTemplateCategories/>
        </BodyAdmin>
    );
};

export default EditCategoriesTemplates;