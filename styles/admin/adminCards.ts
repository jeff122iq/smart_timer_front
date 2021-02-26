import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
    createStyles({
        contents: {
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "7%",
            boxSizing: "border-box",
            [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
            }
        },
    }
    )
)