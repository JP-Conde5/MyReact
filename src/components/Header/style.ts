import styled from "styled-components"
import { cores } from "../../style/GlobalStyle"

export const Header = styled.header`
    height: 5.625rem;
    width: 100%;
    background-color: ${cores.primaria};
    color: ${cores.branco};
    border-bottom: 1.625rem ${cores.primaria} solid;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    align-items: center;
    display: space-between;
    div{
        width: 50%;
        align-items: center;
        display: flex;
        h1{
            font-size: 63px;
            color: ${cores.branco};
            picture{
                width: 4.375rem;
                height: 4.375rem;
                padding: 1rem;
            }
        }
    }    
    nav{
        width: 50%;
        align-items: center;
        display: flex;
        ul{
            display: flex; 
            justify-content: space-around;
            align-items: center;
            list-style-type: none;
            li{
                width: 100%
                a{
                    width: 100%;
                    text-decoration: none;
                    color: ${cores.branco};
                }
            }
            li:hover{
                background-color: ${cores.secundaria};
                color: ${cores.primaria};
            }
        }
    }    
`    
export const Fundo = styled.div`
    height: 6.75rem;
    width: 100%;
    background-color: ${cores.secundaria};
    border-bottom: 1.125rem ${cores.secundaria} solid;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%; 
`