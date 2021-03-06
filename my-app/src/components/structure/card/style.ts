import styled from "styled-components";

export const CardDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: yellow;
    background-color: #212529;
    width: 200px;
    max-width: 400px;
    padding: .8rem .5rem;
    border-radius: 2rem;
    box-shadow: yellow;
    margin: 0.5em;
    :hover{
        color: white;
        cursor: pointer;
        transition: all 400ms ease;
        transform: scale(1.02);
    }
`;

export const NameText = styled.h5`
    font-size: .7em;
`;
export const IdadeText = styled.h5`
    font-size: .7em;
`;
export const EmailText = styled.h5`
    font-size: .7em;
`;
export const WhatsappText = styled.h5`
    font-size: .7em;
`;
export const FoneText = styled.h5`
    font-size: .7em;
`;
export const RgText = styled.h5`
    font-size: .7em;
`;
export const CpfText = styled.h5`
    font-size: .7em;
`;
export const ExperienceEventsText = styled.h5`
    font-size: .7em;
`; 
export const AdressText = styled.h5`
    font-size: .7em;
`;

type Primary = {
    primary: boolean;
};

export const ButtonDiv = styled.button<Primary>`
    background-color: ${(props) => (props.primary ? "red" : "blue")};
    border: none;
    border-radius: 10px;
    color: ${(props) => (props.primary ? "white" : "yellow")};
    padding: 7px 3px;
    margin: 5px;
`

export const NumberDiv = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
`
export const NumberElement = styled.h2`
    color: yellow;
    font-size: 90%;

`

