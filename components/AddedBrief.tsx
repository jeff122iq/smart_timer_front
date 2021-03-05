import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {BriefStore} from "../store/briefStore"
import {observer} from "mobx-react";
import MUIRichTextEditor from "./mui-rte/MUIRichTextEditor";
import {toJS} from "mobx";


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
    const brief = toJS(currentBrief)
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div style={{width: "500px", height: "inherit", margin: "20px"}}>
            <h1>Brief name: {brief.name}</h1>
            <hr/>
            <div>
                {brief.cards.map((card,idx) => {
                    console.log(card)
                    return(
                        <div key={idx}>
                            <h2>{card.title}</h2>
                            <MUIRichTextEditor
                                defaultValue={card.description}
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