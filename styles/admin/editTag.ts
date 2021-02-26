import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
    createStyles({
            editTagContainer: {
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                marginTop: "200px",
            },

            tagContainer: {
                background: "#2b62ff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px 0 5px 15px",
                margin: " 0 10px 5px 0",
                cursor: "pointer",
                "& > p": {
                    color: "#ffffff",
                    fontSize: 20,
                    margin: 0,
                }
            },
    }
    )
);