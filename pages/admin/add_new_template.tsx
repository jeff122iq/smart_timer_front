import React from 'react';
import BodyAdmin from "../../components/layouts/BodyAdmin";
import {Container} from "@material-ui/core";
import useStyles from "../../styles/admin/adminAddNewTemplate"
import AdminTemplateMainField from "../../components/Admin/Templates/AdminTemplateMainField";
import AdminTemplateSecondaryField from "../../components/Admin/Templates/AdminTemplateSecondaryField";

const AddNewTemplate = () => {
    const classes = useStyles();
    return (
        <BodyAdmin>
            <div style={{
                width: "100%",
                backgroundColor: "#ffffff"
            }}>
            <Container style={{maxWidth: 1365}}>
                <div className={classes.templatePageContainer}>
                    <AdminTemplateMainField/>
                    <AdminTemplateSecondaryField/>
                </div>
            </Container>
            </div>
        </BodyAdmin>
    );
};

export default AddNewTemplate;