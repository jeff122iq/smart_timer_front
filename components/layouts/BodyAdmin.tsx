import { Footer } from "../Footer";
import Header from "../Header";
import useStyles from "../../styles/bodyAdmin";
import { BodyContentAdmin } from './BodyContentAdmin';

export default function BodyAdmin({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor: "black"}}>
      <Header />
      <BodyContentAdmin>{children}</BodyContentAdmin>
      <Footer />
    </div>
  );
}