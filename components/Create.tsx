// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import { Box, Container, Typography } from "@material-ui/core";
import { SignIn } from "./SignIn";
import useStyles from "../styles/create";
import { TemplateDocumentButton } from "./TemplateDocumentButton";
import TestLoggedInPage from "./TestLoggedInPage";
import React from "react";
import {BriefStore} from "../store/briefStore";
import {observer} from "mobx-react";
import {useRouter} from "next/router";

// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const Create =() => {
  const classes = useStyles();
  const [isToken, setIsToken] = React.useState("");
  const {createBrief, getBrief, briefs} = BriefStore;
  const [brief,setBrief] = React.useState([])
  React.useEffect(() => {
    setIsToken(window.localStorage.getItem("token"))
  }, )
  const router = useRouter();

  React.useEffect(()=>{
    async function getData(){
      getBrief();
    }
    setBrief(createBrief);
    getData();
  },[createBrief])



  return (
    <>
      {isToken ?
          <TestLoggedInPage/>
          :
          <SignIn/>
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
            {briefs.map(({name, id}) => (
              <TemplateDocumentButton name={name} id={id} key={id} />
            ))}
          </Box>
        </Container>
      </div>
    </>
  );
}
export default observer(Create);
// ========================== COMPONENT ====================================
