import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    documentContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "33%",
      padding: "10px 15px",
      backgroundColor: "#2b62ff",
      borderRadius: "3px",
      userSelect: "none",
      margin: "5px 0",
      "@media (max-width: 1100px)": {
        width: "49.5%",
      },
      "@media (max-width: 750px)": {
        width: "100%",
      },
    },
    documentName: {
      color: "white",
      fontSize: "20px",
      maxWidth: "85%",
      //two row text overflow ellipsis
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      lineHeight: '22px'
    },
    actionsBurger: {
      position: "relative",
      color: "white",
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
      top: "-120px",
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
  })
);
