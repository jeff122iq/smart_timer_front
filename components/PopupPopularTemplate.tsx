import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { CardStore } from "../store/cardStore";
import { observer } from "mobx-react";
import useStyles from "../styles/popupPopularTamplate"
import useStyles1 from "../styles/popularsTemplates";
import {Typography} from "@material-ui/core";

const PopupPopularTemplate=({card}) => {
    const classes = useStyles();
    const classes1 = useStyles1();
    const { createCard, cardsArray, addCard } = CardStore;
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    useEffect(() => {
        createCard({
            title: "",
            text: "",
        });
    }, []);

    // const [tags, setTags] = useState(cardsArray);
    const handleSwitchCard = () => {
        addCard(card)
        handleCloseModal();
    };

    return (
        <>
            <div className={classes1.popularsCard}>
                <Typography className={classes1.cardTitle} variant="h4">
                    {card.title}
                </Typography>
                <div
                    className={classes1.popularsCardDescription}
                >
                    {card.description}
                </div>
                <div className={classes1.popularsCardFooter}>
                    <Button
                        className={classes1.popularsActionsAddBtn}
                        onClick={handleOpenModal}
                    >
                        Add
                    </Button>
                </div>
            </div>
            <div className={classes.popup}>
                <Dialog onClose={handleCloseModal} aria-labelledby="customized-dialog-title" open={modalOpen}>
                    <div className={classes.title}>
                        <h1>{card.title}</h1>
                    </div>
                    <div className={classes.text}>
                        <p>{card.description}</p>
                    </div>
                    <div className={classes.footer}>
                        <Button autoFocus onClick={handleSwitchCard} color="primary">
                            Add
                        </Button>
                    </div>
                </Dialog>
            </div>
        </>

    );
}

export default observer(PopupPopularTemplate)