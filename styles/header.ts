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
    avatar: {
      width: "20px",
      height: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },

    menuButton: {
      color: "black",
      ["@media (min-width: 670px)"]: {
        display: "none",
        backgroundColor: "transparent",
      },
    },
    list: { width: 250 },
    fullList: { width: "auto" },
    title: { color: "black", fontFamily: "'Imbue', serif", letterSpacing: 1.5 },
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
      margin: "0 11px",
    },
    userButton: {
      color: "black",
      padding: "0",
      display: "flex",
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      textTransform: "none",
      padding: "6px 0",
      backgroundColor: "transparent",
      minWidth: "55px",
    },
  })
);
