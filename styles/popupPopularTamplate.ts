import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
    createStyles({
        popup: {
          backgroundColor: "black"
        },
        title: {
            padding: "0 20px",
            "& > h1": {
                fontWeight: 400,
            }
        },
        text: {
            padding: "0 20px",
        },
        footer: {
            display: "flex",
            justifyContent: "flex-end",
            borderTop: "2px solid rgba(0,0,0,0.2)",
            // boxShadow: "0px 5px 5px -5px rgba(34, 60, 80, 0.6) inset",
            "& > button": {
                background: "transparent",
                padding: "10px",
                fontWeight: 700,
                color: "#347cff",
                "&:hover": {
                    background: "transparent",
                }
            }
        }
    }))