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
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from "@material-ui/icons/Menu";
import React, {useState} from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from '@material-ui/icons/Home';
import Link from "next/link";
import useStyles from "../styles/header";
import { useRouter } from "next/router";
import { Home } from "./Home";
import TestLoggedInPage from "./TestLoggedInPage";
import BriefTemplate from "./BriefTemplate";
import About from "./About";
import Blog from "./Blog";
import { CurrentPage } from "../store/currentPage";
import CloseIcon from '@material-ui/icons/Close';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import InfoIcon from '@material-ui/icons/Info';
import { observer } from "mobx-react";
import Create from "./Create";
import jwt_decode from "jwt-decode";
import ReactLetterAvatar from "react"
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const Header = () => {
  // ============================= LINKS ====================================
  const [navMenu, setNavMenu] = React.useState([
    { link: "", name: "Home", active: false },
    { link: "create", name: "Create brief", active: false },
    { link: "templates", name: "Brief template", active: false },
    { link: "about", name: "About", active: false },
    { link: "blog", name: "Blog", active: false },
  ]);

  const router = useRouter();

  const [decode, setDecode] = useState("");
  const [isToken, setIsToken] = useState('')

  const { currentPage } = CurrentPage;

  React.useEffect(() => {
    setNavMenu(
      navMenu.map((elem) => {
        if (elem.name === currentPage) {
          return { ...elem, active: true };
        }
        return { ...elem, active: false };
      })
    );
    setIsToken(window.localStorage.getItem('token'))
    if (isToken) {
      const decoder: any = jwt_decode(isToken);
      setDecode((decoder).email);
      console.log(decode)
      router.push("/");
    }
    // console.log(isToken);
  }, [currentPage]);

  const logout = () => {
    localStorage.clear();
    router.push("/create");
  }

  const switchLink = [
    <Home />,
    <TestLoggedInPage />,
    <Create />,
    <BriefTemplate />,
    <About />,
    <Blog />,
  ];
  const isTemplatesPage = router.pathname === "/templates";
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = (open: boolean) => {
    setIsOpen((prev) => !prev);
  };
  const close = () => {
    setIsOpen(false);
  }

  const menu = () => (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem>
          <CloseIcon onClick={close}/>
        <Typography className={classes.title}>BRIEFFER</Typography>
        </ListItem>
        <ListItem button>
          <HomeIcon/>
          <Link href={"/"}>
            <a className={classes.link}>Home</a>
          </Link>
        </ListItem>
        <ListItem button>
          <NoteAddIcon/>
          <Link href="/create">
            <a className={classes.link} href="/create">
              Create brief
            </a>
          </Link>
        </ListItem>
        <ListItem button>
          <NoteAddIcon/>
          <Link href={"/templates"}>
            <a className={classes.link}>
              Brief templates
            </a>
          </Link>
        </ListItem>
        <ListItem button>
          <InfoIcon/>
          <Link href="/about">
            <a className={classes.link} href="/about">
              About
            </a>
          </Link>
        </ListItem>
        <ListItem button>
          <SpeakerNotesIcon/>
          <Link href="/blog">
            <a className={classes.link} href="/blog">
              Blog
            </a>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.header}>
      {/* <AppBar position="static" className={classes.appbar}> */}
      <Container>
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
            <Link href={"/"}>
            <Typography className={classes.title}>BRIEFFER</Typography>
            </Link>
          </Box>
          <div className={classes.navLink}>
            {navMenu.map(({ name, link, active }, index) => {
              return (
                <div key={index}>
                  <Link href={`/${link}`} as={`/${link}`}>
                    <a className={active ? classes.activeLink : classes.link}>
                      {name}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>

          <Box display="flex" alignItems="center">
            <IconButton
              color="inherit"
              className={classes.userButton}
              aria-label="menu"
            >
            </IconButton>
            {isToken ? <>
              <Avatar src={""} className={classes.avatar}/>
              <p style={{marginLeft: "10px", color: "#5f5f5f"}}>{decode}</p>
            </> :
                <AccountCircleIcon className={classes.avatar} />}
            {isToken
                  ?
                  <Button onClick={logout} className={classes.button}>
                    <a className={classes.link}>Log out</a>
                  </Button>
                  :
                  <>
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
                  </>
            }
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};

export default observer(Header);
// ============================= LINKS ====================================
// ========================== COMPONENT ====================================
