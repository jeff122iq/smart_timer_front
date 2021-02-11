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
import {CardStore} from "../store/cardStore";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================

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
  const { getTags, tag, tagLength, setSelectedTags} = TagsStore;
  const { cardsData } = CardStore
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
          onChange={async(event, value: tags[]) => {
            value = _.uniqBy(value, (v) => v.id);
            setTags(() => value);
            await setSelectedTags(value);
            console.log(value)
            await cardsData(value)
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
