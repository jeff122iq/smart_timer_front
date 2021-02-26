import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
    createStyles({
        rootFooter: {
            width: "100%",
            display: "flex",
            backgroundColor: "#252525",
            color: "white",
            marginTop: "auto",
            zIndex: 100,
        },

        footerContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 0",
            width: "100%",
            margin: "0 auto",
            ["@media screen and (max-width: 768px)"]: {
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
            },
            ["@media screen and (max-width: 425px)"]: {
                justifyContent: "flex-start"
            }
        },
        footerLinksContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            "& > h6": {
                margin: 0,
                fontFamily: "'Imbue', serif",
                letterSpacing: "1.5px !important",
                fontSize: 16,
            },
            ["@media screen and (max-width: 768px)"]: {
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
            },
            ["@media screen and (max-width: 425px)"]: {
                marginBottom: "15px",
                display: "flex",
                alignItems: "flex-start",
                width: "100%",

            }
        },
        footerLink: {
            cursor: "pointer",
            color: "white",
            backgroundColor: "transparent",
            padding: 0,
            fontSize: 14,
            margin: "0 15px",
            fontWeight: "inherit",
            minWidth: "inherit",
            letterSpacing: "inherit",
            textTransform: "inherit",
            "& :not(:first-child)": {
                fontSize: "inherit",
            },
            ["@media screen and (max-width: 768px)"]: {
                margin: 0,
            },
        },
        helpLinksContainer: {
            display: "flex",
            justifyContent: "space-between",
            width: "20%",
            "& :nth-child(1)": {
                marginLeft: 0,
            },
            ["@media screen and (max-width: 768px)"]: {
                justifyContent: "space-between",
                width: "100%",
            },
        },

        navigation: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
            ["@media screen and (max-width: 768px)"]: {
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: 20,

            }
        },

        helpLink: {
            color: "#787878",
            margin: 0,
        },
    })
);