import { Typography, SvgIcon, ClickAwayListener } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useState } from "react";
import useStyles from "../styles/modalBurgerMenu";

const DescriptionModal = (props) => {
  const classes = useStyles();

  const [actionsBurger, setActionsBurger] = useState(false);

  const handleActionsBurger = () => {
    setActionsBurger(() => !actionsBurger);
  };
  console.log("props",props)

  const handleClickAway = () => {
    setActionsBurger(() => false);
  };
  const deleteAll = () => {
    console.log("Delete all");
    props.clearDescription();
    setActionsBurger(() => false);
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div style={{ position: "relative" }}>
        <SvgIcon className={classes.actionBurger} onClick={handleActionsBurger}>
          <MoreVertIcon />
        </SvgIcon>
        <div
          className={actionsBurger ? classes.actionsBurgerModalOpen : classes.actionsBurgerModal}
        >
          <div onClick={deleteAll} className={classes.modalBurgerCopytext}>
            <SvgIcon className={classes.actionsBurgerIcon}>
              <DeleteIcon />
            </SvgIcon>
            <Typography className={classes.actionsBurgerText} variant="body2">
              Delete
            </Typography>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default DescriptionModal;
