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
    },
    cardsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "100%",
      marginTop: "39px",
      paddingLeft: "5px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
        paddingLeft: "0px",
      },
    },
    popularsCard: {
      display: "flex",
      flexWrap: "wrap",
      background: "#fff",
      width: "45%",
      borderRadius: 4,
      margin: "7px 7px 7px 0",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "15px 0 0px 0",
      },
    },
    cardTitle: {
      margin: "10px 0 0 0",
      padding: "0 30px",
    },
    popularsCardDescription: {
      padding: "30px",
      overflow: "hidden",
      height: "130px",
      transition: "all 1s",
      cursor: "pointer",
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
      margin: "15px 0 0 0",
    },
    popularsActionsAddBtn: {
      color: "#347cff",
      fontWeight: 700,
      padding: "10px 0",
      backgroundColor: "transparent",
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
