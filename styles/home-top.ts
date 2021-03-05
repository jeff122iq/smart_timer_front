import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "white",
      marginTop: "64px",
        boxShadow: "-1px 1px 6px 0px rgba(0,0,0,0.6)",
        "& > .MuiAutocomplete-popupIndicator": {
            transform: "rotate(45deg)",
        },

    },
    content: {
      maxWidth: "700px",
      margin: "15px auto 0 auto",
    },
    caption: {
      fontWeight: 900,
      fontSize: 32,
      lineHeight: "1.1",
      textAlign: "center",
      fontFamily: "Roboto, sans-serif",
      letterSpacing: 1,
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "50px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "-8px",
        }
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
    },
      clearIndicatorDirty: {
          display:'none'
      },
    input: {
        popupIndicator: {
            "&:active": {
                transform: "none",
            }
        },
        width: "100%",
        padding: "auto 5px",
        "& button": {
            backgroundColor: "transparent",
            "&:active": {
                backgroundColor: "transparent",
                transform: "none"
            },
            "&:hover": {
                backgroundColor: "transparent",
            },
            "& span": {
                marginRight: "15px",
                backgroundColor: "transparent",
                "& svg": {
                    "& path": {
                        d:
                            "path('M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z')",
                    },
                },
                "&:active": {
                    transform: "none",
                },
            },
        },
    },
      underline: {
          "&&&:before": {
              borderBottom: "none",
          },
          "&&:after": {
              borderBottom: "none",
          },
      },
    button: {
      backgroundColor: "#f9c229",
      margin: "15px 0",
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.5)",
    },
    shadow: {
      backgroundColor: "transparent",
      height: 1,
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.5)",
    },
  })
);
