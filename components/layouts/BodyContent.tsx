import { useRouter } from "next/router";

import { Title } from "../Title";
import useStyles from "../../styles/body-content";
import { AdContainer } from "../AdContainer";

export function BodyContent({ children }) {
  const classes = useStyles();
  const router = useRouter();
  const isNotIndex = router.route !== "/";
  return (
    <div className={classes.root}>
      {isNotIndex && (
        <div>
          <Title />
        </div>
      )}

      <div>{children}</div>
      <div>
        <AdContainer />
      </div>
    </div>
  );
}
