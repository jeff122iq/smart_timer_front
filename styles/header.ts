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
      ["@media (min-width: 620px)"]: {
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
      ["@media (min-width: 670px)"]: {
        display: "none",
      },
    },
    list: { width: 250 },
    fullList: { width: "auto" },
    title: { color: "black", fontFamily: "'Imbue', serif", letterSpacing: 1.5 },
    linkBox: {
      // display: "none",
      ["@media (min-width: 670px)"]: {
        display: "block",
      },
      ["@media screen and (max-width: 1024px)"]: {
        margin: "0",
      },
      ["@media (min-width: 740px)"]: {
        // marginLeft: "100px",
      },
      "& > li": {
        "& > a": {
          textDecoration: "none",
          color: "black",
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
      },
      ["@media screen and (max-width: 420px)"]: {
        // fontSize: "10px",
        margin: "0 5px",
      },

      ["@media screen and (max-width: 320px)"]: {
        fontSize: "10px",
        margin: "0 5px",
      },
    },
    link: {
      fontWeight: 300,
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
