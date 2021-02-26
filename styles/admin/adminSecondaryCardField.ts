import {createStyles, makeStyles, Theme} from "@material-ui/core";

export default makeStyles((theme: Theme) =>
    createStyles({
            additionalContainer: {
                width: "50%",
                backgroundColor: "#f2bc1a",
                padding: "0 20px 20px 20px",
                "& > div > h1": {
                    marginTop: "70px",
                    fontWeight: 500,
                    color: "white",
                },
                [theme.breakpoints.down("sm")]: {
                    width: "100%",
                }

            },
            cardsContainer: {
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
            },
            card: {
                width: "100%",
                maxWidth: 300,
                height: 310,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "white",
                padding: 14,
                marginTop: 20,
                // "&:hover": {
                //     height: "auto",
                // },
                "& > h1": {
                    margin: 0,
                    fontSize: 24,
                    fontWeight: 400,
                },
                "& > p": {
                    margin: 0,
                    lineClamp: 9,
                    boxOrient: "vertical",
                    overflow: "hidden",
                }
            },

            descriptionBtn: {
                width: "100%",
                padding: "15px 25px",
                boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
                display: "flex",
                justifyContent: "flex-start",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: 1,
                textTransform: "none",
                letterSpacing: "0",
                color: "grey",
                marginTop: "50px",
                transition: "3s ease-in-out",
                backgroundColor: "white",
                "&:focus": {
                    background: "transparent",
                },
                [theme.breakpoints.down("xs")]: {
                    width: "100%",
                },
                ["@media screen and (max-width: 320px)"]: {
                    fontSize: "20px",
                },
            },
        }
    )
)