import { makeStyles, Theme, createStyles } from "@material-ui/core";
export default makeStyles((theme: Theme) =>
    createStyles({
        templatePageContainer: {
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
        }
    }
    )
)