// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paginator from "./Paginator";
import useStyles from "../styles/popularsTemplates";
import PopupPopularTemplate from "./PopupPopularTemplate";
import {TagsStore} from "../store/tagsStore";
import { CardStore } from "../store/cardStore";
import { observer } from "mobx-react";
import {BriefStore} from "../store/briefStore";

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const AdditionalTemplate = () => {
    const { cardsArray, createCard, cardsData } = CardStore;
    const [cards, setCard] = useState();
    const {selectedTags} = TagsStore;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(cardsArray.length / 2);
    const handlePagination = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
    };


    useEffect(() => {
        async function  getData(){
            await cardsData(selectedTags);
        }
        getData()
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.rootPopulars}>

            <div className={classes.popularsTitle}>
                <Typography className={classes.title} variant="h4">
                    Additional
                </Typography>
            </div>
            <div className={classes.cardsWrapper}>
                {cardsArray.slice((page - 1) * 2, page * 6).map(({title, description}) => {
                    return(<PopupPopularTemplate card={{title, description}}/>)
                })
                }
            </div>

            <div className={classes.pagination}>
                <Paginator     count={totalPages}
                               page={page}
                               onChange={handlePagination}/>
            </div>
        </div>
    );
};

export default observer(AdditionalTemplate);
// ========================== COMPONENT ====================================
