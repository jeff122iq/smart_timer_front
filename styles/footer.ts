import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootFooter: {
      display: "flex",
      backgroundColor: "#252525",
      color: "white",
      marginTop: "auto",
      width: "100%",
    },
    footerContainer: {
      flexDirection: "column",
      padding: "15px",
      width: "100%",
      margin: "0 auto",
      ["@media (min-width: 765px)"]: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    logo: {
      fontFamily: "'Imbue', serif",
      letterSpacing: "1.5px !important" ,
    },
    footerLinksContainer: {
      flexDirection: "column",
      alignItems: "flex-start",
      ["@media (min-width: 765px)"]: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    footerLink: {
      cursor: "pointer",
      color: "white",
      padding: 0,
      fontWeight: "inherit",
      minWidth: "inherit",
      letterSpacing: "inherit",
      textTransform: "inherit",
      "& :not(:first-child)": {
        fontSize: "inherit",
      },
      ["@media (min-width: 765px)"]: {
        margin: "0 15px",
      },
    },
    helpLinksContainer: {
      marginTop: "10px",
      "& :nth-child(1)": {
        marginLeft: 0,
      },
    },
    helpLink: {
      color: "#787878",
      margin: "0 5px",
    },
  })
);
