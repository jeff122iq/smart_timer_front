// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import { Box, Container, Typography } from "@material-ui/core";
import { SignIn } from "./SignIn";
import useStyles from "../styles/create";
import { TemplateDocumentButton } from "./TemplateDocumentButton";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export default function Create() {
  const classes = useStyles();
  const isLogedIn = false; // get from cookie

  const documents = [
    "Name of document",
    "Name of document",
    "Type of document with long long long long long long name",
    "Type of document with long long long long long long name",
    "Type of document with long long long long long long name",
    "Type of document with long long long long long long name",
    "Name of document",
    "Name of document",
    "Name of document",
  ];

  return (
    <>
      {!isLogedIn && <SignIn />}
      <div>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center" padding="10px 0">
            <InsertDriveFileOutlinedIcon className={classes.icon} />
            <Typography variant="subtitle2">Your library</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            {documents.map((data, idx) => (
              <TemplateDocumentButton data={data} key={idx} />
            ))}
          </Box>
        </Container>
      </div>
    </>
  );
}
// ========================== COMPONENT ====================================
