import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    advContainer: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: '100%',
      margin: "136.5px 0",
      // [theme.breakpoints.down('md')]
      ["@media (min-width: 1020px)"]: {
      // flexDirection: "column",

        flexDirection: "row",
      },
    },
    adv: {
      backgroundColor: "white",
      height: 250,
      width: 300,
      margin: "10px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#898989",
      fontSize: "2rem",
    },
  })
);
