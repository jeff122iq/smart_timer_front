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
          "&:first-child": {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            "& > button::after": {
              color: "#347cff",
              marginRight: "40px",
              content: "'Previous'",
            },
          },
          "&:last-child": {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            "& > button::before": {
              color: "#347cff",
              marginLeft: "20px",
              content: "'Next'",
            },
          },
        },
      },
      "& .MuiPaginationItem-icon": {
        display: "none",
        color: "transparent",
        background: "transparent",
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

export default function Paginator(props) {
  const classes = useStyles();
  const pages = props.pages;
  return (
    <div className={classes.root}>
      <Pagination count={pages} size="small" />
    </div>
  );
}
// ========================== COMPONENT ====================================
