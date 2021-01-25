import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: { zIndex: 1,
      background: '#eeeeee',
    },
    glass: {
      position: "absolute",
      top: 66,
      width: "100vw",
      height: "32px",
      zIndex: -1,
      boxShadow: "-1px 2px 8px 0px rgba(0,0,0,0.5)",
    },
  })
);
