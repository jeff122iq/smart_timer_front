// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  Drawer,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Link from "next/link";
import useStyles from "../styles/header";
import { useRouter } from "next/router";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function Header() {
  const router = useRouter();
  const isTemplatesPage = router.pathname === "/templates";

  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (open: boolean) => {
    setIsOpen((prev) => !prev);
  };

  const menu = () => (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem button>
          <Link href="/">
            <a className={classes.link}>Home</a>
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/create">
            <a className={classes.link}>Create brief</a>
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/templates">
            <a className={classes.link}>Brief templates</a>
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/about">
            <a className={classes.link}>About</a>
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/blog">
            <a className={classes.link}>Blog</a>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container maxWidth={isTemplatesPage ? "xl" : "lg"}>
          <Toolbar className={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => toggleMenu(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer open={isOpen} onClose={() => toggleMenu(false)}>
                {menu()}
              </Drawer>
              <Typography className={classes.title}>BRIEFFER</Typography>
            </Box>

            <Box display="flex" className={classes.linkBox}>
              <Link href="/">
                <a className={classes.link}>Home</a>
              </Link>
              <Link href="/create">
                <a className={classes.link}>Create brief</a>
              </Link>
              <Link href="/templates">
                <a className={classes.link}>Brief template</a>
              </Link>
              <Link href="/about">
                <a className={classes.link}>About</a>
              </Link>
              <Link href="/blog">
                <a className={classes.link}>Blog</a>
              </Link>
            </Box>

            <Box display="flex">
              <IconButton
                color="inherit"
                className={classes.userButton}
                aria-label="menu"
              >
                <AccountCircleIcon className={classes.avatar} />
              </IconButton>
              <Button className={classes.button}>
                <Link href="/signin">
                  <a className={classes.link}>Log in</a>
                </Link>
              </Button>
              <Button className={classes.button}>
                <Link href="/signin">
                  <a className={classes.link}>Sign in</a>
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
// ========================== COMPONENT ====================================
