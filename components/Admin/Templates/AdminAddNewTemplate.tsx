import React, {useState} from 'react';
import useStyles from "../../../styles/admin/adminAddNewTag";
import {EditTemplates} from "../../../store/admin/editTemplates";

const AdminAddNewTemplate = (props:any) => {
    const {} = EditTemplates;
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
                        fontSize: "10px",
                        width: "100%",
                        color: "red",
                        backgroundColor: "#ffffff",
                        margin: 0,
                        padding: "10px 20px 0 20px",
                    }}>Введите имя темплейта!</p> : ""}
                <textarea value={name} onChange={(event) => setName(event.target.value)} style={{ resize: "none"}} placeholder={"Template"}/>
                <footer className={classes.footer}>
                    <button onClick={handleClose}>close</button>
                    <button disabled={!name} style={!name ? {color: "#87abff"} : {color: "#2b62ff"}} onClick={handleEdit}>Add</button>
                </footer>
            </form>
        </div>
    );
};

export default AdminAddNewTemplate;