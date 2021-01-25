// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import { Box, Container } from "@material-ui/core";
import useStyles from "../styles/ad-container";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function AdContainer() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Box display="flex" className={classes.advContainer}>
          <div className={classes.adv}>300х250</div>
          <div className={classes.adv}>300х250</div>
          <div className={classes.adv}>300х250</div>
        </Box>
      </Container>
    </>
  );
}
// ========================== COMPONENT ====================================
