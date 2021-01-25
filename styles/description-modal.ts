import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootModal: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "800px",
      background: "#fff",
      margin: "100px auto",
      // ["@media screen and (max-width: 768px)"]: {
      [theme.breakpoints.down("md")]: {
        margin: "180px 10px",
      },
    },

    input: {
      width: "100%",
      margin: "10px",
    },

    descriptionBtn: {
      padding: "35px 25px",
      boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.2)",
      display: "flex",
      justifyContent: "flex-start",
      margin: "30px 0",
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
  })
);
