import React, { useState } from "react";
import { CardDiv, NameText, ButtonDiv, IdadeText, EmailText, WhatsappText, FoneText, RgText, CpfText, ExperienceEventsText, AdressText, NumberDiv, NumberElement } from "./style";

type PropsColaborador = {
    name: string,
    pic: string,
    idade: string,
    email: string,
    whatsapp: string,
    fone: string,
    rg: string,
    cpf: string,
    experienceEvents: boolean,
    adress: string,
};

export function Card (props: PropsColaborador){
    const [colaboradorAdicionado, setColaboradorAdicionado] = useState<number>(0)

    function adicionarColaborador(){
        setColaboradorAdicionado(colaboradorAdicionado + 1)
    }

    function removerColaborador(){
        setColaboradorAdicionado(colaboradorAdicionado - 1)
    }

    return (
        <CardDiv>
            <NumberDiv><NumberElement>{colaboradorAdicionado}</NumberElement></NumberDiv>
            <div>
                <img src={props.pic} width="120px" alt={props.name}></img>
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
                { colaboradorAdicionado > 0 ?
                <>
                    <ButtonDiv primary={false} onClick={adicionarColaborador}>Adicionar</ButtonDiv>
                    <ButtonDiv primary={true} onClick={removerColaborador}>Deletar</ButtonDiv>
                </>
                :
                    <ButtonDiv primary={false} onClick={adicionarColaborador}>Adicionar</ButtonDiv>
                }
                </div>
        </CardDiv>   
    )
}