import React, {useEffect, useState} from 'react';
import {Button, Container} from "@material-ui/core";
import useStyles from "../../../styles/admin/editTag";
import AdminTemplateTagButton from "../Tags/AdminTemplateTagButton";
import {EditTagAndCategories} from "../../../store/admin/editTagAndCategories";
import Modal from '@material-ui/core/Modal';
import {observer} from "mobx-react";
import {useRouter} from "next/router";
import AdminAddNewTag from "./AdminAddNewTag";
import Link from "next/link";

const AdminTags = () => {
    let {tags, getCategoriesTags, categoryCurrent,setCurrentTag} = EditTagAndCategories;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [tag, setTag] = useState([]);
    const router = useRouter();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const getData = async() => {
            try {
                if (!categoryCurrent) {
                    return await router.push("/admin")
                }
                await getCategoriesTags(categoryCurrent.id);
            } catch (error) {
                console.log(error);
            }

        };
        setTag(tags);
        getData()
    }, [tags])

    return (
        <Container style={{maxWidth: 1365}}>
        <div className={classes.editTagContainer}>
                {!tags.length ?
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h2 style={{
                            color: "white",
                            margin: 0,
                            fontFamily: "Roboto, sans-serif",
                            fontSize: 30,
                        }}>No tags created yet...</h2>
                        <p style={{color: "white",}}>
                            Please create the desired tag.
                        </p>
                    </div>
                    :

                    tags.map((tag, idx) => {
                    return (
                        <div key={idx} className={classes.tagContainer}>
                            <Link href={"/admin/edit_cards"}>
                                <p onClick={() => setCurrentTag(tag)} >{tag.name}</p>
                            </Link>
                            <AdminTemplateTagButton name={tag.name} id={tag.id} key={idx}/>
                        </div>
                    )
                })}
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
            }}>Add new tag</Button>
            <Modal open={open} onClose={handleClose}>
                <AdminAddNewTag open={open} setOpen={setOpen}/>
            </Modal>
        </Container>
    );
}
export default observer(AdminTags);