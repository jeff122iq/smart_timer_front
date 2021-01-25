// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import { Box, Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useStyles from "../styles/footer";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.rootFooter}>
      <Container maxWidth="lg">
        <Box display="flex" className={classes.footerContainer}>
          <Box display="flex" className={classes.footerLinksContainer}>
            <Typography variant="h6" className={classes.footerLink}>
              BRIEFFER
            </Typography>
            <Button className={classes.footerLink}>Create Brief</Button>
            <Button className={classes.footerLink}>Brief templates</Button>
            <Button className={classes.footerLink}>About</Button>
            <Button className={classes.footerLink}>Blog</Button>
          </Box>

          <Box display="flex" className={classes.helpLinksContainer}>
            <a href="#" className={classes.helpLink}>
              Terms
            </a>
            <a href="#" className={classes.helpLink}>
              Privacy
            </a>
            <p className={classes.helpLink}>© 2021 Brieffer</p>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
// ========================== COMPONENT ====================================
