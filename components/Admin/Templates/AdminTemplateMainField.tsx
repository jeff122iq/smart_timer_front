import React, {useState} from 'react';
import Tags from "../../Tags";
import useStyles from "../../../styles/testLoggedInPage";
import {ButtonBase, ClickAwayListener, Collapse, InputBase, Typography} from "@material-ui/core";
import MUIRichTextEditor from "../../mui-rte/MUIRichTextEditor";
import Modal from "@material-ui/core/Modal";
import DescriptionModal from "../../DescriptionModal";
import Paginator from "../../Paginator";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import {TagsStore} from "../../../store/tagsStore";
import {CardStore} from "../../../store/cardStore";
import {BriefStore} from "../../../store/briefStore";
import {ICard} from "../../../interface/cards";
import Axios from "axios";
import {createStyles, withStyles} from "@material-ui/core/styles";
import {observer} from "mobx-react";

const CustomButton = withStyles(() => {
    createStyles({
        focusVisible: {
            display: "none",
        },
    });
})(ButtonBase);

const AdminTemplateMainField = () => {
    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const classes = useStyles();
    const {tagLength} = TagsStore;
    const {whiteCards, card} = CardStore;
    const {addBrief} = BriefStore;
    const [isToken, setIsToken] = React.useState("");
    React.useEffect(() => {
        setIsToken(window.localStorage.getItem("token"));
    });
    const [actionsBurger, setActionsBurger] = useState(false);
    // ================MODAL==================
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [openCurrent, setOpenCurrent] = useState(false);
    const [selectedWhiteCard, setSelectedWhiteCard] = useState<ICard>();
    const [openCard, setOpenCard] = useState(true);
    // ================MODAL==================
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(whiteCards.length / 2);
    const handlePagination = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
    };
    const [writeDescription, setWriteDescription] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    async function saveBrief() {
        try {
            const response = await Axios.post(
                `http://${process.env.BACK_URL}:${process.env.BACK_PORT}/templates`,
                {
                    name: inputValue,
                    cards: whiteCards.map(whiteCard => ({
                        title:whiteCard.title ,
                        description: JSON.stringify(whiteCard.description)
                    }))
                },
                {
                    headers: {
                        Authorization: `Bearer ${isToken}`,
                    },
                }
            );
            addBrief(response.data);
            clearAll();
            setInputValue("");
        } catch (error) {
            setInputValue("Введите название!")
        }

    }

    const copyLink = () => {
        const el = document.createElement("textarea");
        el.value = `http://localhost:3000/create`;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    };
    const copyText = () => {
        const el = document.createElement("textarea");
        el.value = inputValue;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setActionsBurger(false);
    };
    const handleClickAway = () => {
        setActionsBurger(false);
    };
    const handleActionsBurger = () => {
        setActionsBurger(!actionsBurger);
    };
    const handleWriteDescription = () => {
        setWriteDescription(!writeDescription);
        setOpen(true);
    };
    const handleOpenCurrent = (whiteCard: ICard) => {
        setSelectedWhiteCard(whiteCard);
        setOpenCurrent(true);
        setOpenCard(!openCard)
        console.log('opeCard OPEN', openCard)
    };
    const handleCloseCurrent = () => {
        setOpenCurrent(false);
        console.log('opeCard CLOSE', openCard)

    };
    const clearAll = () => {
        whiteCards.length = 0;
        setActionsBurger(false);
        setInputValue("");
    };
    const handleClose = () => {
        setOpen(false);
        console.log("CLICK ");
    };

    return (
        <div style={{
            width: "50%",
            minHeight: "inherit",
            paddingTop: 125,
            paddingRight: 20,
        }}>
            <div className={classes.CreateTemplateTags}>
                <Tags/>
            </div>
            <div
                className={classes.CreateTemplate_description}
                style={{display: tagLength ? "block" : "none"}}
            >
                <Collapse in={tagLength}>
                    {tagLength ? (
                        <>
                            <h1 style={{
                                fontWeight: 500,
                                fontSize: 24
                            }}>Add new</h1>
                            <CustomButton
                                className={classes.descriptionBtn}
                                onClick={handleWriteDescription}
                            >
                                Write description
                            </CustomButton>
                        </>
                    ) : (
                        ""
                    )}
                </Collapse>
            </div>
            {tagLength ? (
                <Collapse in={tagLength}>
                    <div>
                        <InputBase
                            className={classes.CreateTemplateHeading}
                            placeholder="Write heading"
                            inputProps={{"aria-label": "naked"}}
                            value={inputValue}
                            onChange={handleInputValue}
                        />
                    </div>
                </Collapse>
            ) : (
                ""
            )}
            {whiteCards
                .slice((page - 1) * 2, page * 2)
                .map((whiteCard: any, index: number) => {
                        const description = typeof (whiteCard.description) === 'string' ? whiteCard.description : JSON.stringify(whiteCard.description)
                        return (
                            <div
                                key={index}
                                onClick={() => handleOpenCurrent(whiteCard)}
                                className={classes.cardsHeading}
                                style={{zIndex: 0}}
                            >
                                {openCard ?
                                    <>
                                        <h1>{whiteCard.title}</h1>
                                        <MUIRichTextEditor
                                            defaultValue={description}
                                            controls={[]}
                                            readOnly
                                        />
                                    </>
                                    :
                                    <>
                                        <h1>{whiteCard.title}</h1>
                                        {openCard ?
                                            <>
                                                <MUIRichTextEditor
                                                    defaultValue={description}
                                                    controls={[]}
                                                    readOnly
                                                />
                                            </>
                                            :
                                            <MUIRichTextEditor
                                                defaultValue={description}
                                                controls={[]}
                                                readOnly
                                            />
                                        }
                                    </>
                                }
                            </div>
                        );
                    }
                )
            }
            <div>
                <Modal
                    open={openCurrent}
                    onClose={handleCloseCurrent}
                    style={{width: "100%", overflow: "scroll", zIndex: 1000}}
                >
                    <DescriptionModal
                        card={selectedWhiteCard}
                        setOpen={setOpenCurrent}
                        setOpenCard={setOpenCard}
                    />
                </Modal>
            </div>
            <div
                className={
                    writeDescription
                        ? classes.CreateTemplateModalOpen
                        : classes.CreateTemplateModal
                }
            >
                <Modal
                    open={open}
                    onClose={handleClose}
                    style={{width: "100%", overflow: "scroll"}}
                >
                    <DescriptionModal
                        card={selectedWhiteCard}
                        setOpen={setOpen}
                        setOpenCard={setOpenCard}/>
                </Modal>
            </div>

                <div>
                    {whiteCards.length > 2 ? (
                        <div className={classes.pagination}>
                            <Paginator
                                count={totalPages}
                                page={page}
                                onChange={handlePagination}
                            />
                        </div>
                    ) : (
                        ""
                    )}
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div className={classes.actions} style={{marginTop: 50}}>
                            <Button
                                onClick={saveBrief}
                                className={classes.actionsBtnSave}
                                variant="contained"
                            >
                                Save
                            </Button>
                            <div style={{position: "relative"}}>
                                <SvgIcon
                                    className={classes.actionsBurger}
                                    onClick={handleActionsBurger}
                                >
                                    <MoreVertIcon/>
                                </SvgIcon>
                                <div
                                    className={
                                        actionsBurger
                                            ? classes.actionsBurgerModalOpen
                                            : classes.actionsBurgerModal
                                    }
                                >
                                    <div className={classes.modalBurgerCopytext}>
                                        <SvgIcon className={classes.actionsBurgerIcon}>
                                            <FileCopyOutlinedIcon/>
                                        </SvgIcon>
                                        <Typography
                                            className={classes.actionsBurgerText}
                                            variant="body2"
                                            onClick={copyText}
                                        >
                                            Copy text
                                        </Typography>
                                    </div>
                                    <div className={classes.modalBurgerCopytext}>
                                        <SvgIcon className={classes.actionsBurgerIcon}>
                                            <DeleteIcon/>
                                        </SvgIcon>
                                        <Typography
                                            className={classes.actionsBurgerText}
                                            variant="body2"
                                            onClick={clearAll}
                                        >
                                            Clear all
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <Button onClick={copyLink} className={classes.actionsBtnLink}>
                                Copy Link
                            </Button>
                        </div>
                    </ClickAwayListener>
                </div>
        </div>
    );
}

export default observer(AdminTemplateMainField);