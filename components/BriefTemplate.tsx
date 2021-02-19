// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, { Children, useEffect, useState } from "react";
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
  Collapse,
  ClickAwayListener,
  ButtonBase,
  Container
} from "@material-ui/core";
import { observer } from "mobx-react";
import Modal from "@material-ui/core/Modal";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import { CardStore } from "../store/cardStore";

import Tags from "./Tags";
import Paginator from "./Paginator";
import PopularsTemplate from "./PopularsTemplate";
import { TagsStore } from "../store/tagsStore";
import useStyles from "../styles/brief-template";
import DescriptionModal from "./DescriptionModal";
import AdditionalTemplate from "./AdditionalTemplate";
import Axios from "axios";
import {BriefStore} from "../store/briefStore";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

const CustomButton = withStyles(() => {
  createStyles({
    focusVisible: {
      display: "none",
    },
  });
})(ButtonBase);

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
  const { createCard, card, whiteCards } = CardStore;

  useEffect(() => {
    createCard({
      title: "",
      description: "",
    });
    }, []);

  const [tags, setTags] = useState();

  const [actionsBurger, setActionsBurger] = useState(false);
  const handleActionsBurger = () => {
    setActionsBurger(!actionsBurger);
  };

  // ================MODAL==================
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  // ================MODAL==================

  const { addBrief } = BriefStore;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(whiteCards.length / 2);
  const handlePagination = (
      event: React.ChangeEvent<unknown>,
      value: number
  ) => {
    setPage(value);
  };
  const [isToken, setIsToken] = React.useState("");
  React.useEffect(() => {
    setIsToken(window.localStorage.getItem("token"));
  });
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  async function saveBrief() {
    const response = await Axios.post(
        `http://${process.env.BACK_URL}:${process.env.BACK_PORT}/briefs`,
        { name: inputValue, cards: whiteCards },
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        }
    );
    addBrief(response.data);
    clearAll();
    setInputValue("");
  }

  const clearAll = () => {
    whiteCards.length = 0;
    setActionsBurger(false);
    setInputValue("");
  };

  const copyText = () => {
    const el = document.createElement("textarea");
    el.value = inputValue;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setActionsBurger(false);
  };

  const copyLink = () => {
    const el = document.createElement("textarea");
    el.value = `http://localhost:3000/create`;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClickAway = () => {
    setActionsBurger(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
      <div className={classes.rootBriefTemplate}>
          <div className={classes.wrapTopContent}>
            <div className={classes.briefTemplateTags}>
              <Tags />
            </div>
            <div
                className={classes.briefTemplate_description}
                style={{ display: tagLength ? "block" : "none" }}
            >
              {tagLength ? (
                  <>
                    <CustomButton
                        className={classes.descriptionBtn}
                        onClick={handleOpenModal}
                    >
                      Write description
                    </CustomButton>
                  </>
              ) : (
                  ""
              )}
            </div>
            <InputBase
                className={classes.briefTemplateHeading}
                placeholder="Write heading"
                inputProps={{ "aria-label": "naked" }}
                onChange={handleInputValue}
            />
            {whiteCards
                .slice((page - 1) * 2, page * 2)
                .map((whiteCards: any, index: number) => {
                  return (
                      <div className={classes.cardsHeading} key={index}>
                        <h1>{whiteCards.title}</h1>
                        <p>{whiteCards.description}</p>
                      </div>
                  );
                })}
            {whiteCards.length > 2 ? (
                <div className={classes.pagination}>
                  <Paginator
                      count={totalPages}
                      page={page}
                      onChange={handlePagination}
                  />
                </div>
            ) : (
                ""
            )}
            <div
                className={
                  open ? classes.briefTemplateModalOpen : classes.briefTemplateModal
                }
            >
              <Modal
                  open={open}
                  onClose={handleClose}
                  style={{ width: "100%", overflow: "scroll" }}
              >
                <DescriptionModal setOpen={setOpen} />
              </Modal>
            </div>
            {whiteCards.length > 0 ? (
                <div>
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <div className={classes.actions}>
                      <Button onClick={saveBrief} className={classes.actionsBtnSave} variant="contained">
                        Save
                      </Button>
                      <div style={{ position: "relative", top: "3px" }}>
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
                                onClick={copyText}
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
                                onClick={clearAll}
                            >
                              Clear all
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <Button onClick={copyLink} className={classes.actionsBtnLink}>
                        Copy Link
                      </Button>
                    </div>
                  </ClickAwayListener>
                </div>
            ) : (
                ""
            )}
          </div>
        <div className={classes.populars}>
            <PopularsTemplate />
        </div>
      </div>
  );
};

export default observer(BriefTemplate);
// ========================== COMPONENT ====================================
