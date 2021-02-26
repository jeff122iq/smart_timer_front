import React, {useState} from 'react';
import useStyles from "../../../styles/admin/adminAddNewTag"
import {EditTagAndCategories} from "../../../store/admin/editTagAndCategories";

const AdminAddNewCategory = (props:any) => {
    const {createCategory} = EditTagAndCategories;
    const classes = useStyles();
    const [name, setName] = useState();
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState("Введите имя категории!");

    const nameHandler = (event) => {
        setName(event.target.value)
        setNameDirty(false);
        if (!name) {
            setNameError("Введите имя категории!")
        } else {
            setNameError("");
        }
    }

    const blurHandler = (event) => {
        switch (event.target.name) {
            case "name":
                setNameDirty(true);
                break;
        }
    }

    const handleCreate = (event) => {
        event.preventDefault();
        createCategory(name);
        props.setOpen(false);
    }
    const handleClose = () => {
        props.setOpen(false);
    }

    return (
        <div className={classes.root}>
        <form className={classes.modalContainer}>
            {(nameDirty && nameError) && <p
                style={{
                    fontSize: "10px",
                    width: "100%",
                    color: "red",
                    backgroundColor: "#ffffff",
                    margin: 0,
                    padding: "10px 20px 0 20px",
                }}>{nameError}</p>}
            <textarea onBlur={event => blurHandler(event)} name={"name"} value={name} onChange={(event) => nameHandler(event)} style={{ resize: "none"}} placeholder={"Category"}/>
            <footer className={classes.footer}>
            <button onClick={handleClose}>close</button>
            <button disabled={!name} style={!name ? {color: "#87abff"} : {color: "#2b62ff"}} onClick={handleCreate}>Add</button>
            </footer>
        </form>
        </div>
    );
};

export default AdminAddNewCategory;