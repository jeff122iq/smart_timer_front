// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paginator from "./Paginator";
import useStyles from "../styles/popularsTemplates";
import { CardStore } from "../store/cardStore";
import { observer } from "mobx-react";
import PopupPopularTemplate from "./PopupPopularTemplate";
import {TagsStore} from "../store/tagsStore";
import {EditTemplates} from "../store/admin/editTemplates";
import {TemplateDocumentButton} from "./TemplateDocumentButton";
import AdminTemplateBriefButton from "./Admin/Templates/AdminTemplateBriefButton";

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const PopularsTemplate = () => {
    const { cardsArray, cardsData } = CardStore;
    const {selectedTags} = TagsStore;
    const { getTemplates, template } = EditTemplates;
    const [cards, setCard] = useState();
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
            await getTemplates();
        }
        getData()
    }, []);

  const classes = useStyles();
  return (
    <div className={classes.rootPopulars}>

      <div className={classes.popularsTitle}>
        <i className="fas fa-lightbulb"/>
        <Typography className={classes.title} variant="h4">
          Popular
        </Typography>
      </div>
        <div style={{
            marginTop: 15,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            flexWrap: "wrap",}}>
            {template.map((brief, index) => {
                    return (
                        <div key={index} style={{
                            backgroundColor: "#2962ff",
                            margin: "0 10px 15px 0",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: 3,

                        }}>
                            <h1 style={{
                                color: "white",
                                marginLeft: 10,
                                fontWeight: 500,
                                fontSize: 16
                            }}>{brief.name}</h1>
                            <AdminTemplateBriefButton name={brief.name} id={brief.id}/>
                        </div>
                    )
                },
            )
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

export default observer(PopularsTemplate);
// ========================== COMPONENT ====================================
