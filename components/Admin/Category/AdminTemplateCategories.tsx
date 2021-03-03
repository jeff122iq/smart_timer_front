import React, {useEffect, useState} from 'react';
import {Button, Container} from "@material-ui/core";
import useStyles from "../../../styles/admin/editTag";
import AdminTemplateButton from "../AdminTemplateButton";
import {EditTagAndCategories} from "../../../store/admin/editTagAndCategories";
import Modal from '@material-ui/core/Modal';
import AdminAddNewCategory from "./AdminAddNewCategory";
import {observer} from "mobx-react";
import {useRouter} from "next/router";
import Link from "next/link";

const AdminTemplateCategories = () => {
    let {createCategory, categories, getCategories, setCurrentCategory} = EditTagAndCategories;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState([]);
    const router = useRouter();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const getData = async() => {
            await getCategories()
        };
        setCategory(categories);
        getData()
    }, [categories])

    return (
        <Container style={{maxWidth: 1365}}>
            <div className={classes.editTagContainer}>
                {!categories.length ?
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h2 style={{
                            color: "white",
                            margin: 0,
                            fontFamily: "Roboto, sans-serif",
                            fontSize: 30,
                        }}>No categories created yet...</h2>
                        <p style={{color: "white",}}>
                            Please create the desired category.
                        </p>
                    </div>
                    :
                    categories.map((category, idx) => {
                            return(
                                <div key={idx} className={classes.tagContainer}>
                                    <Link href={"/admin/edit_templates"}>
                                        <p onClick={() => setCurrentCategory(category)}>{category.name}</p>
                                    </Link>
                                    <AdminTemplateButton name={category.name} id={category.id} key={idx}/>
                                </div>
                            )
                        }
                    )}
            </div>
            <Button onClick={handleOpen} style={{
                border: "2px solid #a8a8a8",
                borderRadius: "0",
                backgroundColor: "white",
                padding: "10px 30px",
                textTransform: "none",
                fontFamily: "Roboto, sans-serif",
                fontSize: "25px",
                color: "#bdbdbd",
                marginTop: "40px"
            }}>Add new category</Button>
            <Modal open={open} onClose={handleClose}>
                <AdminAddNewCategory open={open} setOpen={setOpen}/>
            </Modal>
        </Container>
    );
}

export default observer(AdminTemplateCategories);