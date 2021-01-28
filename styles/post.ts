import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    post: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "white",
      margin: "20px 0",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },

    postImage: {
      width: "100%",
      "& > img": {
        objectFit: "cover",
        width: "100%",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },

    texttBlog: {
      margin: "0 20px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      textAlign: "justify",
      "& > p": {
        [theme.breakpoints.down("md")]: {
          width: "90%",
          maxHeight: "190px",
          overflow: "hidden",
          "&:hover": {
            height: "auto",
          },
        },
      },
    },
    cardTitle: {
      display: "flex",
      justifyContent: "flex-start",
      width: "100%",
    },
  })
);
