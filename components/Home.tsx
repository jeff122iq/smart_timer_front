// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import { Box, Button, Container, Typography } from "@material-ui/core";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import useStyles from "../styles/home";
import { HomeTop } from "./HomeTop";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function Home() {
  const classes = useStyles();

  const tepmplates = [
    "Web design",
    "WordPress",
    "Graphic design",
    "Java",
    "Motion design",
    "PHP",
    "Lead generation",
    "APS.Net",
    "Web design",
    "WordPress",
    "Graphic design",
    "Java",
    "Motion design",
    "PHP",
    "Lead generation",
    "APS.Net",
    "Web design",
    "WordPress",
    "Graphic design",
    "Java",
    "Motion design",
    "PHP",
    "Lead generation",
    "APS.Net",
  ];

  return (
    <div>
      <HomeTop />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center" padding="10px 0">
            <InsertDriveFileOutlinedIcon className={classes.icon} />
            <Typography variant="body1">Popular templates</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" margin="5px 0">
            {tepmplates.map((t, idx) => (
              <Button
                className={classes.button}
                variant="contained"
                key={idx}
                color="primary"
              >
                {t}
              </Button>
            ))}
          </Box>

          <Button className={classes.more}>SEE MORE</Button>
        </Container>
      </div>
    </div>
  );
}
// ========================== COMPONENT ====================================
