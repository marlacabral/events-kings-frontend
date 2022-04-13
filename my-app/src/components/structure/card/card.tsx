import React from "react";
import { CardDiv, NameText, ButtonDiv, IdadeText, EmailText, WhatsappText, FoneText, RgText, CpfText, ExperienceEventsText, AdressText } from "./style";

export function Card (props: any){
    return (
        <CardDiv>
            <div>
                <img src={props.pic} alt={props.name}></img>
            </div>
            <div>
                <NameText>{props.name}</NameText>
                <IdadeText>{props.idade}</IdadeText>
                <EmailText>{props.email}</EmailText>
                <WhatsappText>{props.whatsapp}</WhatsappText>
                <FoneText>{props.fone}</FoneText>
                <RgText>{props.rg}</RgText>
                <CpfText>{props.cpf}</CpfText>
                <ExperienceEventsText>{props.experienceEvents}</ExperienceEventsText>
                <AdressText>{props.adress}</AdressText>
            </div>

            <div>
                <ButtonDiv primary={false} >Adicionar</ButtonDiv>
                <ButtonDiv primary={true} >Deletar</ButtonDiv>
            </div>
            
        </CardDiv>
    )
}