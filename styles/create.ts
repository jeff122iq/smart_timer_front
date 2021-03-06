import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "100px",
    },
    icon: {
      color: "#2b62ff",
      marginRight: 5,
      cursor: "pointer",
    },
  })
);
