import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "16px 0",
      background: "white",
      marginTop: "105px",
      marginBottom: "40px",
    },
    caption: {
      fontWeight: 900,
      fontSize: 30,
      lineHeight: "1.19",
      textAlign: "center",
      fontFamily: "Roboto, sans-serif",
      letterSpacing: "normal",
      maxWidth: "400px",
      margin: "40px auto 0 auto",
    },
    credsContainer: {
      flexDirection: "column",
      marginTop: "65px",
      marginBottom: "185px",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    inputPannel: {
      marginRight: "10px",
      "& .MuiInput-underline.Mui-error:after": {
        borderBottomColor: "#f34235",
      },
    },
    // loginButtonPannel: {
    //   marginLeft: "10px",
    // },
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
      color: "#f34235",
      padding: "6px 0",
    },
    quickTitle: {
      color: "#959595",
      maxWidth: "260px",
    },
    buttonSocial: {
      maxWidth: "260px",
      color: "white",
      borderRadius: "2px",
      textTransform: "none",
      margin: "8px 0",
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
