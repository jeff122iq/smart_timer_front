// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import {
  FormGroup,
  SvgIcon,
  Typography,
  ClickAwayListener,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import { useState } from "react";
import useStyles from "../styles/template-document-button";
import {BriefStore} from "../store/briefStore";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function TemplateDocumentButton({ name, id }) {
  const classes = useStyles();

  const {removeBrief, briefLink} = BriefStore
  const [actionsBurger, setActionsBurger] = useState(false);
  const handleActionsBurger = () => {
    setActionsBurger(!actionsBurger);
  };

  const handleClickAway = () => {
    setActionsBurger(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <FormGroup className={classes.documentContainer}>
        <Typography className={classes.documentName}>{name}</Typography>
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
            <div
              className={classes.modalBurgerCopytext}
              onClick={handleActionsBurger}
            >
              <SvgIcon className={classes.actionsBurgerIcon}>
                <ShareIcon />
              </SvgIcon>
              <Typography onClick={()=>briefLink(id)} className={classes.actionsBurgerText} variant="body2">
                Share link
              </Typography>
            </div>
            <div
              className={classes.modalBurgerCopytext}
              onClick={handleActionsBurger}
            >
              <SvgIcon className={classes.actionsBurgerIcon}>
                <FileCopyOutlinedIcon />
              </SvgIcon>
              <Typography className={classes.actionsBurgerText} variant="body2">
                Copy text
              </Typography>
            </div>
            <div
              className={classes.modalBurgerCopytext}
              onClick={handleActionsBurger}
            >
              <SvgIcon className={classes.actionsBurgerIcon}>
                <DeleteIcon />
              </SvgIcon>
              <Typography onClick={()=>removeBrief(id)} className={classes.actionsBurgerText} variant="body2">
                Delete
              </Typography>
            </div>
          </div>
        </div>
      </FormGroup>
    </ClickAwayListener>
  );
}
// ========================== COMPONENT ====================================
