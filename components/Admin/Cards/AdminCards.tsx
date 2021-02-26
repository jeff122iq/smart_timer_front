import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import {observer} from 'mobx-react'
import AdminMainCardField from "./AdminMainCardField";
import AdminSecondaryCardField from "./AdminSecondaryCardField";
import {EditTagAndCategories} from "../../../store/admin/editTagAndCategories";
import useStyles from "../../../styles/admin/adminCards";
import {useRouter} from "next/router";


const AdminCards = () => {
    const classes = useStyles();
    let {getTagCard, tagCurrent} = EditTagAndCategories;
    const router = useRouter();
    console.log(tagCurrent);

    useEffect(() => {
        const getData = async() => {
            if (!tagCurrent) {
                return await router.push("/admin")
            }
            await getTagCard(tagCurrent.id)
        };
        getData()
    }, [])
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
        }}>
            <div style={{
                width: "100%",
                backgroundColor: "white"
            }}>
                <Container style={{maxWidth: 1365}}>
                <div className={classes.contents}>
                <AdminMainCardField/>
                <AdminSecondaryCardField/>
                </div>
            </Container>
            </div>
        </div>
    );
};

export default observer(AdminCards);