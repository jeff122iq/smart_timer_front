// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import { Box, Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import clsx from 'clsx';
import useStyles from "../../styles/admin/adminFooter";
import Link from "next/link";
import React from "react";

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function AdminFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.rootFooter}>
      <Container style={{maxWidth: 1365}}>
      <Box display="flex" className={classes.footerContainer}>
          <Box display="flex" className={classes.footerLinksContainer}>
            <Link href={"/"}>
            <Typography variant="h6" className={clsx(classes.footerLink)}>
              BRIEFFER
            </Typography>
            </Link>
          </Box>
            <nav className={classes.navigation}>
            <Link href={"/admin"}>
              <Button className={classes.footerLink}>Home</Button>
            </Link>
            <Link href={"/admin/edit_categories"}>
            <Button className={classes.footerLink}>Edit tag</Button>
            </Link>
            <Link href={"/admin/brief_templates"}>
            <Button className={classes.footerLink}>Brief templates</Button>
            </Link>
            <Link href={"/admin/about"}>
            <Button className={classes.footerLink}>About</Button>
            </Link>
            <Link href={"/admin/blog"}>
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
