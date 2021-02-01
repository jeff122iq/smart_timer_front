import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    actionBurger: {
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
      top: "-50px",
      transform: "translateX(-38%)",
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
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
    actionsBurgerIcon: {
      color: "#2e373b",
      cursor: "pointer",
    },
    actionsBurgerText: {
      marginLeft: 10,
      color: "#2e373b",
    },
  })
);
