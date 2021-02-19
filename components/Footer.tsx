// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import { Box, Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import clsx from 'clsx';
import useStyles from "../styles/footer";
import Link from "next/link";

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.rootFooter}>
      <Container maxWidth="lg">
        <Box display="flex" className={classes.footerContainer}>
          <Box display="flex" className={classes.footerLinksContainer}>
            <Link href={"/"}>
            <Typography variant="h6" className={clsx(classes.footerLink)}>
              BRIEFFER
            </Typography>
            </Link>
          </Box>
            <nav className={classes.navigation}>
            <Link href={"/"}>
              <Button className={classes.footerLink}>Home</Button>
            </Link>
            <Link href={"/create"}>
            <Button className={classes.footerLink}>Create Brief</Button>
            </Link>
            <Link href={"/templates"}>
            <Button className={classes.footerLink}>Brief templates</Button>
            </Link>
            <Link href={"/about"}>
            <Button className={classes.footerLink}>About</Button>
            </Link>
            <Link href={"/blog"}>
            <Button className={classes.footerLink}>Blog</Button>
            </Link>
            </nav>

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
