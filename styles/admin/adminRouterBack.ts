import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootRouterBack: {
        display: "flex",
        justifyContent: "space-between",
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
        routerBackWrap: {
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            "& > i": {
                fontSize: "16px",
                cursor: "pointer",
                margin: "0 15px",
                color: "#5f5f5f"
         },
            "& > p": {
                margin: "0",
                cursor: "pointer",
                fontSize: "20px",
                color: "#2b62ff",
                fontWeight: 500,
            },
        },
    })
);
