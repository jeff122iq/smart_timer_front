import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
      borderRadius: "4px",
      border: "none",
    },
    input: {
      border: "none",
    },
    autocomplete: {
    },
    underline: {
      "&&&:before": {
        borderBottom: "none",
      },
      "&&:after": {
        borderBottom: "none",
      },
    },
  })
);
