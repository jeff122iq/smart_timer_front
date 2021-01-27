// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paginator from "./Paginator";
import useStyles from "../styles/popularsTemplates";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const AdditionalTemplate = () => {
  const classes = useStyles();
  return (
    // <Container maxWidth="sm" disableGutters={true}	 style={{background: '#e3f4'}}>
    <div className={classes.rootPopulars}>
      <div className={classes.popularsTitle}>
        <Typography className={classes.title} variant="h4">
          Additional
        </Typography>
      </div>
      <div className={classes.cardsWrapper}>
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
        <Paginator pages={10} />
      </div>
    </div>
  );
};

export default AdditionalTemplate;
// ========================== COMPONENT ====================================
