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
            "& > button": {
                background: "transparent",
                "&:hover": {
                    background: "transparent",
                }
            }
        }
    }))