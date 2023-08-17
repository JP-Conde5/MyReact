import styled from "styled-components"
import { cores } from "../../style/GlobalStyle"

export const Aside = styled.aside`
    background-color: ${cores.secundaria};
    border: 1rem solid ${cores.secundaria};
    border-radius: 1.375rem;
    width: 32.063rem;
    height: 21.313rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    img{
        width: 13.375rem;
        height: 13.375rem;
    }
    h3{
       font-size: 2.25rem;
       color: ${cores.primaria}; 
    }
`