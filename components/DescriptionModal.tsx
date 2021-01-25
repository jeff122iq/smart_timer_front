// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import MUIRichTextEditor from "mui-rte";
import useTheme from "@material-ui/core/styles/useTheme";
import useStyles from "../styles/description-modal";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const local_theme_overrides = {
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: 20,
        width: "100%",
      },
      toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        position: "relative",
        // boxShadow: "0px -1px 3px 0px rgba(0,0,0,0.2)",
        "& > button": {
          color: "#347cff",
        },
      },
      label: {},
      editor: {
        padding: "0 0 0 10px",
      },
      placeHolder: {
        position: "static",
        padding: "0 0 35px 8px",
      },
      container: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column-reverse",
      },
    },
  },
};

const DescriptionModal = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [localTheme, setLocalTheme] = useState(theme);
  const [bold, setBold] = useState(false);

  const save = (data: any) => {
    const dataValue = JSON.parse(data);
    dataValue.title = inputValue;

    console.log(dataValue);
  };
  const handldeBold = () => {
    setBold(!bold);
  };
  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    setLocalTheme(Object.assign({ ...theme }, local_theme_overrides));
  }, []);

  return (
    <div className={classes.rootModal}>
      <InputBase
        className={classes.input}
        placeholder="Write title"
        inputProps={{ "aria-label": "naked" }}
        value={inputValue}
        onChange={handleInputValue}
      />
      <ThemeProvider theme={localTheme}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <MUIRichTextEditor
            controls={["numberList", "link", "bold", "delete"]}
            inlineToolbar={true}
            label="Write description..."
            onSave={save}
          ></MUIRichTextEditor>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default DescriptionModal;
// ========================== COMPONENT ====================================
