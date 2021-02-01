import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootTitle: {
      display: "flex",
      width: "100%",
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
      padding: "10px 0",
      backgroundColor: "white",
      position: "fixed",
      top: "56px",
      zIndex: 2,
      [theme.breakpoints.down("sm")]: {},
    },
    image: {
      cursor: "pointer",
    },
    titleWrap: {
      display: "flex",
    },
  })
);
