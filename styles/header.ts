import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    header: {
      width: "100%",
      margin: "0 0 20px 0",
      padding: 0,
      backgroundColor: "white",
      position: "fixed",
      top: "auto",
      left: "auto",
      zIndex: 2,
    },
    appbar: {
      backgroundColor: "white",
      width: "100%",
      margin: "0 auto",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      padding: 0,
    },
    avatar: {
      width: "25px",
      height: "25px",
      color: "#2e373b",
    },
    navLink: {
      display: "flex",
      "& > div > a": {
        margin: "0 28px",
        color: "black",
        textDecoration: "none",
      },
      ["@media screen and (max-width: 768px)"]: {
        fontSize: "10px",
      },
      ["@media screen and (max-width: 720px)"]: {
        fontSize: "10px",
        margin: "0 5px",
      },
      ["@media (max-width: 620px)"]: {
        display: "none",
      },
    },
    menuButton: {
      color: "black",
      backgroundColor: "transparent",
      ["@media (min-width: 620px)"]: {
        display: "none",
      },
    },
    list: { width: 250 },
    fullList: { width: "auto" },
    title: { color: "black", fontFamily: "'Imbue', serif", letterSpacing: 1.5, cursor: "pointer" },
    linkBox: {
      // display: "none",
      ["@media (max-width: 670px)"]: {
        display: "block",
        fontSize: "10px",
      },
      ["@media (max-width: 620px)"]: {
        display: "none",
      },
      ["@media screen and (max-width: 1024px)"]: {
        margin: "0",
      },
      "& > li": {
        "& > a": {
          textDecoration: "none",
          color: "black",
          ["@media (max-width: 630px)"]: {
            fontSize: "10px",
          },
          // margin: "0 30px",
          // "&:active": {
          //   fontWeight: "bolder",
          //   textDecoration: "none",
          //   color: "black",
          // },
          // "& > a": {
          //   textDecoration: "none",
          //   margin: "0",
          //   padding: "0",
          //   color: "black",
          // },
        },
      },

      ["@media screen and (max-width: 1055px)"]: {
        margin: "0 10px",
      },
      ["@media screen and (max-width: 768px)"]: {
        margin: "0 5px",
        fontSize: "10px",
      },
      ["@media screen and (max-width: 420px)"]: {
        // fontSize: "10px",
        margin: "0 5px",
      },

      ["@media screen and (max-width: 320px)"]: {
        margin: "0 5px",
      },
    },
    link: {
      fontWeight: 400,
      textDecoration: "none",
      color: "black",
    },
    activeLink: {
      fontWeight: "bold",
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
      display: "flex",
      justifyContent: "flex-end"
    },
  })
);
