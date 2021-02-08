// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import { Box, Container, Typography } from "@material-ui/core";
import { SignIn } from "./SignIn";
import useStyles from "../styles/create";
import { TemplateDocumentButton } from "./TemplateDocumentButton";
import TestLoggedInPage from "./TestLoggedInPage";
import {Body} from "./layouts/Body";
import React from "react";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export default function Create() {
  const classes = useStyles();
  const [isToken, setIsToken] = React.useState("");
  React.useEffect(() => {
    setIsToken(window.localStorage.getItem("token"))
  }, )
  const documents = [
    "Name",
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
      {isToken ?
          <TestLoggedInPage/>
          :
          <SignIn />
      }
      <div>
        <Container maxWidth="lg">
          <Box
            display="flex"
            alignItems="center"
            padding="10px 0"
            style={{ marginBottom: "36px" }}
          >
            <InsertDriveFileOutlinedIcon className={classes.icon} />
            <Typography variant="subtitle2">Your library</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" style={{ marginBottom: "147px" }}>
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
