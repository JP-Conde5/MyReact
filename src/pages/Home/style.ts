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
            width: 28.75rem;
            height: 30.625rem;
        }
        article{
            width: 80%;
            font-size: 2.25rem;
            h1{
                color: ${cores.primaria};
            }
            p{
                color: ${cores.branco}
            }
        }
    }

`