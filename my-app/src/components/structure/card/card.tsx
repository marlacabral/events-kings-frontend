import React from "react";
import { CardDiv, ImageDiv } from "./style";

export function Card (){
    return (
        <CardDiv>
            <div>
                <h5>Marla Cabral</h5>
                <h5>32 anos</h5>
                <h5>roncolicabral@gmail.com</h5>
                <h5>51996140140</h5>
                <h5>73998517608</h5>
                <h5>8093744012</h5>
                <h5>01361186070</h5>
                <h5>Garçonete, bar, caixa</h5>
            </div>

            <div>
                <img src="./images/img2.png" alt="Imagem de Marla Cabral"></img>
            </div>
            
            <div>
                <button className="btn-adicionar">Adicionar</button>
            </div>
            
        </CardDiv>
    )
}