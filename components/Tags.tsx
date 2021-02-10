// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  makeStyles,
  withStyles,
  createStyles,
  ThemeProvider,
  Theme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { observer } from "mobx-react";
import {toJS} from 'mobx'
import * as _ from 'lodash'


import { TagsStore } from "../store/tagsStore";
import { tags } from "../interface/tags";
import useStyles from "../styles/tags";
import { createMuiTheme } from "@material-ui/core/styles";
import {log} from "util";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
// const local_theme_overrides = {

// }

const theme = createMuiTheme({
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: "#347cff",
        color: "#fff",
        borderRadius: "4px",
        position: "relative",
        zIndex: 0,
      },
      label: {
        color: "#fff",
      },
      deleteIcon: {
        color: "#fff",
      },
    },
    MuiInput: {
      underline: {
        "&::before": {
          borderBottom: "none",
        },
        "&::after": {
          borderBottom: "none",
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: "none",
        },
      },
    },
  },
});

const CustomAutocomplete = withStyles(() => {
  createStyles({
    overrides: {
    },
  });
})(Autocomplete);

const LimitTags = () => {
  const classes = useStyles();
  const { getTags, tag, tagLength } = TagsStore;
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function  getData(){
      await getTags();
    }
    getData()
  }, []);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CustomAutocomplete
          classes={{
            autocomplete: classes.autocomplete,
            popupIndicator: classes.popupIndicator,
            clearIndicatorDirty: classes.clearIndicatorDirty
          }}
          className={classes.autocomplete}
          onChange={(event, value: tags[]) => {
            setTags(() => _.uniqBy(value, (v) => v.id));
            console.log(tags)
          }}
          multiple
          options={toJS(tag)}
          getOptionLabel={(option: any) => option.name}
          value={tags}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </ThemeProvider>
    </div>
  );
};

export default observer(LimitTags);
// ========================== COMPONENT ====================================
