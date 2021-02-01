import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootModal: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "800px",
      background: "#fff",
      margin: "100px auto",
      ["@media screen and (max-width: 810px)"]: {
      // [theme.breakpoints.down("md")]: {
        margin: "180px 10px",
      },
    },

    input: {
      width: "100%",
      margin: "10px",
    },

    descriptionBtn: {
      padding: "35px 25px",
      display: "flex",
      justifyContent: "flex-start",
      width: "100%",
    },
    briefTemplateTags: {
      marginTop: "30px",
      width: "100%",
      padding: "0 8px",
    },
    briefTemplate_description: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      padding: "0 10px",
      backgroundColor: "red",
    },
    briefTemplateModal: {
      width: "100%",
    },
    deleteIcon: {
      color: "red",
    },
  })
);
