// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import { Box, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useStyles from "../../styles/admin/adminRouterBack";
import {useRouter} from "next/router";
import Link from "next/link";
import React from "react";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
export function AdminRouterBack() {
    const classes = useStyles();
    const router = useRouter()
    const isTag = router.route === "/admin/edit_tags";
    const isCategoryTag = router.route === "/admin/edit_categories_tags";
    const isCard = router.route === "/admin/edit_cards";
    const isTemplate = router.route === "/admin/edit_templates";
    const isNewTemplate = router.route === "/admin/add_new_template";
    return (
        <Box className={classes.rootRouterBack}>
            <Container style={{maxWidth: 1365}}>
            <div className={classes.routerBackWrap}>
                    <Link href={isCategoryTag ? "/admin/edit_categories_tags" : "/admin/edit_categories_templates"}>
                    <p>Categories</p>
                    </Link>
                    <i className="fas fa-arrow-right"/>
                    {
                        isTag
                            ?
                            <>
                            <Link href={"/admin/edit_tags"}>
                            <p>Tags</p>
                            </Link>
                            <i className="fas fa-arrow-right"/>
                            </>
                        :
                        ""
                    }
                    {
                        isCard
                            ?
                            <>
                                <Link href={"/admin/edit_tags"}>
                                    <p>Tags</p>
                                </Link>
                                <i className="fas fa-arrow-right"/>
                                <Link href={"/admin/edit_cards"}>
                                    <p>Edit tag name</p>
                                </Link>
                            </>
                            :
                            isTemplate
                        ?
                                <>
                                    <Link href={"/admin/edit_templates"}>
                                        <p>Templates</p>
                                    </Link>
                                    <i className="fas fa-arrow-right"/>
                                </>
                                :
                                isNewTemplate
                        ?
                                    <>
                                        <Link href={"/admin/edit_templates"}>
                                            <p>Templates</p>
                                        </Link>
                                        <i className="fas fa-arrow-right"/>
                                        <Link href={"/admin/edit_cards"}>
                                            <p>Edit template</p>
                                        </Link>
                                    </>
                                    :
                                    ""

                    }
                </div>
            </Container>
        </Box>
    );
}