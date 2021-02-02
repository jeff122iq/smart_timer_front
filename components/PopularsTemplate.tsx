// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";
import Paginator from "./Paginator";
import useStyles from "../styles/popularsTemplates";
import { CardStore } from "../store/cardStore";
import { observer } from "mobx-react";
import Modal from "@material-ui/core/Modal";
import DescriptionModal from "./DescriptionModal";

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const PopularsTemplate = ({ handleOpenModal }) => {
  const { card, createCard, switchCard } = CardStore;
  const [cards, setCard] = useState();

  const handleSwitchCard = () => {
    switchCard();
  };
  const classes = useStyles();
  return (
    // <Container maxWidth="sm" disableGutters={true}	 style={{background: '#e3f4'}}>
    <div className={classes.rootPopulars}>
      <div className={classes.popularsTitle}>
        <SvgIcon className={classes.iconLamp}>
          <EmojiObjectsIcon />
        </SvgIcon>
        <Typography className={classes.title} variant="h4">
          Popular
        </Typography>
      </div>
      <div className={classes.cardsWrapper}>
        <div className={classes.popularsCard}>
          <Typography className={classes.cardTitle} variant="h4">
            Title
          </Typography>
          <div
            className={classes.popularsCardDescription}
            onClick={handleOpenModal}
          >
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an... unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic
            typesetting...essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like... Aldus
            PageMaker including versions of Lorem Ipsum....
          </div>
          <div className={classes.popularsCardFooter}>
            <Button
              className={classes.popularsActionsAddBtn}
              onClick={handleSwitchCard}
            >
              Add
            </Button>
          </div>
        </div>
        <div className={classes.popularsCard}>
          <Typography className={classes.cardTitle} variant="h4">
            Title
          </Typography>
          <div className={classes.popularsCardDescription}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an... unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic
            typesetting...essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like... Aldus
            PageMaker including versions of Lorem Ipsum....
          </div>
          <div className={classes.popularsCardFooter}>
            <Button className={classes.popularsActionsAddBtn}>Add</Button>
          </div>
        </div>
        <div className={classes.popularsCard}>
          <Typography className={classes.cardTitle} variant="h4">
            Title
          </Typography>
          <div className={classes.popularsCardDescription}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an... unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic
            typesetting...essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like... Aldus
            PageMaker including versions of Lorem Ipsum....
          </div>
          <div className={classes.popularsCardFooter}>
            <Button className={classes.popularsActionsAddBtn}>Add</Button>
          </div>
        </div>
        <div className={classes.popularsCard}>
          <Typography className={classes.cardTitle} variant="h4">
            Title
          </Typography>
          <div className={classes.popularsCardDescription}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an... unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic
            typesetting...essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like... Aldus
            PageMaker including versions of Lorem Ipsum....
          </div>
          <div className={classes.popularsCardFooter}>
            <Button className={classes.popularsActionsAddBtn}>Add</Button>
          </div>
        </div>
        <div className={classes.popularsCard}>
          <Typography className={classes.cardTitle} variant="h4">
            Title
          </Typography>
          <div className={classes.popularsCardDescription}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an... unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic
            typesetting...essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like... Aldus
            PageMaker including versions of Lorem Ipsum....
          </div>
          <div className={classes.popularsCardFooter}>
            <Button className={classes.popularsActionsAddBtn}>Add</Button>
          </div>
        </div>
        <div className={classes.popularsCard}>
          <Typography className={classes.cardTitle} variant="h4">
            Title
          </Typography>
          <div className={classes.popularsCardDescription}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an... unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic
            typesetting...essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like... Aldus
            PageMaker including versions of Lorem Ipsum....
          </div>
          <div className={classes.popularsCardFooter}>
            <Button className={classes.popularsActionsAddBtn}>Add</Button>
          </div>
        </div>
      </div>

      <div className={classes.pagination}>
        <Paginator count={10} />
      </div>
    </div>
  );
};

export default observer(PopularsTemplate);
// ========================== COMPONENT ====================================
