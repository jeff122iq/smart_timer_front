import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    documentContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#2b62ff",
      borderRadius: "3px",
      userSelect: "none",
      marginRight: 10,
        marginBottom: 15,
        padding: "5px 10px",
      [theme.breakpoints.down("sm")]: {
        minWidth: "100px",
        maxWidth: "260px",
        width: "fit-content",
      },
    },
    documentName: {
        color: "white",
        fontSize: "16px",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 500,
        maxWidth: "89%",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        lineHeight: "22px",
    },
    actionsBurger: {
      position: "relative",
      color: "white",
      cursor: "pointer",
      marginTop: "5px",
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
        zIndex: 5,
      transition: "0.2s ease",
      top: "-120px",
      transform: "translateX(-38%)",
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
        [theme.breakpoints.down("sm")]: {
            transform: "translateX(-73%)",
        }
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
  })
);
