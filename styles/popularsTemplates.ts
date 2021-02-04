import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootPopulars: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      width: "100%",
      background: "#f2bc1c",
      padding: "0 53px 0 33px",
        ["@media screen and (max-width: 1280px)"]: {
            padding: "0 15px",
        },
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
        "& > i": {
                color: "#fff",
                fontSize: "20px",
                margin: "0 0 5px 0",
        }
    },
    title: {
      // margin: "0 15px",
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
      justifyContent: "space-between",
      width: "100%",
      marginTop: "39px",
      padding: 0,
      [theme.breakpoints.down("sm")]: {
        marginTop: "30px",
        padding: 0,
      },
    },
    popularsCard: {
      // display: "flex",
      flexWrap: "wrap",
      background: "#fff",
      width: "300px",
      margin: "5px 0",
      borderRadius: 4,
      height: "171px",
      overflow: "hidden",
      position: "relative",
      transition: "all 0.5s",
      "&:hover": {
        transition: "all 0.5s",
          boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.6)",
      //   "& $popularsCardDescription": {
      //     lineClamp: 12,
      //   },
       },
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
      display: "-webkit-box",
      padding: "10px 30px 44px",
      transition: "all 0.5s",
      cursor: "pointer",
      lineClamp: 4,
      boxOrient: "vertical",
      overflow: "hidden",
    },
    popularsCardFooter: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      boxShadow: "0px -1px 3px 0px rgba(0,0,0,0.2)",
      margin: "10px 0 0 0",
      zIndex: 1,
      position: "absolute",
      bottom: 0,
      backgroundColor: "white",
      [theme.breakpoints.down("md")]: {
        padding: "0",
      },
    },
    briefTemplateModal: {
      display: "none",
    },
    briefTemplateModalOpen: {
      display: "block",
      background: "rgba(0,0,0,0.5)",
      width: "100%",
      marginTop: "30px",
      borderRadius: 4,
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
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
      marginBottom: "100px",
      "& > div > nav > ul > li > button": {
        backgroundColor: "transparent",
      },
    },
  })
);
