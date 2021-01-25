// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import { Box, Typography } from "@material-ui/core";
import Image from "next/image";
import Container from "@material-ui/core/Container";
import useStyles from "../styles/title";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function Title() {
  const classes = useStyles();

  return (
    <Box className={classes.rootTitle}>
      <Container maxWidth="lg">
        <div className={classes.titleWrap}>
          <Image
            className={classes.image}
            src="/arrow_back-24px.svg"
            alt="arrow0back"
            width="50"
            height="20"
          />
          <Typography>Template name</Typography>
        </div>
      </Container>
    </Box>
  );
}
// ========================== COMPONENT ====================================
