import { Footer } from "../Footer";
import { Header } from "../Header";
import { BodyContent } from "./BodyContent";
import useStyles from "../../styles/body";

export function Body({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <BodyContent>{children}</BodyContent>
      <Footer />
    </div>
  );
}
