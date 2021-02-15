// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import { Box, Typography } from "@material-ui/core";
import Image from "next/image";
import Container from "@material-ui/core/Container";
import useStyles from "../styles/title";
import {useRouter} from "next/router";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function Title() {
  const classes = useStyles();
    const router = useRouter()
  return (
    <Box className={classes.rootTitle}>
      <Container maxWidth="lg">
        <div onClick={() => router.back()} className={classes.titleWrap}>
            <i className="fas fa-arrow-left"/>
          <Typography>Back</Typography>
        </div>
      </Container>
    </Box>
  );
}
// ========================== COMPONENT ====================================
