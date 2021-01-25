import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
    },
    rootAbout: {
      "& div:nth-child(3)": {
        [theme.breakpoints.up("sm")]: {
          flexDirection: "row-reverse",
        },
      },
    },
    aboutContainer: {
      flexDirection: "column",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    block: {
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "50%",
        padding: "15px",
      },
    },
  })
);
