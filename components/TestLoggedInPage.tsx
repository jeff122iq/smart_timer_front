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
  ClickAwayListener,
  Collapse,
  ButtonBase,
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
import { TagsStore } from "../store/tagsStore";
import DescriptionModal from "./DescriptionModal";
import useStyles from "../styles/testLoggedInPage";
import AdditionalTemplate from "./AdditionalTemplate";
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

const TestLoggeInPage = (props) => {
  const classes = useStyles();
  const { tagLength } = TagsStore;
  const { createCard, card, cardsArray } = CardStore;

  useEffect(() => {
    createCard({
      title: "",
      text: "",
    });
  }, []);

  const [tags, setTags] = useState(cardsArray);
  console.log("=================");
  console.log("::::::::::::", tags);
  console.log("=================");

  const [actionsBurger, setActionsBurger] = useState(false);

  // ================MODAL==================
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  // ================MODAL==================

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(cardsArray.length / 2);
  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const [writeDescription, setWriteDescription] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClickAway = () => {
    setActionsBurger(false);
  };

  const handleActionsBurger = () => {
    setActionsBurger(!actionsBurger);
  };
  const handleWriteDescription = () => {
    setWriteDescription(!writeDescription);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      className={classes.rootCreateTemplate}
      style={{
        flexDirection: !tagLength ? "column" : "row",
      }}
    >
      <div className={classes.wrapper}></div>
      <div
        className={classes.wrapTopContent}
        style={{ margin: !tagLength ? "auto" : "0" }}
      >
        {!tagLength ? (
          <h1>
            Add tag to that relevant to
            <br />
            your type of work
          </h1>
        ) : (
          ""
        )}
        <div className={classes.CreateTemplateTags}>
          <Tags />
        </div>
        {/* <Slide direction="right" style={{ visibility: tagLength ? "visible" : "hidden" }}> */}
        <div
          className={classes.CreateTemplate_description}
          style={{ display: tagLength ? "block" : "none" }}
        >
          <Collapse in={tagLength}>
            {tagLength ? (
              <CustomButton
                className={classes.descriptionBtn}
                onClick={handleWriteDescription}
                // style={{animation: tagLength ? '3s ease-in 1s infinite reverse both running slidein' : '1s ease'}}
              >
                Write description
              </CustomButton>
            ) : (
              ""
            )}
          </Collapse>
        </div>
        {tagLength ? (
          <Collapse in={tagLength}>
            <>
              <InputBase
                className={classes.CreateTemplateHeading}
                placeholder="Write heading"
                inputProps={{ "aria-label": "naked" }}
              />
            </>
          </Collapse>
        ) : (
          ""
        )}
        {cardsArray
            .slice((page - 1) * 2, page * 2)
            .map((card: any, index: number) => {
              return (
                  <div className={classes.cardsHeading} key={index}>
                    <h1>{card.title}</h1>
                    <p>{card.text}</p>
                  </div>
              );
            })}
        <div
          className={
            writeDescription
              ? classes.CreateTemplateModalOpen
              : classes.CreateTemplateModal
          }
        >
          <Modal
            open={open}
            onClose={handleClose}
            style={{ width: "100%", overflow: "scroll" }}
          >
            <DescriptionModal open={open} setOpen={setOpen} />
          </Modal>
        </div>
        {cardsArray.length > 0 ? (
          <div>
            {cardsArray.length > 2 ? (
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
            <ClickAwayListener onClickAway={handleClickAway}>
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
            </ClickAwayListener>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={classes.populars}>
        <Collapse in={tagLength}>
          {tagLength ? (
            <AdditionalTemplate/>
          ) : (
            ""
          )}
        </Collapse>
      </div>
    </div>
  );
};

export default observer(TestLoggeInPage);
// ========================== COMPONENT ====================================
