import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
    createStyles({
        mainCardContainer: {
            width: "50%",
            minHeight: "100vh",
            backgroundColor: "white",
            paddingRight: 20,
            [theme.breakpoints.down("sm")]: {
               width: "100%",
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
        marginTop: "70px",
        // animat ion: "3s ease-in 1s infinite reverse both running slidein",
        transition: "3s ease-in-out",
        backgroundColor: "white",
        "&:focus": {
        background: "transparent",
    },
    // transform: 'translateY(50%)'
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