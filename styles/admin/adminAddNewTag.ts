import { makeStyles, Theme, createStyles } from "@material-ui/core";
export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 100,
        },
            modalContainer: {
                width: "100%",
                maxWidth: 600,
                display: "flex",
                flexDirection: "column",
                "& > textarea": {
                    border: "none",
                    outline: "none",
                    padding: "10px 20px",
                    height: 200,
                    fontSize: 16,
                    fontFamily: "Roboto, sans-serif",

                }
            },
        footer: {
            width: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px 15px",
            borderTop: "1px solid #b7b7b7",
            "& > button": {
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#2b62ff",
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                cursor: "pointer",
            }
        }
    }
    )
);
