// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, { useEffect, useState } from "react";
import "@material/react-text-field/dist/text-field.css";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SvgIcon from "@material-ui/core/SvgIcon";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Divider,
  Input,
  InputBase,
  TextField,
  Typography,
} from "@material-ui/core";
import { observer } from "mobx-react";
import Modal from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { CardStore } from "../store/cardStore";

import Tags from "./Tags";
import Paginator from "./Paginator";
import PopularsTemplate from "./PopularsTemplate";
import { TagsStore } from "../store/tagsStore";
// import DescriptionModal from "./DescriptionModal";
import useStyles from "../styles/brief-template";
import ModalIcon from "./ModalWindow";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
// =================MODAL=====================
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
// ==================MODAL====================

const BriefTemplate = (props) => {
  const classes = useStyles();
  const { tagLength } = TagsStore;
  const { createCard, card } = CardStore;

  useEffect(() => {
    createCard({
      title: "",
      text: "",
    });
  }, []);

  const [tags, setTags] = useState([]);
  const [actionsBurger, setActionsBurger] = useState(false);
  const handleActionsBurger = () => {
    setActionsBurger(!actionsBurger);
  };

  // ================MODAL==================
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  // ================MODAL==================

  const [writeDescription, setWriteDescription] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleWriteDescription = () => {
    setWriteDescription(!writeDescription);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.rootBriefTemplate}>
      <div className={classes.wrapper}></div>
      <div className={classes.wrapTopContent}>
        <div className={classes.briefTemplateTags}>
          <Tags />
        </div>
        {/* <Slide direction="right" style={{ visibility: tagLength ? "visible" : "hidden" }}> */}
        <div
          className={classes.briefTemplate_description}
          style={{ display: tagLength ? "block" : "none" }}
        >
          {tagLength ? (
            <Button
              className={classes.descriptionBtn}
              onClick={handleWriteDescription}
              // style={{animation: tagLength ? '3s ease-in 1s infinite reverse both running slidein' : '1s ease'}}
            >
              Write description
            </Button>
          ) : (
            ""
          )}
        </div>
        <InputBase
          className={classes.briefTemplateHeading}
          placeholder="Write heading"
          inputProps={{ "aria-label": "naked" }}
        />
        <h1>{card.title}</h1>
        <p>{card.text}</p>
        {/* <div className={classes.briefTemplate_card}>
          <Typography className={classes.briefTemplate_card__title} variant="h4">
            Title
          </Typography>
          <Typography className={classes.briefTemplate_card__description} variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid modi dolorem nihil
            cumque culpa voluptates eum animi! Laudantium ipsa illo ex laboriosam nostrum quisquam
            repudiandae odio ratione! Ex laboriosam autem magnam ipsa. Natus quos distinctio
            blanditiis libero quis adipisci? Hic vero sunt quisquam, voluptate ipsa natus sequi
            corrupti ipsam eum!
          </Typography>
        </div>
        <div className={classes.briefTemplate_card}>
          <Typography className={classes.briefTemplate_card__title} variant="h4">
            Title
          </Typography>
          <Typography className={classes.briefTemplate_card__description} variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid modi dolorem nihil
            cumque culpa voluptates eum animi! Laudantium ipsa illo ex laboriosam nostrum quisquam
            repudiandae odio ratione! Ex laboriosam autem magnam ipsa. Natus quos distinctio
            blanditiis libero quis adipisci? Hic vero sunt quisquam, voluptate ipsa natus sequi
            corrupti ipsam eum!
          </Typography>
        </div>
        <div className={classes.briefTemplate_card}>
          <Typography className={classes.briefTemplate_card__title} variant="h4">
            Title
          </Typography>
          <Typography className={classes.briefTemplate_card__description} variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid modi dolorem nihil
            cumque culpa voluptates eum animi! Natus quos distinctio blanditiis libero quis
            adipisci? Hic vero sunt quisquam, voluptate ipsa natus sequi corrupti ipsam eum!
            Laudantium ipsa illo ex laboriosam nostrum quisquam repudiandae odio ratione! Ex
            laboriosam autem magnam ipsa.
          </Typography>
        </div> */}
        {/* <DescriptionModal /> */}
        <div
          className={
            writeDescription
              ? classes.briefTemplateModalOpen
              : classes.briefTemplateModal
          }
        >
          <Modal
            open={open}
            onClose={handleClose}
            style={{ width: "100%", overflow: "scroll" }}
          >
            <ModalIcon />
          </Modal>
        </div>
        <div className={classes.pagination}>
          <Paginator pages={3} />
        </div>
        <div className={classes.actions}>
          <Button className={classes.actionsBtnSave} variant="contained">
            Save
          </Button>
          <div style={{ position: "relative" }}>
            <SvgIcon
              className={classes.actionsBurger}
              onClick={handleActionsBurger}
            >
              <MoreVertIcon />
            </SvgIcon>
            <div
              className={
                actionsBurger
                  ? classes.actionsBurgerModalOpen
                  : classes.actionsBurgerModal
              }
            >
              <div className={classes.modalBurgerCopytext}>
                <SvgIcon className={classes.actionsBurgerIcon}>
                  <FileCopyOutlinedIcon />
                </SvgIcon>
                <Typography
                  className={classes.actionsBurgerText}
                  variant="body2"
                >
                  Copy text
                </Typography>
              </div>
              <div className={classes.modalBurgerCopytext}>
                <SvgIcon className={classes.actionsBurgerIcon}>
                  <DeleteIcon />
                </SvgIcon>
                <Typography
                  className={classes.actionsBurgerText}
                  variant="body2"
                >
                  Clear all
                </Typography>
              </div>
            </div>
          </div>
          <Button className={classes.actionsBtnLink}>Copy Link</Button>
        </div>
      </div>

      <div className={classes.populars}>
        <PopularsTemplate />
      </div>
    </div>
  );
};

export default observer(BriefTemplate);
// ========================== COMPONENT ====================================
