import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "16px 0",
      background: "white",
    },
    caption: {
      fontWeight: 900,
      fontSize: 20,
      textAlign: "center",
      letterSpacing: 1.5,
      maxWidth: "340px",
      margin: "0 auto",
    },
    credsContainer: {
      flexDirection: "column",
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
      margin: "10px 10px 0 0",
      "& :hover": {
        backgroundColor: "#f9c229",
      },
    },
    buttonSignin: {
      margin: "10px 10px 0 0",
      color: "#2336ff",
    },
    buttonForgot: {
      marginTop: "10px",
      color: "red",
      padding: "6px 0",
    },
    quickTitle: {
      color: "#a1a1a1",
    },
    buttonFb: {
      display: "flex",
      width: "200px",
      backgroundColor: "#3c66c5",
      color: "white",
      borderRadius: "2px",
      textTransform: "none",
    },
    buttonGp: {
      display: "flex",
      width: "200px",
      backgroundColor: "#cf4332",
      color: "white",
      borderRadius: "2px",
      textTransform: "none",
      margin: "10px 0",
    },
    buttonTw: {
      display: "flex",
      width: "200px",
      backgroundColor: "#55acee",
      color: "white",
      borderRadius: "2px",
      textTransform: "none",
    },
    icon: {
      fontSize: "20px",
      margin: "0 15px 0 0",
      width: "30px",
    },
    formHelperText: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);
