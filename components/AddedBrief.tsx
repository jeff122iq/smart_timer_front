import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {BriefStore} from "../store/briefStore"
import {observer} from "mobx-react";
import MUIRichTextEditor from "./mui-rte/MUIRichTextEditor";

const AddedBrief = () => {
    const {getBrief, currentBrief} = BriefStore
    const router = useRouter();
    const briefId = router.query.id;
    useEffect(() => {
        async function getData(){
            await getBrief(briefId);
        }
        getData()
    }, [router.query.id])
    if(!currentBrief) {
        return <div>Loading...</div>
    }
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div style={{width: "500px", height: "inherit", margin: "20px"}}>
            <h1>Brief name: {currentBrief.name}</h1>
            <hr/>
            <div>
                {currentBrief.cards.map((card,idx) => {
                    return(
                        <div key={idx}>
                            <h2>{card.title}</h2>
                            <MUIRichTextEditor
                                defaultValue={JSON.stringify(card.description)}
                                controls={[]}
                                readOnly
                            /></div>
                    )
                })}
            </div>
        </div>
        </div>
    );
};

export default observer(AddedBrief);