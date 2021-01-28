import FormatBold from "@material-ui/icons/FormatBold";
import List from "@material-ui/icons/List";
import Link from "@material-ui/icons/Link";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import SvgIcon from "@material-ui/core/SvgIcon";
import useStyles from "../styles/modalWindow";
import modalIcon from "./ModalWindow";
import {
  Divider,
  Input,
  InputBase,
  TextField,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { useState } from "react";

export default function ModalIcon() {
  const classes = useStyles();
  // const class1 = modalIcon();
  const [actionsBurger, setActionsBurger] = useState(false);

  const handleActionsBurger = () => {
    setActionsBurger(!actionsBurger);
  };

  return (
    <>
      <div className={classes.modalIcon}>
        <input type="text" name="" id="" placeholder="Title" />
        <textarea contentEditable name="" id="" placeholder="Text" />
        <div className={classes.navBlock}>
          <ul>
            <li>
              <button>
                <List />
              </button>
            </li>
            <li>
              <button>
                <Link />
              </button>
            </li>
            <li>
              <button>
                <FormatBold />
              </button>
            </li>
          </ul>
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
              {/* <div className={classes.modalBurgerCopytext}>
                <SvgIcon className={classes.actionsBurgerIcon}>
                  <FileCopyOutlinedIcon />
                </SvgIcon>
                <Typography
                  className={classes.actionsBurgerText}
                  variant="body2"
                >
                  Copy text
                </Typography>
              </div> */}
              <div className={classes.modalBurgerCopytext}>
                <SvgIcon className={classes.actionsBurgerIcon}>
                  <DeleteIcon />
                </SvgIcon>
                <Typography
                  className={classes.actionsBurgerText}
                  variant="body2"
                >
                  Delete
                </Typography>
              </div>
            </div>
          </div>
          <h1>close</h1>
        </div>
      </div>
    </>
  );
}
