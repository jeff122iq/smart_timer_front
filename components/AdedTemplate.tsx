import React, {useEffect} from 'react';
import {EditTemplates} from "../store/admin/editTemplates";
import {useRouter} from "next/router";
import MUIRichTextEditor from "./mui-rte/MUIRichTextEditor";
import {toJS} from "mobx";
import {brief} from "../interface/brief";
import {observer} from "mobx-react";

const AdedTemplate = () => {
    const router = useRouter();
    const templateId = router.query.id;
    const {getTemplate, currentTemplate} = EditTemplates;
    useEffect(() => {
        async function getData(){
            await getTemplate(templateId);
        }
        getData()
    }, [router.query.id])
    const template:brief = toJS(currentTemplate)

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div style={{width: "500px", height: "inherit", margin: "20px"}}>
                <h1>Template name: {template?.name}</h1>
                <hr/>
                <div>
                    {template && template.cards.map((card,idx) => {
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

export default observer(AdedTemplate);