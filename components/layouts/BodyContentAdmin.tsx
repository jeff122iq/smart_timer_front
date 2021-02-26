import { useRouter } from "next/router";

import useStyles from "../../styles/body-content-admin";
import { AdContainer } from "../AdContainer";
import {AdminRouterBack} from "../Admin/AdminRouterBack";

export function BodyContentAdmin({ children }) {
  const classes = useStyles();
  const router = useRouter();
  const isNotIndex = router.route !== "/admin";

  return (
    <div className={classes.root}>
      {isNotIndex && (
        <div>
          <AdminRouterBack />
        </div>
      )}

      <div>{children}</div>
    </div>
  );
}
