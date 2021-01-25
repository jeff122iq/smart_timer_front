import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    post: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "white",
      margin: "20px 0",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },

    postImage: {
      width: "calc(100% / 1.5)",
      "& > img": {
        objectFit: "cover",
        width: "100%",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },

    tetxtBlog: {
      width: "100%",
      margin: "0 20px",
      "& > h1": {
        margin: "0",
        padding: "0",
      },
      [theme.breakpoints.down("md")]: {
        width: "90%",
      },
      "& > p": {
        margin: "0",
      },
    },
  })
);
