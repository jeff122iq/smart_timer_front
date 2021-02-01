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
      justifyContent: "space-around",
      ["@media (max-width: 620px)"]: {
        paddingLeft: "18px",
      },
    },
    avatar: {
      width: "25px",
      height: "25px",
      color: "#2e373b",
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
    title: { color: "black", fontFamily: "'Imbue', serif", letterSpacing: 1.5 },
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
    },
  })
);
