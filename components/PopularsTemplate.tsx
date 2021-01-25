// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";
import Paginator from "./Paginator";
import useStyles from "../styles/popularsTemplates";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const PopularsTemplate = () => {
  const classes = useStyles();
  return (
    // <Container maxWidth="sm" disableGutters={true}	 style={{background: '#e3f4'}}>
    <div className={classes.rootPopulars}>
      <div className={classes.popularsTitle}>
        <SvgIcon className={classes.iconLamp}>
          <EmojiObjectsIcon />
        </SvgIcon>
        <Typography className={classes.title} variant="h4">
          Populars
        </Typography>
      </div>
      <div className={classes.cardsWrapper}>
        <div className={classes.popularsCard}>
          <Typography className={classes.cardTitle} variant="h4">
            Title
          </Typography>
          <div className={classes.popularsCardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            culpa aut debitis ea. Adipisci voluptas rerum tempore eaque
            excepturi fugit? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Aliquid modi dolorem nihil cumque culpa voluptates eum animi!
            Natus quos distinctio blanditiis libero quis adipisci? Hic vero sunt
            quisquam, voluptate ipsa natus sequi corrupti ipsam eum!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            culpa aut debitis ea. Adipisci voluptas rerum tempore eaque
            excepturi fugit? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Aliquid modi dolorem nihil cumque culpa voluptates eum animi!
            Natus quos distinctio blanditiis libero quis adipisci? Hic vero sunt
            quisquam, voluptate ipsa natus sequi corrupti ipsam eum!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            culpa aut debitis ea. Adipisci voluptas rerum tempore eaque
            excepturi fugit? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Aliquid modi dolorem nihil cumque culpa voluptates eum animi!
            Natus quos distinctio blanditiis libero quis adipisci? Hic vero sunt
            quisquam, voluptate ipsa natus sequi corrupti ipsam eum!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            culpa aut debitis ea. Adipisci voluptas rerum tempore eaque
            excepturi fugit? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Aliquid modi dolorem nihil cumque culpa voluptates eum animi!
            Natus quos distinctio blanditiis libero quis adipisci? Hic vero sunt
            quisquam, voluptate ipsa natus sequi corrupti ipsam eum!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            culpa aut debitis ea. Adipisci voluptas rerum tempore eaque
            excepturi fugit? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Aliquid modi dolorem nihil cumque culpa voluptates eum animi!
            Natus quos distinctio blanditiis libero quis adipisci? Hic vero sunt
            quisquam, voluptate ipsa natus sequi corrupti ipsam eum!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            culpa aut debitis ea. Adipisci voluptas rerum tempore eaque
            excepturi fugit? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Aliquid modi dolorem nihil cumque culpa voluptates eum animi!
            Natus quos distinctio blanditiis libero quis adipisci? Hic vero sunt
            quisquam, voluptate ipsa natus sequi corrupti ipsam eum!
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

export default PopularsTemplate;
// ========================== COMPONENT ====================================
