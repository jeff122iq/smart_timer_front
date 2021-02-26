// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import {
  FormGroup,
  SvgIcon,
  Typography,
  ClickAwayListener, Container,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CreateIcon from '@material-ui/icons/Create';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import React, { useState } from "react";
import useStyles from "../../styles/admin/adminTemplateButton";
import {EditTagAndCategories} from "../../store/admin/editTagAndCategories";
import Modal from '@material-ui/core/Modal';
import AdminEditCurrentCaregory from "./Category/AdminEditCurrentCaregory";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export default function AdminTemplateButton(props:any) {
  const classes = useStyles();
  const {deleteCategory} = EditTagAndCategories
  const [actionsBurger, setActionsBurger] = useState(false);
  const [open, setOpen] = useState(false);
  const handleActionsBurger = () => {
    setActionsBurger(!actionsBurger);
  };

  const handleClickAway = () => {
    setActionsBurger(false);
  };

  const handleOpen = () => {
    setOpen(true);
    setActionsBurger(!actionsBurger);
  };

  const handleClose = () => {
    setOpen(false);
    setActionsBurger(!actionsBurger);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <FormGroup className={classes.documentContainer}>
        <div onClick={handleActionsBurger} style={{ position: "relative" }}>
          <SvgIcon
            className={classes.actionsBurger}
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
            >
              <SvgIcon className={classes.actionsBurgerIcon}>
                <FileCopyIcon />
              </SvgIcon>
              <Typography className={classes.actionsBurgerText} variant="body2">
                Duplicate
              </Typography>
            </div>
            <div
                onClick={() => handleOpen()}
              className={classes.modalBurgerCopytext}
            >
              <SvgIcon className={classes.actionsBurgerIcon}>
                <CreateIcon />
              </SvgIcon>
              <Typography className={classes.actionsBurgerText} variant="body2">
                Edit
              </Typography>
            </div>
            <Modal open={open} onClose={handleClose}>
              <AdminEditCurrentCaregory open={open} setOpen={setOpen}/>
            </Modal>
            <div onClick={() => deleteCategory(props.id)}
              className={classes.modalBurgerCopytext}
            >
              <SvgIcon className={classes.actionsBurgerIcon}>
                <DeleteIcon />
              </SvgIcon>
              <Typography className={classes.actionsBurgerText} variant="body2">
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
