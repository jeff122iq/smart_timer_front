import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      background: "none",
      marginTop: "105px",
    },

    rootBlog: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "& > h1": {
        fontSize: "50px",
      },
    },
    content: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
  })
);
