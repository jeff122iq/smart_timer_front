import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingRight: 0,
      height: "100vh",
      background: "#eeeeee",
      display: "flex",
      flexDirection: "column",
    },
  })
);
