// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import MUIRichTextEditor from "./mui-rte/MUIRichTextEditor";
import useTheme from "@material-ui/core/styles/useTheme";
import useStyles from "../styles/description-modal";
import ModalBurgerMenu from "./ModalBurgerMenu";
import { observer } from "mobx-react";
import {CardStore} from "../store/cardStore";
import { v4 } from 'uuid'
import { ICard } from "../interface/cards";
import {EditorState} from 'draft-js'
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const local_theme_overrides =  {
  overrides: {
    linkPopover: {

    },
    MUIRichTextEditor: {
      root: {
        marginTop: 20,
        width: "100%",
        "& > .Mui-focusVisible": {
          display: "none",
          "&:focus": {
            display: "none",
          },
        },
        UrlPopover: {
        },
        '& >.UrlPopover-linkPopover': {

        },
      },
      '& > .MuiPopover-paper': {
        '.UrlPopover-linkPopover-1471': {
          zIndex: 500,
        },

      },
      MuiPopover: {
        root: {
          UrlPopover: {
            zIndex: 500,
          },
          linkPopover: {
          },
        },
      },
      focusVisible: {
        display: "none",
      },

      toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        position: "relative",
        "& > button": {
          color: "#347cff",
        },
        "& > button:nth-child(4)": {
          position: "absolute",
          // left: 250,
          // width: "100%",
          left: "calc(50% - 24px)",
          bottom: 0,
          // zIndex: 0,
        },
        "& > button:nth-child(5)": {
          position: "absolute",
          right: 15,
          bottom: 0,
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
    MuiIconButton: {
      root: {
        backgroundColor: "transparent !important",
        "& :hover": {
          backgroundColor: "$labelcolor",
        },
      },
    },
  },
};

const DescriptionModal = ({ setOpen, card = {title: "", description: "", id: ''}}) => {
  console.log('inputValue', card.description)

  const classes = useStyles();
  const theme = useTheme();
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [localTheme, setLocalTheme] = useState(theme);
  const {whiteCards, selectCard} = CardStore;
  
  const save = (data: any) => {
    const idx = whiteCards.findIndex((current)=> current.id === card.id);
    console.log(idx);
    
    if(idx >= 0) {
      whiteCards[idx].title = title;
      whiteCards[idx].description = description;
    } else {
      const jsonDescription = JSON.parse(data)
      const newCard: ICard = { title, description: jsonDescription.blocks[0].text, id: v4(), jsonDescription };
      whiteCards.push(newCard);
    }
    setOpen(false);
  };

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionInput = (event: EditorState) => {
    console.log(event);
    
    // setDescription()
  };

  useEffect(() => {
    setLocalTheme(Object.assign({ ...theme }, local_theme_overrides));
  }, []);

  return (
    <div className={classes.rootModal} style={{}}>
      <InputBase
        className={classes.input}
        placeholder="Write title"
        inputProps={{ "aria-label": "naked" }}
        value={title}
        onChange={handleInputValue}
      />
      <ThemeProvider theme={localTheme}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            width: "100%",
          }}
        >
          <MUIRichTextEditor
            defaultValue={JSON.stringify({"blocks":[{"key":"9dnkp","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}})}
            value={description}
            controls={["numberList", "link", "bold", "MoreVertIcon", "save"]}
            inlineToolbar={true}
            label={card.description ? card.description : 'Write description'}
            onSave={save}
            onChange={handleDescriptionInput}
            customControls={[
              {
                name: "MoreVertIcon",
                icon: <ModalBurgerMenu />,
                type: "callback",
                onClick: () => {},
              },
              {
                name: "save",
                icon: <div onClick={save} style={{
                  textTransform: "uppercase",
                  fontSize: "15px",
                  fontWeight: 600,
                  fontFamily: "Roboto, san-serif"
                }}>close</div>,
                type: "callback",
              },
              {
                name: 'link',
                icon: <ModalBurgerMenu />,
                type: "callback",
                onClick: () => console.log('test'),
              },
            ]}

          />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default observer(DescriptionModal);
// ========================== COMPONENT ====================================
