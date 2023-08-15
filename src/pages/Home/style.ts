import styled from "styled-components"
import { cores } from "../../style/GlobalStyle.ts"

export const Home = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    div{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 80%;
        }
        article{
            width: 80%;
            h1{
                color: ${cores.primaria};
            }
        }
    }

`