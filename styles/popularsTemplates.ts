import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootPopulars: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      width: "100%",
      background: "#f2bc1c",
      padding: "0 40px",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "200px",
        padding: "0 10px",
      },
    },
    popularsTitle: {
      display: "flex",
      alignItems: "center",
      alignSelf: "flex-start",
      width: "100%",
      paddingTop: "30px",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "12px",
      },
    },
    iconLamp: {
      color: "#fff",
      fontSize: "30px",
      margin: "0 0 5px 0",
    },
    title: {
      margin: "0 30px",
      letterSpacing: "0",
      color: "#fff",
      fontWeight: 400,
      fontSize: "25px",
      [theme.breakpoints.down("md")]: {
        margin: 0,
      },
    },
    cardsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "100%",
      marginTop: "39px",
      padding: "0 100px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "30px",
        padding: 0,
      },
    },
    popularsCard: {
      display: "flex",
      flexWrap: "wrap",
      background: "#fff",
      width: "300px",
      margin: "10px 0",
      borderRadius: 4,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "10px 0",
      },
    },
    cardTitle: {
      margin: "10px 0 0 0",
      padding: "0 30px",
      fontSize: "20px",
    },
    popularsCardDescription: {
      padding: "10px 30px",
      transition: "all 1s",
      cursor: "pointer",
      height: "105px",
      overflow: "hidden",
      "&:hover": {
        transition: "all 1s",
        height: "auto",
        overflow: "auto",
      },
    },
    popularsCardFooter: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      boxShadow: "0px -1px 3px 0px rgba(0,0,0,0.2)",
      margin: "10px 0 0 0",
      padding: "20px 0",
      [theme.breakpoints.down("md")]: {
        padding: "0",
      },
    },
    popularsActionsAddBtn: {
      color: "#347cff",
      fontWeight: 700,
      padding: "10px 0",
      backgroundColor: "transparent",
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      marginBottom: "50px",
      "& > div > nav > ul > li > button": {
        backgroundColor: "transparent",
      },
    },
  })
);
