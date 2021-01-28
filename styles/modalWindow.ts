import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    // button: {

    // },

    modalIcon: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      margin: "180px auto",
      maxWidth: "700px",
      [theme.breakpoints.down("md")]: {
        margin: "180px 10px",
      },
      "& > input": {
        height: "50px",
        outline: "none",
        border: "none",
        padding: "30px 10px",
        fontSize: "30px",
        "& > input::placeholder": {
          fontSize: "30px",
        },
      },
      "& > textarea": {
        width: "100%",
        outline: "none",
        border: "none",
        minHeight: "100px",
        padding: "0 10px",
        fontSize: "15px",
        resize: "none",
        overflowX: "hidden",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "0",
        },
        "&:hover::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "&:hover::-webkit-scrollbar-thumb": {
          background: "#888",
        },
        "& > textarea::placeholder": {
          fontSize: "15px",
        },
      },
    },
    navBlock: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#4573f9",
      borderTop: "2px solid silver",
      padding: "10px",
      backgroundColor: "white",

      "& > ul": {
        padding: 0,
        margin: 0,
        display: "flex",
        "& > li": {
          listStyle: "none",
          margin: "0 5px",
          cursor: "pointer",
          "& > button": {
            border: "none",
            outline: "none",
            color: "#4573f9",
            background: "none",
            cursor: "pointer",
          },
        },
      },
      "& > button": {
        margin: "0 40px 0 0",
        border: "none",
        outline: "none",
        color: "#4573f9",
        background: "none",
        cursor: "pointer",
      },
      "& > h1": {
        margin: "0 5px 0 0",
        padding: "0",
        textTransform: "uppercase",
        fontSize: "15px",
        fontWeight: "bold",
        cursor: "pointer",
      },
    },
    actionsBurgerModal: {
      display: "none",
    },
    actionsBurgerModalOpen: {
      display: "flex",
      flexWrap: "wrap",
      alignSelf: "center",
      position: "absolute",
      background: "#fff",
      width: "145px",
      transition: "0.2s ease",
      top: "-50px",
      transform: "translateX(-38%)",
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
    },
    actionsBurgerIcon: {
      color: "#2e373b",
      cursor: "pointer",
    },
    actionsBurgerText: {
      marginLeft: 10,
      color: "#2e373b",
    },
    modalBurgerCopytext: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      padding: "7px 5px 5px 15px",
      transition: "0.2s ease",
      "&:hover": {
        background: "#eaefff",
      },
    },
    actionsBtnLink: {
      background: "transparent",
      color: "#347cff",
      fontWeight: 700,
    },
    actionsBurger: {
      color: "#347cff",
      cursor: "pointer",
    },
  })
);
