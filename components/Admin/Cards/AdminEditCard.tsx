// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import MUIRichTextEditor from "../../mui-rte/MUIRichTextEditor";
import useTheme from "@material-ui/core/styles/useTheme";
import useStyles from "../../../styles/description-modal";
import ModalBurgerMenu from "../../ModalBurgerMenu";
import { observer } from "mobx-react";
import { CardStore } from "../../../store/cardStore";
import { v4 } from "uuid";
import { ICard } from "../../../interface/cards";
import {EditTagAndCategories} from "../../../store/admin/editTagAndCategories";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const local_theme_overrides = {
    overrides: {
        linkPopover: {},
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
                UrlPopover: {},
                "& >.UrlPopover-linkPopover": {},
            },
            "& > .MuiPopover-paper": {
                ".UrlPopover-linkPopover-1471": {
                    zIndex: 500,
                },
            },
            MuiPopover: {
                root: {
                    UrlPopover: {
                        zIndex: 500,
                    },
                    linkPopover: {},
                },
            },
            focusVisible: {
                display: "none",
            },


            toolbar: {
                display: "flex",
                justifyContent: "flex-start",
                position: "relative",
                width: '100%',
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

const AdminEditCard = ({
                              setOpen,
                              setOpenCard,
                              card = { title: "", description: {blocks: []}, id: "" },
                          }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);
    const [localTheme, setLocalTheme] = useState(theme);
    const {isMainField, createMainFieldCards} = EditTagAndCategories;

    const save = async (data: any) => {
        const idx = isMainField.findIndex((current) => current.id === card.id);
        if (idx >= 0) {
            isMainField[idx].title = title;
            isMainField[idx].description = JSON.parse(data)
            setOpenCard(false)
        } else {
            await createMainFieldCards(title, data);
        }
        setOpen(false);
    };

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
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
                        defaultValue={""}
                        controls={["numberList", "link", "bold", "MoreVertIcon", "save"]}
                        inlineToolbar={true}
                        label={"Write description"}
                        onSave={save}
                        customControls={[
                            {
                                name: "MoreVertIcon",
                                icon: <ModalBurgerMenu />,
                                type: "callback",
                                onClick: () => { },
                            },
                            {
                                name: "save",
                                icon: (
                                    <div
                                        onClick={save}
                                        style={{
                                            textTransform: "uppercase",
                                            fontSize: "15px",
                                            fontWeight: 600,
                                            fontFamily: "Roboto, san-serif",
                                        }}
                                    >
                                        close
                                    </div>
                                ),
                                type: "callback",
                            },
                            {
                                name: "link",
                                icon: <ModalBurgerMenu description = {description}/>,
                                type: "callback",
                                onClick: () => console.log("test"),
                            },
                        ]}
                    />
                </div>
            </ThemeProvider>
        </div>
    );
};

export default observer(AdminEditCard);