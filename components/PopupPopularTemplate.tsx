import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { CardStore } from "../store/cardStore";
import { observer } from "mobx-react";
import useStyles from "../styles/popupPopularTamplate"

const PopupPopularTemplate=({handleCloseModal, modalOpen}) => {
    const classes = useStyles();
    const { createCard, card, cardsArray } = CardStore;

    useEffect(() => {
        createCard({
            title: "",
            text: "",
        });
    }, []);

    // const [tags, setTags] = useState(cardsArray);
    const { switchCard } = CardStore;
    const handleSwitchCard = () => {
        switchCard();
        handleCloseModal();
    };

    return (
        <div className={classes.popup}>
            <Dialog onClose={handleCloseModal} aria-labelledby="customized-dialog-title" open={modalOpen}>
                <div className={classes.title}>
                    {/*{CardStore.cardsArray*/}
                    {/*    .map((card: any, index: number) => {*/}
                    {/*        return (*/}
                                    <h1>Title</h1>
                        {/*    )*/}
                        {/*})}*/}
                </div>
                <div className={classes.text}>
                    {/*{CardStore.cardsArray*/}
                    {/*    .map((card: any, index: number) => {*/}
                    {/*        return (*/}
                                <p>Simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an... unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic
                                    typesetting...essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like... Aldus
                                    PageMaker including versions of Lorem Ipsum....</p>
                        {/*    )*/}
                        {/*})}*/}
                </div>
                <div className={classes.footer}>
                    <Button autoFocus onClick={handleSwitchCard} color="primary">
                        Add
                    </Button>
                </div>
            </Dialog>
        </div>
    );
}

export default observer(PopupPopularTemplate)