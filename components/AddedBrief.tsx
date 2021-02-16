import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {BriefStore} from "../store/briefStore"
import {observer} from "mobx-react";

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
        <div style={{textAlign: "center", width: "500px", height: "inherit"}}>
            <h1>Brief name: {currentBrief.name}</h1>
            <hr/>
            <div>
                {currentBrief.cards.map((card,idx) => {
                    return(
                        <>
                            <h1>Template: </h1>
                        <div key={idx}>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                            <hr/>
                        </>
                    )
                })}
            </div>
        </div>
        </div>
    );
};

export default observer(AddedBrief);