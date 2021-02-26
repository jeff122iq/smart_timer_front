import useStyles from "../../styles/bodyAdmin";
import { BodyContentAdmin } from './BodyContentAdmin';
import AdminHeader from "../Admin/AdminHeader";
import {AdminFooter} from "../Admin/AdminFooter";

export default function BodyAdmin({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor: "#b7b7b7"}}>
      <AdminHeader />
      <BodyContentAdmin>{children}</BodyContentAdmin>
      <AdminFooter />
    </div>
  );
}