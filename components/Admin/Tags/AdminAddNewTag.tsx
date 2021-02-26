import React, {useState} from 'react';
import useStyles from "../../../styles/admin/adminAddNewTag"
import {EditTagAndCategories} from "../../../store/admin/editTagAndCategories";

const AdminAddNewTag = (props:any) => {
    const {createCategoryTag} = EditTagAndCategories;
    const classes = useStyles();
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleCreate = (event) => {
        event.preventDefault();
        createCategoryTag(name);
        if(!name){
            setError("Введите имя тэга!");
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
                    fontSize: "10px",
                    width: "100%",
                    color: "red",
                    backgroundColor: "#ffffff",
                    margin: 0,
                    padding: "10px 20px 0 20px",
                }}>Введите имя тэга!</p> : ""}
            <textarea value={name} onChange={(event) => setName(event.target.value)} style={{ resize: "none"}} placeholder={"Tag"}/>
            <footer className={classes.footer}>
            <button onClick={handleClose}>close</button>
                <button disabled={!name} style={!name ? {color: "#87abff"} : {color: "#2b62ff"}} onClick={handleCreate}>Add</button>
            </footer>
        </form>
        </div>
    );
};

export default AdminAddNewTag;