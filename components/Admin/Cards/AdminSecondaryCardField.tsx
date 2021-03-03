import React, {useEffect, useState} from 'react';
import {EditTagAndCategories} from "../../../store/admin/editTagAndCategories";
import {observer} from "mobx-react";
import useStyles from "../../../styles/admin/adminSecondaryCardField"
import {ButtonBase} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import MUIRichTextEditor from "../../mui-rte/MUIRichTextEditor";
import AdminEditSecondaryCard from "./AdminEditSecondaryCard";
import {createStyles, withStyles} from "@material-ui/core/styles";
import Paginator from "../../Paginator";
import {ICard} from "../../../interface/cards";

const AdminSecondaryCardField = () => {
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [writeDescription, setWriteDescription] = useState(false);
    const [open, setOpen] = useState(false);
    const [openCurrent, setOpenCurrent] = useState(false);
    const [openCard, setOpenCard] = useState(true);
    const [selectedSecondaryCard, setSelectedSecondaryCard] = useState<ICard>();
    const handlePagination = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
    };
    const CustomButton = withStyles(() => {
        createStyles({
            focusVisible: {
                display: "none",
            },
        });
    })(ButtonBase);
    const {isSecondaryField} =EditTagAndCategories;
    const totalPages = Math.ceil(isSecondaryField.length / 6);
    const [cards,setCards] = useState([])
    const closeModal = () => {
        setOpen(false)
    }
    const handleWriteDescription = () => {
        setWriteDescription(!writeDescription);
        setOpen(true);
    };

    const handleOpenCurrent = (secondaryCard: ICard) => {
        setSelectedSecondaryCard(secondaryCard);
        // setOpen(true);
        setOpenCurrent(true);
        setOpenCard(!openCard)
        console.log('opeCard OPEN', openCard)
    };

    const handleCloseCurrent = () => {
        setOpenCurrent(false);
    }

    useEffect(()=>{
        setCards(isSecondaryField)
    },[])

    return (
        <div className={classes.additionalContainer}>
            <div style={{width: "100%",}}>
                <h1>
                    Additional
                </h1>
                <div className={classes.cardsContainer}>
                    {cards.slice((page - 1) * 6, page * 6)
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
                                <footer  onClick={() =>handleOpenCurrent(selectedSecondaryCard)} style={{
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

                </div>
            </div>
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
            <Modal
                onClose={handleCloseCurrent}
                open={openCurrent}
                style={{ width: "100%", overflow: "scroll", zIndex: 1000 }}
            >
                <AdminEditSecondaryCard
                    card={isSecondaryField}
                    setOpenCard={setOpenCard}
                    setOpen={setOpenCurrent}/>
            </Modal>
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
    );
};

export default observer(AdminSecondaryCardField);