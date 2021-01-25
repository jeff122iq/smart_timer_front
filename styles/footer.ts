import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootFooter: {
      display: 'flex',
      // position: "fixed",
      // bottom: 0,
      // left: 0,
      backgroundColor: "#252525",
      color: "white",
      marginTop: "auto",
      width: "100%",
    },
    footerContainer: {
      flexDirection: "column",
      padding: "15px",
      width: '100%',
      margin: "0 auto",
      ["@media (min-width: 620px)"]: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    logo: {
      paddingBottom: "5px",
    },
    footerLinksContainer: {
      flexDirection: "column",
      alignItems: "flex-start",
      ["@media (min-width: 620px)"]: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    footerLink: {
      cursor: "pointer",
      color: "white",
      padding: 0,
      minWidth: "inherit",
      letterSpacing: "inherit",
      textTransform: "inherit",
      "& :not(:first-child)": {
        fontSize: "inherit",
      },
      ["@media (min-width: 620px)"]: {
        marginRight: "10px",
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
