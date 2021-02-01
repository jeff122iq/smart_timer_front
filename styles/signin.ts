import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "16px 0",
      background: "white",
      marginTop: "105px",
    },
    caption: {
      fontWeight: 900,
      fontSize: 35,
      lineHeight: "1.1",
      textAlign: "center",
      fontFamily: "Roboto, sans-serif",
      letterSpacing: 1,
      maxWidth: "500px",
      margin: "0 auto",
    },
    credsContainer: {
      flexDirection: "column",
      marginTop: "70px",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    inputPannel: {
      marginRight: "10px",
    },
    loginButtonPannel: {
      marginLeft: "10px",
    },
    buttonLogin: {
      backgroundColor: "#f9c229",
      margin: "40px 60px 0 0",
      padding: "8px 20px",
    },
    buttonSignin: {
      margin: "40px 10px 0 0",
      color: "#2336ff",
      backgroundColor: "transparent",
    },
    buttonForgot: {
      backgroundColor: "transparent",
      marginTop: "10px",
      color: "red",
      padding: "6px 0",
    },
    quickTitle: {
      color: "#a1a1a1",
      maxWidth: "300px",
    },
    buttonSocial: {
      maxWidth: "260px",
      color: "white",
      borderRadius: "2px",
      textTransform: "none",
      margin: "5px 0",
      [theme.breakpoints.up("sm")]: {
        width: "100%",
      },
      "& > span": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      },
    },
    buttonFb: {
      backgroundColor: "#3c66c5",
    },
    buttonGp: {
      backgroundColor: "#cf4332",
    },
    buttonTw: {
      backgroundColor: "#55acee",
    },
    icon: {
      margin: "0 15px 0 0",
      width: "40px !important",
      height: "32px !important",
    },
    iconShift: {
      marginLeft: "5px",
    },
    formHelperText: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);
