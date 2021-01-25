import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootBriefTemplate: {
      display: "flex",
      flexWrap: "wrap",
      background: "white",
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
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    briefTemplate_description: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      transition: "2s ease-in-out",
      transform: "translateX(0px) !important",
      // visibility: 'visible',
    },
    descriptionBtn: {
      padding: "35px 25px",
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
      display: "flex",
      justifyContent: "flex-start",
      fontSize: "30px",
      lineHeight: 1,
      textTransform: "none",
      letterSpacing: "0",
      color: "grey",
      marginTop: "30px",
      animation: "3s ease-in 1s infinite reverse both running slidein",
      transition: "3s ease-in-out",
      // transform: 'translateY(50%)'
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    briefTemplateTags: {
      marginTop: "30px",
      width: "100%",
    },
    briefTemplateHeading: {
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
    briefTemplate_card: {
      margin: "10px 0 40px 0",
      borderBottom: "1px solid lightgrey",
      transition: "0.2s ease",
      "&:hover": {
        boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
      },
    },
    briefTemplate_card__title: {
      padding: "10px 0px 0 10px",
    },
    briefTemplate_card__description: {
      padding: "10px 10px 20px 10px",
    },

    briefTemplateModal: {
      display: "none",
    },
    briefTemplateModalOpen: {
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
      [theme.breakpoints.down("xs")]: {},
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
