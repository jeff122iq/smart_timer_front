import React, {useState} from 'react';
import {observer} from "mobx-react";
import useStyles from "../../../styles/admin/adminSecondaryCardField"
import Paginator from "../../Paginator";
import { CardStore } from "../../../store/cardStore";
import MUIRichTextEditor from "../../mui-rte/MUIRichTextEditor";
import {ButtonBase, Collapse} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import AdminEditSecondaryCard from "../Cards/AdminEditSecondaryCard";
import {createStyles, withStyles} from "@material-ui/core/styles";
import {EditTagAndCategories} from "../../../store/admin/editTagAndCategories";

const AdminTemplateSecondaryField = () => {
    const CustomButton = withStyles(() => {
        createStyles({
            focusVisible: {
                display: "none",
            },
        });
    })(ButtonBase);
    const { cardsArray, createCard, cardsData } = CardStore;
    const {isSecondaryField} =EditTagAndCategories;
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [writeDescription, setWriteDescription] = useState(false);
    const [openCurrent, setOpenCurrent] = useState(false);
    const [openCard, setOpenCard] = useState(true);
    const totalPages = Math.ceil(cardsArray.length / 6);
    const classes = useStyles();
    const closeModal = () => {
        setOpen(false)
    }
    const handleWriteDescription = () => {
        setWriteDescription(!writeDescription);
        setOpen(true);
    };
    const handlePagination = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
    };
    return (
        <div style={{
            width: "50%",
            backgroundColor: "#f2bc1b",
            minHeight: "inherit",
            padding: "130px 20px 0 20px"
        }}>
            <h1 style={{
                color: "#ffffff",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500
            }}>Additional</h1>
            <div className={classes.cardsContainer}>
                {isSecondaryField.slice((page - 1) * 6, page * 6)
                    .map((card: any, index) => {
                        return (
                            <div
                                key={index}
                                className={classes.card}>
                                <h1>{card.title}</h1>
                                <p>
                                    <MUIRichTextEditor
                                        defaultValue={card.description}
                                        controls={[]}
                                        readOnly
                                    />
                                </p>
                                <footer style={{
                                    width: "100%",
                                    padding: "26px 0",
                                    backgroundColor: "white",
                                    position: "absolute",
                                    left: 0,
                                    borderTop: "1px solid #b7b7b7",
                                    bottom: 0,
                                    cursor: "pointer",
                                }}>
                                </footer>
                            </div>
                        )
                    })}
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Paginator
                        count={totalPages}
                        page={page}
                        onChange={handlePagination}
                    />

                </div>
                <CustomButton
                    className={classes.descriptionBtn}
                    onClick={handleWriteDescription}
                >
                    Write description
                </CustomButton>
                <Modal
                    onClose={closeModal}
                    open={open}
                    style={{ width: "100%", overflow: "scroll", zIndex: 1000 }}
                >
                    <AdminEditSecondaryCard
                        card={isSecondaryField}
                        setOpenCard={setOpenCard}
                        setOpen={setOpenCard}/>
                </Modal>

            </div>
        </div>
    );
};

export default observer(AdminTemplateSecondaryField);