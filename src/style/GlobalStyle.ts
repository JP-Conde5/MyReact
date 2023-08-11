import { createGlobalStyle } from "styled-components"

export const Padrao = createGlobalStyle`
    *{
        margin: 0rem;
        padding: 0rem;
        outline: 0rem;
        border: 0rem;
        box-sizing: border-box;
        font-family: "Galada";
    }
` 

export const cores = {
    primaria: "#FFA8D2",
    secundaria: "#FFF2A0",
    terceraria: "#E3DCC0",
    branco: "#FFFF", 
    preto: "#0000",
}