import React, { Children } from "react";
import useStyles from "../styles/container";

const Container = (props) => {
  const classes = useStyles();

  return <div className={classes.container}>{props.children}</div>;
};

export default Container;
