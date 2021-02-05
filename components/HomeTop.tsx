// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import {
  Button,
  Container,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "../styles/home-top";
import Link from "next/link";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function HomeTop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h6" className={classes.caption}>
          Find or create brief for necissary type of work
        </Typography>
        <div className={classes.content}>
          <Paper component="form" className={classes.inputContainer}>
            <InputBase
              className={classes.input}
              placeholder="Search brief templates"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Link href={'/create'}>
          <Button className={classes.button}>Create new brief</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
// ========================== COMPONENT ====================================
