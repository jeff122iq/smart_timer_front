import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    appbar: {
      backgroundColor: "white",
      width: "100%",
      margin: "0 auto",
      boxShadow: "inherit",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      ["@media (min-width: 620px)"]: {
        paddingLeft: "18px",
      },
    },
    menuButton: {
      color: "black",
      ["@media (min-width: 670px)"]: {
        display: "none",
      },
    },
    list: { width: 250 },
    fullList: { width: "auto" },
    title: { color: "black" },
    linkBox: {
      display: "none",
      ["@media (min-width: 670px)"]: {
        display: "block",
      },
      ["@media (min-width: 740px)"]: {
        marginLeft: "69px",
      },
    },
    link: {
      textDecoration: "none",
      color: "black",
      margin: "0 9px",
    },
    userButton: {
      color: "black",
      padding: "0",
    },
    button: {
      textTransform: "none",
      padding: "6px 0",
      minWidth: "55px",
    },
  })
);
