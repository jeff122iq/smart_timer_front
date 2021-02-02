import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    MuiPaginationItem: {
      height: "26px",
      margin: "0 1px",
      padding: "0 4px",
      minWidth: "26px",
      borderRadius: "13px",
      background: "transparent",
    },

    rootCreateTemplate: {
      display: "flex",
      flexWrap: "wrap",
      background: "white",
      marginTop: "105px",
      // zIndex: 2
    },
    wrapper: {
      background: "rgba(0, 0, 0, 0.5)",
    },
    wrapTopContent: {
      width: "50%",
      padding: "0 40px 40px 40px",
      display: "flex",
      flexDirection: "column",
      "& > h1": {
        textAlign: "center",
        fontSize: "35px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        "& > h1": {
          fontSize: "20px",
          textAlign: "left",
        },
      },
    },
    CreateTemplate_description: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      transition: "2s ease-in-out",
      transform: "translateX(0px) !important",
      // visibility: 'visible',import { TextField } from '@material-ui/core/TextField';
    },
    descriptionBtn: {
      width: "100%",
      padding: "15px 25px",
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
      display: "flex",
      justifyContent: "flex-start",
      fontSize: "30px",
      fontWeight: 400,
      lineHeight: 1,
      textTransform: "none",
      letterSpacing: "0",
      color: "grey",
      marginTop: "30px",
      backgroundColor: "white",
      // transform: 'translateY(50%)'
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        padding: "25px",
      },
      ["@media screen and (max-width: 320px)"]: {
        fontSize: "25px",
      },
    },

    CreateTemplateTags: {
      marginTop: "30px",
      width: "100%",
    },
    CreateTemplateHeading: {
      width: "100%",
      fontSize: "24px",
      margin: "10px 0",
    },
    heading: {
      margin: "20px 0",
      fontWeight: 700,
      width: "100%",
      "& ::before": { border: "none" },
      "& ::after": { border: "none" },
    },
    CreateTemplate_card: {
      margin: "10px 0 40px 0",
      borderBottom: "1px solid lightgrey",
      transition: "0.2s ease",
      "&:hover": {
        boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
      },
    },
    CreateTemplate_card__title: {
      padding: "10px 0px 0 10px",
    },
    CreateTemplate_card__description: {
      padding: "10px 10px 20px 10px",
    },

    CreateTemplateModal: {
      display: "none",
    },
    CreateTemplateModalOpen: {
      display: "block",
      background: "rgba(0,0,0,0.5)",
      // position:
      width: "100%",
      marginTop: "30px",
      borderRadius: 4,
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
    },
    pagination: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > div > nav > ul > li > button": {
        background: "transparent",
      },
      [theme.breakpoints.down("xs")]: {},
      ["@media screen and (max-width: 320px)"]: {
        margin: "0 0 30px 0",
        display: "flex",
        justifyContent: "center",
        width: "80%",
      },
    },
    actions: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      margin: "50px 0",
      marginTop: "auto",
    },
    actionsBtnSave: {
      background: "#f2bc1c",
      fontWeight: 700,
    },
    actionsBurger: {
      position: "relative",
      color: "#347cff",
      cursor: "pointer",
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
      top: "-75px",
      transform: "translateX(-38%)",
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
    },
    actionsBurgerIcon: {
      color: "#2e373b",
      cursor: "pointer",
    },
    actionsBurgerText: {
      marginLeft: 10,
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
    populars: {
      display: "flex",
      flexWrap: "wrap",
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  })
);
