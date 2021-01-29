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
import { Home } from "./Home";
import TestLoggedInPage from "./TestLoggedInPage";
import BriefTemplate from "./BriefTemplate";
import About from "./About";
import Blog from "./Blog";
import { useEffect } from "react";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function Header() {
  // ============================= LINKS ====================================
  const [navMenu, setNavMenu] = useState([
    { link: "", name: "Home", active: false },
    { link: "create", name: "Create brief", active: false },
    { link: "templates", name: "Brief template", active: false },
    { link: "about", name: "About", active: false },
    { link: "blog", name: "Blog", active: false },
  ]);
  // const [selectedLink, setSelectedLink] = useState(null);
  // const [pathSelected, setPathSelected] = useState("");
  // const [selected, setSelected] = useState(false);

  // useEffect(() => {
  //   path.map((el, index) => {
  //     if (index === selectedLink) {
  //       console.log("map", el, index);
  //       setPathSelected(el);
  //     }
  //   });
  // }, []);

  const handleLink = (index, event) => {
    setNavMenu(
      navMenu.map((elem, i) => {
        if (index === i) {
          return { ...elem, active: true };
        }
        return { ...elem, active: false };
      })
    );
  };

  console.log(navMenu);

  // useEffect(() => {
  //   selected
  //     ? path.map((el, index) => {
  //         if (index === selectedLink) {
  //           console.log("map", el, index);
  //           setPathSelected(el);
  //           setSelected(false);
  //           setSelectedLink(index);
  //         }
  //       })
  //     : null;
  // }, [selectedLink]);
  // console.log(selected);
  const switchLink = [
    <Home />,
    <TestLoggedInPage />,
    <BriefTemplate />,
    <About />,
    <Blog />,
  ];
  const router = useRouter();
  const isTemplatesPage = router.pathname === "/templates";
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (open: boolean) => {
    setIsOpen((prev) => !prev);
  };
  const getLink = () => {
    // return path.map((el, index) => {
    //   // console.log(el);
    //   if (index === selectedLink) {
    //     setPathSelected(el);
    //   }
    // });
  };

  const menu = () => (
    <div className={classes.list} role="presentation">
      <List>
        {/* {links.map((index) => {
          return (
            <div key={index}>
              <ListItem>
                <Link href="/">
                  <a
                    className={
                      index === selectedLink ? classes.activeLink : classes.link
                    }
                    onClick={() => handleLink(index)}
                  >
                    Home
                  </a>
                </Link>
              </ListItem>
            </div>
          );
        })} */}

        {/* <ListItem button>
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
        </ListItem> */}
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

            {navMenu.map(({ name, link, active }, index) => {
              return (
                <Box key={index} display="flex" className={classes.linkBox}>
                  <ListItem
                    className={active ? classes.activeLink : classes.link}
                  >
                    {/* {path.map((el, index) => {
                      if (el === selectedLink) {
                        return (
                          <div className="" key={index}>
                            {el}
                          </div>
                        );
                      }
                    })} */}
                    <Link href={`/${link}`}>
                      <a onClick={() => handleLink(index)}>{name}</a>
                    </Link>
                  </ListItem>
                </Box>
              );
            })}
            {/* <Box display="flex" className={classes.linkBox}>
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
            </Box> */}

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
// ============================= LINKS ====================================
// ========================== COMPONENT ====================================
