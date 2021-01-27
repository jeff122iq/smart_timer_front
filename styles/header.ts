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
      backgroundColor: "transparent",
      ["@media (min-width: 670px)"]: {
        display: "none",
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
        marginLeft: "100px",
      },
    },
    link: {
      textDecoration: "none",
      color: "black",
      margin: "0 30px",
      "&:focus": {
        fontWeight: "bolder",
      },
      ["@media screen and (max-width: 320px)"]: {
        fontSize: "10px",
        margin: "0 5px",
      },
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
