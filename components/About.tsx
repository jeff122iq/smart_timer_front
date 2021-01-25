// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import { Box, Container, Typography } from "@material-ui/core";
import Image from "next/image";
import useStyles from "../styles/about";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.rootAbout}>
        <Box display="flex" className={classes.aboutContainer}>
          <div className={classes.block}>
            <ol>
              <li>
                <a href="#">Title</a>
              </li>
              <li>
                <a href="#">Title Title Title</a>
              </li>
              <li>
                <a href="#">Title Title Title Title</a>
              </li>
              <li>
                <a href="#">Title Title Title Title Title Title</a>
              </li>
              <li>
                <a href="#">
                  TitleTitleTitleTitle TitleTitle TitleTitleTitle TitleTitle
                  Title
                </a>
              </li>
            </ol>
          </div>
          <div className={classes.block}>
            <Typography variant="h5">Where does it come from</Typography>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              repellendus. Nam quos autem laborum corporis.
            </div>
          </div>
        </Box>
        <Box display="flex" className={classes.aboutContainer}>
          <div className={classes.block}>
            <Typography variant="h5">Where does it come from</Typography>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque eligendi fugit nostrum? Animi, ducimus! Earum labore
              repudiandae asperiores molestias vero enim quibusdam nemo neque,
              dolorum unde! Voluptatum nemo explicabo illum, similique
              repellendus perferendis cumque odio?
            </div>
          </div>
          <div className={classes.block}>
            <Image
              src="/placeholder.png"
              alt="Placeholder"
              width="1600"
              height="900"
            />
          </div>
        </Box>
        <Box display="flex" className={classes.aboutContainer}>
          <div className={classes.block}>
            <Typography variant="h5">Where does it come from</Typography>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque eligendi fugit nostrum? Animi, ducimus! Earum labore
              repudiandae asperiores molestias vero enim quibusdam nemo neque,
              dolorum unde! Voluptatum nemo explicabo illum, similique
              repellendus perferendis cumque odio?
            </div>
          </div>
          <div className={classes.block}>
            <Image
              src="/placeholder.png"
              alt="Placeholder"
              width="1600"
              height="900"
            />
          </div>
        </Box>
      </Container>
    </div>
  );
}
// ========================== COMPONENT ====================================
