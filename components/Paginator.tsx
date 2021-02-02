// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiPagination-ul": {
        "& > li": {
          margin: "0",
          padding: "0",
          width: "25px",
          "&:hover": {
            background: "transparent",
          },
          "&:active": {
            background: "transparent",
          },
          "& > button": {
            "& > .MuiTouchRipple-root": {
              zIndex: -1,
            },
          },
          "& > .MuiPaginationItem-page": {
            background: "transparent",

            "& > .Mui-selected": {
              background: "transparent",
              "&:hover": {
                background: "transparent",
              },
              "&:active": {
                background: "transparent",
              },
            },
          },
          "&:first-child": {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            "&:hover": {
              background: "transparent",
            },
            "& > button::after": {
              color: "#347cff",
              marginRight: "50px",
              content: "'Previous'",

              "&:hover": {
                background: "transparent",
              },
              "&:active": {
                background: "transparent",
              },
            },
          },
          "&:last-child": {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            "& > button::before": {
              color: "#347cff",
              marginLeft: "50px",
              content: "'Next'",
            },
          },
        },
      },
      "& .MuiPaginationItem-icon": {
        display: "none",
        color: "transparent",
        background: "transparenret",
      },
      "& .Mui-disabled": {
        opacity: 0,
      },
      "& > *": {
        marginTop: theme.spacing(2),
      },
      "& .Mui-selected": {
        backgroundColor: "transparent",
        color: "#347cff",
        fontWeight: 700,
      },
    },
  })
);

export default function Paginator({ ...props }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination size="small" {...props} />
    </div>
  );
}
// ========================== COMPONENT ====================================
