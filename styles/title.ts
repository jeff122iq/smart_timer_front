import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootTitle: {
        display: "flex",
        width: "100%",
        boxShadow: "-1px 1px 6px 0px rgba(0,0,0,0.6)",
        padding: "15px 0",
        backgroundColor: "white",
        position: "fixed",
        top: "56px",
        zIndex: 2,
        [theme.breakpoints.up("sm")]: {
            top: "64px",
        },
     },
        titleWrap: {
        display: "flex",
            alignItems: "center",
            "& > i": {
            fontSize: "16px",
            cursor: "pointer",
         },
            "& > p": {
            margin: "0 25px",
            cursor: "pointer",
            },
        },
    })
);
