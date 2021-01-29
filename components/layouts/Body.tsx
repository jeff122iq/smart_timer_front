import { Footer } from "../Footer";
import { Header } from "../Header";
import { BodyContent } from "./BodyContent";
import useStyles from "../../styles/body";
import { useState } from "react";

export function Body({ children }) {
  const classes = useStyles();
  console.log("test2");

  return (
    <div className={classes.root}>
      <Header />
      <BodyContent>{children}</BodyContent>
      <Footer />
    </div>
  );
}
