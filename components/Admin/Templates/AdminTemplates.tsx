import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import {EditTemplates} from "../../../store/admin/editTemplates";
import {observer} from "mobx-react";
import useStyles from "../../../styles/admin/editTag";
import {TemplateDocumentButton} from "../../TemplateDocumentButton";
import {name} from "next/dist/telemetry/ci-info";
import Modal from "@material-ui/core/Modal";
import AdminAddNewTag from "../Tags/AdminAddNewTag";
import AdminAddNewTemplate from "./AdminAddNewTemplate";
import Router from "next/router";


const AdminTemplates = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { getTemplates, template } = EditTemplates;
    useEffect(() => {
        const getData = async() => {
            return (
            await getTemplates()
            )
            console.log(template)
        };
        getData();
    },[])

    const newTemplate = () => {

    }

    const handleClose = () => {
        setOpen(false);
    };

    const addNewTemplate = async() => {
        await Router.push("/admin/add_new_template")
    };

    return (
        <Container style={{maxWidth: 1365}}>
            <h1 style={{marginTop: 150, color: "#FFFFFF"}}>
                Templates
            </h1>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                flexWrap: "wrap",}}>
            {template.map((brief, index) => {
                return (
                        <div key={index} style={{
                            backgroundColor: "#2962ff",
                            margin: "0 10px 15px 0",
                            display: "flex",
                            alignItems: "center",
                            padding: "5px 10px",
                            borderRadius: 3

                        }}>
                            <h1 style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: 16,
                                margin: 0,
                            }}>{brief.name}</h1>
                            <TemplateDocumentButton name={""} id={""}/>
                        </div>
                )
            }
            )
            }
</div>
            <button onClick={addNewTemplate} style={{
                border: "2px solid rgb(168 168 168)",
                borderRadius: 0,
                backgroundColor: "white",
                padding: "10px 30px",
                fontSize: 25,
                color: "rgb(189 189 189)",
                cursor: "pointer",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                marginTop: 40,
                outline: "none"
            }}>Add new template</button>
        </Container>
    );
};

export default observer(AdminTemplates);