import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "white",
      marginTop: "64px",
        boxShadow: "0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset",

    },
    content: {
      maxWidth: "700px",
      margin: "15px auto 0 auto",
    },
    caption: {
      fontWeight: 900,
      fontSize: 32,
      lineHeight: "1.1",
      textAlign: "center",
      fontFamily: "Roboto, sans-serif",
      letterSpacing: 1,
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "50px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "-8px",
        }
    },
    inputContainer: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f9f9f9",
    },
    input: {
      width: "100%",
      marginLeft: theme.spacing(1),
    },
    iconButton: {
      padding: 10,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    button: {
      backgroundColor: "#f9c229",
      margin: "15px 0",
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.5)",
    },
    shadow: {
      backgroundColor: "transparent",
      height: 1,
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.5)",
    },
  })
);
