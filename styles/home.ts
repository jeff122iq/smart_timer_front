import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#eeeeee",
    },
    icon: {
      color: "#2b62ff",
      marginRight: 5,
      cursor: "pointer",
    },
    button: {
      minWidth: "inherit",
      margin: "0 5px 5px 0",
      borderRadius: "3px",
      textTransform: "none",
      // color: "white",
      "& :hover": {
        backgroundColor: "none",
      },
    },
    more: {
      margin: "30px 0",
      color: "#1853f4",
      letterSpacing: "1px",
      padding: "0",
    },
  })
);
