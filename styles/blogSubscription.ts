import { makeStyles, Theme, createStyles } from "@material-ui/core";
export default makeStyles((theme: Theme) =>
  createStyles({
    blogSubscription: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
    },

    subscription: {
      padding: "20px 0",
      width: "400px",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      border: "2px solid silver",
      margin: "150px 0 150px 0",
      [theme.breakpoints.down("md")]: {
        margin: "20px 0",
      },
      "& > h1": {
        fontWeight: "300",
        fontSize: "20px",
        color: "grey",
      },
      "& > ul": {
        width: "100%",
        maxWidth: "300px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        margin: 0,
        padding: 0,
        "& > i": {
          fontSize: "40px",
          margin: "0 10px",
          color: "grey",
          cursor: "pointer",
          transition: "all 0.3s",
          [theme.breakpoints.down("xs")]: {
            fontSize: "30px",
          },
          "&:hover": {
            color: "orange",
            transition: "all 0.3s",
          },
        },
      },
      "& > input": {
        width: "300px",
        height: "40px",
        padding: "0 10px",
        margin: "10px 0",
        border: "none",
        borderBottom: "1px solid grey",
        outline: "none",
        fontSize: "30px",
        transition: "all 0.3s",

        "&::placeholder": {
          fontSize: "30px",
          [theme.breakpoints.down("xs")]: {
            transition: "all 0.3s",
            fontSize: "20px",
          },
        },
        [theme.breakpoints.down("xs")]: {
          width: "200px",
        },
      },
      "& > button": {
        width: "300px",
        height: "40px",
        backgroundColor: "white",
        border: "2px solid grey",
        outline: "none",
        color: "grey",
        fontSize: "20px",
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": {
          backgroundColor: "grey",
          color: "white",
          transition: "all 0.3s",
        },
        [theme.breakpoints.down("xs")]: {
          width: "200px",
        },
      },
    },
  })
);
