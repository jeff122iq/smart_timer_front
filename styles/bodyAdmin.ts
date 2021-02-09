import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      background: "black",
      display: "flex",
      flexDirection: "column",
    },
  })
);
