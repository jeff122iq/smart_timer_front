import React, {useEffect, useState} from 'react';
import {EditTagAndCategories} from "../../../store/admin/editTagAndCategories";
import {observer} from "mobx-react";
import {toJS} from 'mobx'
import {createStyles, withStyles} from "@material-ui/core/styles";
import {ButtonBase} from "@material-ui/core";
import useStyles from "../../../styles/admin/adminMainCardField"
import Modal from "@material-ui/core/Modal";
import AdminEditCard from "./AdminEditCard";
import MUIRichTextEditor from "../../mui-rte/MUIRichTextEditor";
import Paginator from "../../Paginator";


const AdminMainCardField = (props: any) => {
    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }
    const classes = useStyles();
    const [writeDescription, setWriteDescription] = useState(false);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const handlePagination = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
    };
    const CustomButton = withStyles(() => {
        createStyles({
            focusVisible: {
                display: "none",
            },
        });
    })(ButtonBase);
    const {isMainField} = EditTagAndCategories;
    const totalPages = Math.ceil(isMainField.length / 2);
    const handleWriteDescription = () => {
        setWriteDescription(!writeDescription);
        setOpen(true);
    };
    const closeModal = () => {
        setOpen(false)
    }

    return (
        <div className={classes.mainCardContainer}>
            <h1 style={{
                fontWeight: 500,
                marginTop: 70
            }}>Main</h1>
            <div>
                {isMainField.slice((page - 1) * 2, page * 2)
                    .map((card, index) => {
                    return (
                        <div key={index}>
                            <h1 style={{
                                fontWeight: 400,
                            }}>{card.title}</h1>
                            {/*<p>{JSON.stringify(card.description)}</p>*/}
                            <MUIRichTextEditor
                                defaultValue={toJS(card.description)}
                                controls={[]}
                                readOnly
                            />
                        </div>
                    )
                }
                )
                }
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }}>
            <Paginator
                count={totalPages}
                page={page}
                onChange={handlePagination}
            />
            </div>
            <Modal
                open={open}
                onClose={closeModal}
                style={{ width: "100%", overflow: "scroll", zIndex: 1000 }}
            >
                <AdminEditCard setOpenCard={open} setOpen={setOpen}/>
            </Modal>
            <CustomButton
                className={classes.descriptionBtn}
                onClick={handleWriteDescription}
            >
                Write description
            </CustomButton>
        </div>
    );
};

export default observer(AdminMainCardField);