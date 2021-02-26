import React, {useState} from 'react';
import useStyles from "../../../styles/admin/adminAddNewTag"
import {EditTagAndCategories} from "../../../store/admin/editTagAndCategories";

const AdminEditCurrentCaregory = (props:any) => {
    const {createCategory, categories} = EditTagAndCategories;
    const classes = useStyles();
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleEdit = (event) => {
        event.preventDefault();
        if(!name){
            setError("Введите имя категории!");
        } else {
            setError("");
        }
        props.setOpen(false);
    }
    const handleClose = () => {
        props.setOpen(false);
    }

    return (
        <div className={classes.root}>
            <form className={classes.modalContainer}>
                {!name ?
                    <p style={{
                        width: "100%",
                        color: "red",
                        backgroundColor: "#ffffff",
                        margin: 0,
                        padding: "0 15px"
                    }}>Введите название</p> : ""}
                {categories.map((category, id) => {
                    return(
                        <textarea value={category.name} onChange={(event) => setName(event.target.value)} style={{ resize: "none"}} placeholder={"Category"}/>
                    )
                }
                )}
                <footer className={classes.footer}>
                    <button onClick={handleClose}>close</button>
                    <button disabled={!name} onClick={handleEdit}>edit</button>
                </footer>
            </form>
        </div>
    );
}

export default AdminEditCurrentCaregory;